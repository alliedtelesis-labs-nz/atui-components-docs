import { r as registerInstance, a as getElement, h, H as Host } from './index-CIMU6MgJ.js';

const atResizableHandleCss = () => `at-resizable-handle{position:relative;display:flex;align-items:center;justify-content:center;flex:0 0 auto;background:transparent;outline:none}at-resizable-handle::before{content:"";position:absolute;background:var(--token-border-muted);transition:background-color 0.15s ease}at-resizable-handle:hover::before,at-resizable-handle[data-dragging=true]::before{background:var(--token-color-brand-primary)}at-resizable-handle:focus-visible{background:var(--token-color-brand-active-light)}at-resizable-handle .grip{position:absolute;border-radius:999px;background:var(--token-border-muted)}at-resizable-handle[aria-orientation=horizontal]{width:8px;cursor:col-resize}at-resizable-handle[aria-orientation=horizontal]::before{top:0;bottom:0;left:3.5px;width:1px}at-resizable-handle[aria-orientation=horizontal] .grip{width:3px;height:24px}at-resizable-handle[aria-orientation=vertical]{height:8px;cursor:row-resize}at-resizable-handle[aria-orientation=vertical]::before{left:0;right:0;top:3.5px;height:1px}at-resizable-handle[aria-orientation=vertical] .grip{width:24px;height:3px}@media (prefers-reduced-motion: reduce){at-resizable-handle::before{transition:none}}`;

const LARGE_NUDGE_PERCENT = 5;
const SMALL_NUDGE_PERCENT = 1;
const AtResizableHandleComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
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
};
AtResizableHandleComponent.style = atResizableHandleCss();

export { AtResizableHandleComponent as at_resizable_handle };
