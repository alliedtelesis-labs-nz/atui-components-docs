import { h, Host } from "@stencil/core";
const LARGE_NUDGE_PERCENT = 5;
const SMALL_NUDGE_PERCENT = 1;
/**
 * @category Layout
 * @description The draggable separator between two at-resizable-panel children of the same at-resizable-group. Supports pointer drag, keyboard resize (arrow keys, Home/End, Enter to collapse, double-click to reset), and reduced-motion.
 */
export class AtResizableHandleComponent {
    el;
    /** Renders a small visual grip indicator on the handle. */
    has_grip = false;
    isDragging = false;
    prevState;
    direction = 'horizontal';
    group = null;
    handleIndex = -1;
    prevId;
    nextId;
    directionObserver;
    componentWillLoad() {
        this.group = this.el.parentElement?.closest('at-resizable-group');
        const siblingHandles = Array.from(this.el.parentElement?.children ?? []).filter((child) => child.tagName.toLowerCase() === 'at-resizable-handle');
        this.handleIndex = siblingHandles.indexOf(this.el);
    }
    async componentDidLoad() {
        if (!this.group)
            return;
        this.syncDirection();
        // direction is reflected on the group (see at-resizable-group.tsx), so a runtime change
        // is observable as an attribute mutation — @State keeps clientPos/cursor/keyboard
        // mapping/aria-orientation from getting stuck on whatever direction was set at mount.
        this.directionObserver = new MutationObserver(() => this.syncDirection());
        this.directionObserver.observe(this.group, {
            attributes: true,
            attributeFilter: ['direction'],
        });
        this.group.addEventListener('atuiResizableChange', this.handleGroupChange);
        await this.resolveAdjacentPanels();
    }
    syncDirection() {
        this.direction = this.group?.direction ?? 'horizontal';
    }
    /**
     * The panels on either side of this handle can still be registering (each awaits an
     * @Method() call on the group) when this handle's own componentDidLoad runs, so the very
     * first lookup can legitimately come back empty. handleGroupChange retries this on every
     * subsequent broadcast until it resolves, rather than giving up after one attempt.
     */
    async resolveAdjacentPanels() {
        if (!this.group ||
            (this.prevId !== undefined && this.nextId !== undefined))
            return;
        const ids = await this.group.getAdjacentPanelIds(this.handleIndex);
        if (!ids)
            return;
        this.prevId = ids.prevId;
        this.nextId = ids.nextId;
        this.prevState = await this.group.getPanelState(ids.prevId);
    }
    disconnectedCallback() {
        this.group?.removeEventListener('atuiResizableChange', this.handleGroupChange);
        this.directionObserver?.disconnect();
        // Unmounting mid-drag (route change, conditional removal) means pointerup/pointercancel
        // never fire — clear the body styles here too, or they'd be stuck until a full reload.
        if (this.isDragging) {
            this.clearBodyDragStyles();
        }
        document.removeEventListener('pointermove', this.handlePointerMove);
        document.removeEventListener('pointerup', this.handlePointerEnd);
        document.removeEventListener('pointercancel', this.handlePointerEnd);
    }
    clearBodyDragStyles() {
        document.body.style.removeProperty('user-select');
        document.body.style.removeProperty('cursor');
    }
    handleGroupChange = (event) => {
        if (this.prevId === undefined || this.nextId === undefined) {
            this.resolveAdjacentPanels();
            return;
        }
        const prev = event.detail.find((entry) => entry.id === this.prevId);
        if (prev)
            this.prevState = prev;
    };
    clientPos(event) {
        return this.direction === 'horizontal' ? event.clientX : event.clientY;
    }
    handlePointerDown = (event) => {
        if (!this.group || this.prevId === undefined)
            return;
        event.preventDefault();
        this.isDragging = true;
        this.group.beginDrag(this.handleIndex, this.clientPos(event));
        document.body.style.userSelect = 'none';
        document.body.style.cursor =
            this.direction === 'horizontal' ? 'col-resize' : 'row-resize';
        document.addEventListener('pointermove', this.handlePointerMove);
        document.addEventListener('pointerup', this.handlePointerEnd);
        document.addEventListener('pointercancel', this.handlePointerEnd);
    };
    handlePointerMove = (event) => {
        if (!this.isDragging || !this.group)
            return;
        this.group.updateDrag(this.clientPos(event));
    };
    handlePointerEnd = () => {
        if (!this.isDragging || !this.group)
            return;
        this.isDragging = false;
        this.group.endDrag();
        this.clearBodyDragStyles();
        document.removeEventListener('pointermove', this.handlePointerMove);
        document.removeEventListener('pointerup', this.handlePointerEnd);
        document.removeEventListener('pointercancel', this.handlePointerEnd);
    };
    handleKeyDown = (event) => {
        if (!this.group)
            return;
        const nudgeAmount = event.shiftKey
            ? SMALL_NUDGE_PERCENT
            : LARGE_NUDGE_PERCENT;
        const growKey = this.direction === 'horizontal' ? 'ArrowRight' : 'ArrowDown';
        const shrinkKey = this.direction === 'horizontal' ? 'ArrowLeft' : 'ArrowUp';
        switch (event.key) {
            case growKey:
                event.preventDefault();
                this.group.nudge(this.handleIndex, nudgeAmount);
                break;
            case shrinkKey:
                event.preventDefault();
                this.group.nudge(this.handleIndex, -nudgeAmount);
                break;
            case 'Home':
                event.preventDefault();
                this.group.jumpToBound(this.handleIndex, true);
                break;
            case 'End':
                event.preventDefault();
                this.group.jumpToBound(this.handleIndex, false);
                break;
            case 'Enter':
                event.preventDefault();
                void this.toggleAdjacentCollapse();
                break;
        }
    };
    // Queries the group fresh rather than trusting this.prevState (or a nextState — deliberately
    // not cached, since nothing else needs it) — those are populated by resolveAdjacentPanels
    // asynchronously and may not have settled yet if Enter is pressed immediately after mount.
    async toggleAdjacentCollapse() {
        if (!this.group)
            return;
        const ids = await this.group.getAdjacentPanelIds(this.handleIndex);
        if (!ids)
            return;
        const [prevEntry, nextEntry] = await Promise.all([
            this.group.getPanelState(ids.prevId),
            this.group.getPanelState(ids.nextId),
        ]);
        const target = prevEntry?.collapsible
            ? { id: ids.prevId, state: prevEntry }
            : nextEntry?.collapsible
                ? { id: ids.nextId, state: nextEntry }
                : null;
        if (!target)
            return;
        if (target.state.isCollapsed) {
            this.group.expandPanel(target.id);
        }
        else {
            this.group.collapsePanel(target.id);
        }
    }
    handleDoubleClick = () => {
        this.group?.resetPair(this.handleIndex);
    };
    render() {
        return (h(Host, { key: '354a3e94b452bd8508adeb11af12453e01e1e0a0', "data-name": "resizable-handle", "data-dragging": this.isDragging ? 'true' : 'false', role: "separator", "aria-orientation": this.direction, "aria-controls": [this.prevId, this.nextId]
                .filter(Boolean)
                .join(' '), "aria-valuenow": this.prevState?.size ?? undefined, "aria-valuemin": this.prevState?.minSize ?? 0, "aria-valuemax": this.prevState?.maxSize ?? 100, tabindex: 0, onPointerDown: this.handlePointerDown, onKeyDown: this.handleKeyDown, onDblClick: this.handleDoubleClick }, this.has_grip && (h("div", { key: '8a8401644e6280c40a3ffbc682d32f65e706dc05', class: "grip", "aria-hidden": "true" }))));
    }
    static get is() { return "at-resizable-handle"; }
    static get originalStyleUrls() {
        return {
            "$": ["at-resizable-handle.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["at-resizable-handle.css"]
        };
    }
    static get properties() {
        return {
            "has_grip": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Renders a small visual grip indicator on the handle."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "has_grip",
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isDragging": {},
            "prevState": {},
            "direction": {}
        };
    }
    static get elementRef() { return "el"; }
}
