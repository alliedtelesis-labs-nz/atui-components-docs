import { EventEmitter } from '../../../stencil-public-runtime';
export type AtSidebarProviderPanelState = {
    side: 'left' | 'right';
    isOpen: boolean;
};
export type AtSidebarProviderChangeDetail = {
    id: string;
    side: 'left' | 'right';
    isOpen: boolean;
};
/**
 * @category Navigation
 * @description Shares open/closed state across multiple at-sidebar panels on one page (e.g. a left nav plus a right utility rail), so panels can sit side by side without either addressing the wrong ancestor. Wrap the panels and an at-sidebar-inset in this element instead of using at-sidebar standalone.
 * @slot - at-sidebar panels and an at-sidebar-inset for the shared page content
 */
export declare class AtSidebarProviderComponent {
    el: HTMLAtSidebarProviderElement;
    private panels;
    private backdropRequests;
    /**
     * Tracks which at-sidebar instance currently owns each registered id, so a
     * stale instance (e.g. shadowed by a duplicate trigger_id, or unregistering
     * after a new instance has already re-registered under the same id during a
     * remount) can't delete a live panel's registration out from under it.
     */
    private owners;
    /**
     * Emits whenever a registered panel's open state changes, with the panel's id, side, and new open state.
     * Named distinctly from at-sidebar's own `atuiSidebarChange` (a plain boolean) — a nested at-sidebar's
     * event bubbles by default, and sharing the same name would let a listener on this element receive
     * either shape with no way to tell them apart.
     */
    atuiSidebarProviderChange: EventEmitter<AtSidebarProviderChangeDetail>;
    /**
     * Emits true when at least one registered panel is a modal (backdropped, mode="over") overlay, false when none are. at-sidebar-inset listens for this to go inert while a modal panel is open.
     */
    atuiSidebarBackdropChange: EventEmitter<boolean>;
    /**
     * Registers a panel with the provider. Called by a child at-sidebar on load.
     * Returns an owner token the caller must pass back to unregisterPanel.
     */
    registerPanel(id: string, state: AtSidebarProviderPanelState): Promise<symbol>;
    /**
     * Removes a panel from the provider. Called by a child at-sidebar on
     * disconnect with the owner token it received from registerPanel — a
     * stale instance's call is ignored if another instance has since
     * re-registered under the same id.
     */
    unregisterPanel(id: string, owner: symbol): Promise<void>;
    /**
     * Sets a panel's open state directly.
     */
    setOpen(id: string, isOpen: boolean): Promise<void>;
    /**
     * Toggles a panel's open state.
     */
    toggle(id: string): Promise<void>;
    /**
     * Returns a panel's current open state.
     */
    getIsOpen(id: string): Promise<boolean>;
    /**
     * A panel reports whether it currently needs the shared backdrop (mode="over", backdrop=true, and open). The provider renders a single backdrop while any panel requests one, so two modal panels never stack two scrims.
     */
    setBackdrop(id: string, active: boolean): Promise<void>;
    /** Only for deduping the atuiSidebarBackdropChange emit — render derives the backdrop directly from backdropRequests. */
    private lastEmittedHasBackdrop;
    private syncBackdrop;
    /** Closes only the most recently opened backdropped panel — Set preserves insertion order — so dismissing one modal panel never closes another that's also open. */
    private handleBackdropClick;
    render(): any;
}
