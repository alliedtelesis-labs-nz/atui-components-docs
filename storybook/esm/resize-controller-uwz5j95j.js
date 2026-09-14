const DEFAULT_MIN_SIZE = 10;
const DEFAULT_MAX_SIZE = 100;
/** How close (in percentage points) a drag must get to a collapsible panel's min bound before it snaps shut. */
const COLLAPSE_SNAP_THRESHOLD = 2;
/**
 * Pure drag/keyboard/persistence math for a set of adjacent resizable panels sharing 100% of an axis.
 * Deliberately has no Stencil or DOM-event dependency beyond the pixel deltas its caller hands it, so
 * at-sidebar can reuse it for a single-handle width resize without pulling in the rest of the family.
 */
class ResizeController {
    direction;
    storageKey;
    onChange;
    panels = new Map();
    persisted;
    drag = null;
    constructor(options) {
        this.direction = options.direction;
        this.storageKey = options.storageKey;
        this.onChange = options.onChange;
        this.persisted = this.loadPersisted();
    }
    getPanel(id) {
        return this.panels.get(id);
    }
    getEntry(id) {
        const panel = this.panels.get(id);
        if (!panel)
            return undefined;
        return {
            id,
            size: panel.size,
            isCollapsed: panel.isCollapsed,
            collapsible: panel.collapsible,
            minSize: panel.minSize,
            maxSize: panel.maxSize,
        };
    }
    // Panels register asynchronously (each awaits an @Method() call on the group), so
    // registration order can differ from DOM order — the group is the source of truth for
    // ordering, derived fresh from live DOM position each time it's needed. This map only
    // stores per-id state, keyed by id, order-agnostic.
    registerPanel(id, config) {
        const minSize = config.minSize ?? DEFAULT_MIN_SIZE;
        const maxSize = config.maxSize ?? DEFAULT_MAX_SIZE;
        const collapsedSize = config.collapsedSize ?? 0;
        const persistedSize = this.persisted?.[id];
        const rawSize = persistedSize ?? config.defaultSize ?? null;
        // A persisted size survives across sessions; if the caller has since narrowed minSize/
        // maxSize (or the CSS length they resolve from changed), the stored value can fall
        // outside the bounds being registered right now — clamp it so panel.size, the emitted
        // atuiSidebarResize pixel value, and aria-valuenow never start out-of-bounds.
        const size = rawSize !== null
            ? Math.min(maxSize, Math.max(minSize, rawSize))
            : null;
        this.panels.set(id, {
            id,
            size,
            defaultSize: config.defaultSize ?? null,
            minSize,
            maxSize,
            collapsible: config.collapsible ?? false,
            collapsedSize,
            isCollapsed: persistedSize !== undefined
                ? persistedSize <= collapsedSize
                : false,
            preCollapseSize: null,
        });
        this.onChange();
    }
    unregisterPanel(id) {
        this.panels.delete(id);
        this.onChange();
    }
    collapse(id) {
        const panel = this.panels.get(id);
        if (!panel || !panel.collapsible || panel.isCollapsed)
            return;
        panel.preCollapseSize = panel.size;
        panel.size = panel.collapsedSize;
        panel.isCollapsed = true;
        this.onChange();
        this.persist();
    }
    /** Restores a collapsed panel to the size it had right before it collapsed, falling back to its default_size or min_size if it was never given one (e.g. it started collapsed from persisted state). */
    expand(id) {
        const panel = this.panels.get(id);
        if (!panel || !panel.isCollapsed)
            return;
        panel.size =
            panel.preCollapseSize ?? panel.defaultSize ?? panel.minSize;
        panel.isCollapsed = false;
        panel.preCollapseSize = null;
        this.onChange();
        this.persist();
    }
    /**
     * Refreshes a panel's min/max bounds in place, re-clamping its current size if the new bounds
     * no longer fit it. For a caller whose bounds are expressed in a unit that can drift relative
     * to this controller's percentages — e.g. at-sidebar's pixel min_width/max_width, which stay
     * fixed in px while the container they're a percentage of can resize under them.
     */
    updateBounds(id, bounds) {
        const panel = this.panels.get(id);
        if (!panel)
            return;
        if (bounds.minSize !== undefined)
            panel.minSize = bounds.minSize;
        if (bounds.maxSize !== undefined)
            panel.maxSize = bounds.maxSize;
        if (panel.size === null)
            return;
        const clamped = Math.min(panel.maxSize, Math.max(panel.minSize, panel.size));
        if (clamped !== panel.size) {
            panel.size = clamped;
            this.onChange();
            this.persist();
        }
    }
    /** Resets both panels adjacent to a handle back to their default (registered) size, where they have one. */
    resetPair(prevId, nextId) {
        const prev = this.panels.get(prevId);
        const next = this.panels.get(nextId);
        if (prev && prev.defaultSize !== null) {
            prev.size = prev.defaultSize;
            prev.isCollapsed = false;
        }
        if (next && next.defaultSize !== null) {
            next.size = next.defaultSize;
            next.isCollapsed = false;
        }
        this.onChange();
        this.persist();
    }
    beginDrag(prevId, nextId, startClientPos, groupSizePx) {
        const prev = this.panels.get(prevId);
        const next = this.panels.get(nextId);
        if (!prev || !next || groupSizePx <= 0)
            return;
        // A panel with no explicit size is free-flexing (hugging content). The first drag that
        // touches it fixes its current rendered share as a concrete percentage — from then on it
        // behaves like any other sized panel. This keeps the drag math uniform without forcing
        // every panel to declare a default_size up front.
        const startPrevSize = prev.size ?? this.percentOfRemaining();
        const startNextSize = next.size ?? this.percentOfRemaining();
        prev.size = startPrevSize;
        next.size = startNextSize;
        this.drag = {
            prevId,
            nextId,
            startClientPos,
            startPrevSize,
            startNextSize,
            groupSizePx,
        };
    }
    updateDrag(clientPos) {
        if (!this.drag)
            return;
        const deltaPx = clientPos - this.drag.startClientPos;
        const deltaPercent = (deltaPx / this.drag.groupSizePx) * 100;
        this.applyDelta(this.drag.prevId, this.drag.nextId, this.drag.startPrevSize, this.drag.startNextSize, deltaPercent);
    }
    endDrag() {
        this.drag = null;
        this.persist();
    }
    /** Keyboard nudge: moves size from nextPanel into prevPanel (positive delta grows prevPanel). */
    nudge(prevId, nextId, deltaPercent) {
        const prev = this.panels.get(prevId);
        const next = this.panels.get(nextId);
        if (!prev || !next)
            return;
        const startPrevSize = prev.size ?? this.percentOfRemaining();
        const startNextSize = next.size ?? this.percentOfRemaining();
        this.applyDelta(prevId, nextId, startPrevSize, startNextSize, deltaPercent);
        this.persist();
    }
    jumpToBound(prevId, nextId, toStart) {
        const prev = this.panels.get(prevId);
        const next = this.panels.get(nextId);
        if (!prev || !next)
            return;
        // Same promotion as beginDrag/nudge: an unsized neighbor's real share of the
        // group isn't 0, it's whatever percentOfRemaining says it's currently hugging.
        const startPrevSize = prev.size ?? this.percentOfRemaining();
        const startNextSize = next.size ?? this.percentOfRemaining();
        const total = startPrevSize + startNextSize;
        // Home = collapse/minimize prevPanel (drag the handle fully toward the start of the axis);
        // End = maximize prevPanel (drag the handle fully toward the end of the axis).
        const targetPrevSize = toStart
            ? prev.collapsible
                ? prev.collapsedSize
                : prev.minSize
            : Math.min(prev.maxSize, total - next.minSize);
        this.applyAbsolute(prevId, nextId, targetPrevSize, total);
        this.persist();
    }
    percentOfRemaining() {
        let sizedTotal = 0;
        let unsizedCount = 0;
        this.panels.forEach((panel) => {
            if (panel.size === null) {
                unsizedCount++;
            }
            else {
                sizedTotal += panel.size;
            }
        });
        const remaining = Math.max(0, 100 - sizedTotal);
        return unsizedCount > 0 ? remaining / unsizedCount : 0;
    }
    applyDelta(prevId, nextId, startPrevSize, startNextSize, deltaPercent) {
        const total = startPrevSize + startNextSize;
        this.applyAbsolute(prevId, nextId, startPrevSize + deltaPercent, total);
    }
    applyAbsolute(prevId, nextId, rawPrevSize, total) {
        const prev = this.panels.get(prevId);
        const next = this.panels.get(nextId);
        if (!prev || !next)
            return;
        let prevSize = rawPrevSize;
        let nextSize = total - prevSize;
        prevSize = this.resolveCollapse(prev, prevSize);
        nextSize = total - prevSize;
        nextSize = this.resolveCollapse(next, nextSize);
        prevSize = total - nextSize;
        const prevLower = prev.collapsible && prev.isCollapsed
            ? prev.collapsedSize
            : prev.minSize;
        const nextLower = next.collapsible && next.isCollapsed
            ? next.collapsedSize
            : next.minSize;
        // Clamping prevSize to its own bounds, then deriving nextSize and clamping THAT to its
        // own bounds, then reassigning prevSize by subtraction one more time, could push the
        // final prevSize back outside its own bounds with no further check — e.g. total=100,
        // prev min=50, next min=80: prevSize=90 clamps fine, but forcing nextSize up to 80 then
        // reassigns prevSize=20, well under its own min=50. Intersecting both panels' valid
        // ranges into one bound on prevSize guarantees the final value always respects prev's
        // own min/max; next's bounds only can't also be satisfied when the two conflict outright
        // (combined minSizes exceeding total — a misconfiguration, not a normal drag/keyboard step).
        const lowerBound = Math.max(prevLower, total - next.maxSize);
        const upperBound = Math.min(prev.maxSize, total - nextLower);
        prevSize =
            lowerBound <= upperBound
                ? Math.max(lowerBound, Math.min(upperBound, prevSize))
                : prevLower;
        nextSize = total - prevSize;
        const prevChanged = prev.size !== prevSize;
        const nextChanged = next.size !== nextSize;
        prev.size = prevSize;
        next.size = nextSize;
        if (prevChanged || nextChanged)
            this.onChange();
    }
    /** Snaps a collapsible panel shut once a drag pushes it within COLLAPSE_SNAP_THRESHOLD of its min bound, or reopens it once pulled back past that. */
    resolveCollapse(panel, candidateSize) {
        if (!panel.collapsible)
            return candidateSize;
        if (!panel.isCollapsed &&
            candidateSize <= panel.minSize + COLLAPSE_SNAP_THRESHOLD) {
            panel.preCollapseSize = panel.size;
            panel.isCollapsed = true;
            return panel.collapsedSize;
        }
        if (panel.isCollapsed &&
            candidateSize > panel.collapsedSize + COLLAPSE_SNAP_THRESHOLD) {
            panel.isCollapsed = false;
            panel.preCollapseSize = null;
            return panel.minSize;
        }
        return panel.isCollapsed ? panel.collapsedSize : candidateSize;
    }
    persist() {
        if (!this.storageKey || typeof localStorage === 'undefined')
            return;
        const sizes = {};
        this.panels.forEach((panel, id) => {
            if (panel.size !== null)
                sizes[id] = panel.size;
        });
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(sizes));
        }
        catch {
            // Storage unavailable (private browsing, quota) — resizing still works, it just won't persist.
        }
    }
    loadPersisted() {
        if (!this.storageKey || typeof localStorage === 'undefined')
            return null;
        try {
            const raw = localStorage.getItem(this.storageKey);
            return raw ? JSON.parse(raw) : null;
        }
        catch {
            return null;
        }
    }
}

export { ResizeController as R };
