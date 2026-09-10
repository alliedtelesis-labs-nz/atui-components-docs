/**
 * @category Navigation
 * @description A sidebar trigger component for the sidebar. Nested inside an at-sidebar, it addresses its closest ancestor; given a `data-sidebar` attribute matching a target at-sidebar's `trigger_id`, it addresses that sidebar remotely instead.
 */
export declare class AtSidebarTriggerComponent {
    el: HTMLElement;
    isOpen: boolean;
    private provider;
    private providerObserver?;
    private updateIsOpen;
    private toggleSidebar;
    private handleKeyDown;
    componentDidLoad(): Promise<void>;
    /**
     * The target at-sidebar can still be registering its trigger_id (still
     * loading, or appended to the DOM after this trigger) when this component's
     * own componentDidLoad runs — a single lookup here would permanently miss
     * it. Mirrors at-sidebar.tsx's own scanForTriggers retry for the same
     * reason: watch until a match with this trigger_id shows up, however late.
     */
    private resolveRemoteProvider;
    private bindProvider;
    disconnectedCallback(): void;
    private handleSidebarChange;
    render(): any;
}
