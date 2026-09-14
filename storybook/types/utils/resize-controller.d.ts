export type ResizeDirection = 'horizontal' | 'vertical';
export interface ResizablePanelState {
    id: string;
    /** Current flex-basis percentage, or null while the panel has no explicit size and is free to hug its content via flex-grow. */
    size: number | null;
    /** The size the panel registered with, restored by resetPair. Null for a panel that started unsized. */
    defaultSize: number | null;
    minSize: number;
    maxSize: number;
    collapsible: boolean;
    collapsedSize: number;
    isCollapsed: boolean;
    /** Size captured right before the panel collapsed, restored by expand(). Null until it's collapsed at least once. */
    preCollapseSize: number | null;
}
export interface AtResizableChangeEntry {
    id: string;
    size: number | null;
    isCollapsed: boolean;
    collapsible: boolean;
    minSize: number;
    maxSize: number;
}
export interface ResizablePanelConfig {
    defaultSize?: number;
    minSize?: number;
    maxSize?: number;
    collapsible?: boolean;
    collapsedSize?: number;
}
export interface ResizeControllerOptions {
    direction: ResizeDirection;
    storageKey?: string;
    /** Called after any state change so the host component can re-render/re-apply styles and broadcast the new snapshot. */
    onChange: () => void;
}
/**
 * Pure drag/keyboard/persistence math for a set of adjacent resizable panels sharing 100% of an axis.
 * Deliberately has no Stencil or DOM-event dependency beyond the pixel deltas its caller hands it, so
 * at-sidebar can reuse it for a single-handle width resize without pulling in the rest of the family.
 */
export declare class ResizeController {
    readonly direction: ResizeDirection;
    private storageKey?;
    private onChange;
    private panels;
    private persisted;
    private drag;
    constructor(options: ResizeControllerOptions);
    getPanel(id: string): ResizablePanelState | undefined;
    getEntry(id: string): AtResizableChangeEntry | undefined;
    registerPanel(id: string, config: ResizablePanelConfig): void;
    unregisterPanel(id: string): void;
    collapse(id: string): void;
    /** Restores a collapsed panel to the size it had right before it collapsed, falling back to its default_size or min_size if it was never given one (e.g. it started collapsed from persisted state). */
    expand(id: string): void;
    /**
     * Refreshes a panel's min/max bounds in place, re-clamping its current size if the new bounds
     * no longer fit it. For a caller whose bounds are expressed in a unit that can drift relative
     * to this controller's percentages — e.g. at-sidebar's pixel min_width/max_width, which stay
     * fixed in px while the container they're a percentage of can resize under them.
     */
    updateBounds(id: string, bounds: {
        minSize?: number;
        maxSize?: number;
    }): void;
    /** Resets both panels adjacent to a handle back to their default (registered) size, where they have one. */
    resetPair(prevId: string, nextId: string): void;
    beginDrag(prevId: string, nextId: string, startClientPos: number, groupSizePx: number): void;
    updateDrag(clientPos: number): void;
    endDrag(): void;
    /** Keyboard nudge: moves size from nextPanel into prevPanel (positive delta grows prevPanel). */
    nudge(prevId: string, nextId: string, deltaPercent: number): void;
    jumpToBound(prevId: string, nextId: string, toStart: boolean): void;
    private percentOfRemaining;
    private applyDelta;
    private applyAbsolute;
    /** Snaps a collapsible panel shut once a drag pushes it within COLLAPSE_SNAP_THRESHOLD of its min bound, or reopens it once pulled back past that. */
    private resolveCollapse;
    private persist;
    private loadPersisted;
}
