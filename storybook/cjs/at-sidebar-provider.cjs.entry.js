'use strict';

var index = require('./index-zRWHCAJe.js');

const atSidebarProviderCss = () => `at-sidebar-provider{display:flex;height:100%;width:100%;align-items:stretch;overflow:hidden;position:relative}at-sidebar-provider>.backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0, 0, 0, 0.2);z-index:calc(var(--token-z-index-nav) - 1);cursor:pointer;will-change:opacity;transition:opacity var(--token-transition-time);animation:fadeInBackdrop 300ms forwards}at-sidebar-provider>at-sidebar{flex:0 0 auto;width:auto;height:100%}at-sidebar-provider>at-sidebar[side=right]{order:1}`;

const AtSidebarProviderComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiSidebarProviderChange = index.createEvent(this, "atuiSidebarProviderChange", 7);
        this.atuiSidebarBackdropChange = index.createEvent(this, "atuiSidebarBackdropChange", 7);
    }
    get el() { return index.getElement(this); }
    panels = new Map();
    backdropRequests = new Set();
    /**
     * Tracks which at-sidebar instance currently owns each registered id, so a
     * stale instance (e.g. shadowed by a duplicate trigger_id, or unregistering
     * after a new instance has already re-registered under the same id during a
     * remount) can't delete a live panel's registration out from under it.
     */
    owners = new Map();
    /**
     * Emits whenever a registered panel's open state changes, with the panel's id, side, and new open state.
     * Named distinctly from at-sidebar's own `atuiSidebarChange` (a plain boolean) — a nested at-sidebar's
     * event bubbles by default, and sharing the same name would let a listener on this element receive
     * either shape with no way to tell them apart.
     */
    atuiSidebarProviderChange;
    /**
     * Emits true when at least one registered panel is a modal (backdropped, mode="over") overlay, false when none are. at-sidebar-inset listens for this to go inert while a modal panel is open.
     */
    atuiSidebarBackdropChange;
    /**
     * Registers a panel with the provider. Called by a child at-sidebar on load.
     * Returns an owner token the caller must pass back to unregisterPanel.
     */
    async registerPanel(id, state) {
        if (this.panels.has(id)) {
            console.warn(`at-sidebar-provider: duplicate panel id "${id}" — give each at-sidebar a unique trigger_id. The previous panel registered under this id is being replaced.`);
        }
        const owner = Symbol(id);
        this.owners.set(id, owner);
        this.panels.set(id, state);
        this.panels = new Map(this.panels);
        return owner;
    }
    /**
     * Removes a panel from the provider. Called by a child at-sidebar on
     * disconnect with the owner token it received from registerPanel — a
     * stale instance's call is ignored if another instance has since
     * re-registered under the same id.
     */
    async unregisterPanel(id, owner) {
        if (this.owners.get(id) !== owner)
            return;
        this.owners.delete(id);
        this.panels.delete(id);
        this.panels = new Map(this.panels);
        if (this.backdropRequests.delete(id)) {
            this.backdropRequests = new Set(this.backdropRequests);
            this.syncBackdrop();
        }
    }
    /**
     * Sets a panel's open state directly.
     */
    async setOpen(id, isOpen) {
        const panel = this.panels.get(id);
        if (!panel || panel.isOpen === isOpen)
            return;
        panel.isOpen = isOpen;
        this.panels = new Map(this.panels);
        this.atuiSidebarProviderChange.emit({ id, side: panel.side, isOpen });
    }
    /**
     * Toggles a panel's open state.
     */
    async toggle(id) {
        const panel = this.panels.get(id);
        if (!panel)
            return;
        await this.setOpen(id, !panel.isOpen);
    }
    /**
     * Returns a panel's current open state.
     */
    async getIsOpen(id) {
        return this.panels.get(id)?.isOpen ?? false;
    }
    /**
     * A panel reports whether it currently needs the shared backdrop (mode="over", backdrop=true, and open). The provider renders a single backdrop while any panel requests one, so two modal panels never stack two scrims.
     */
    async setBackdrop(id, active) {
        const changed = active
            ? !this.backdropRequests.has(id) && this.backdropRequests.add(id)
            : this.backdropRequests.delete(id);
        if (!changed)
            return;
        this.backdropRequests = new Set(this.backdropRequests);
        this.syncBackdrop();
    }
    /** Only for deduping the atuiSidebarBackdropChange emit — render derives the backdrop directly from backdropRequests. */
    lastEmittedHasBackdrop = false;
    syncBackdrop() {
        const hasBackdrop = this.backdropRequests.size > 0;
        if (hasBackdrop === this.lastEmittedHasBackdrop)
            return;
        this.lastEmittedHasBackdrop = hasBackdrop;
        this.atuiSidebarBackdropChange.emit(hasBackdrop);
    }
    /** Closes only the most recently opened backdropped panel — Set preserves insertion order — so dismissing one modal panel never closes another that's also open. */
    handleBackdropClick = () => {
        const topmost = Array.from(this.backdropRequests).at(-1);
        if (topmost !== undefined) {
            this.setOpen(topmost, false);
        }
    };
    render() {
        return (index.h(index.Host, { key: 'c8515e2fcb1d29742be29e5f0a824f9d7e21df46' }, this.backdropRequests.size > 0 && (index.h("div", { key: '292ec7729ccae3e4fd0a02afed70d6b820bf75a9', class: "backdrop", "data-name": "backdrop", onClick: this.handleBackdropClick, "aria-hidden": "true" })), index.h("slot", { key: '6931ff1bfcf10a0c6d7cfa23303b279084710339' })));
    }
};
AtSidebarProviderComponent.style = atSidebarProviderCss();

exports.at_sidebar_provider = AtSidebarProviderComponent;
