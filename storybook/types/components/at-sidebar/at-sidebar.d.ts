import { EventEmitter } from '../../stencil-public-runtime';
export type AtSideBarWidth = 'menu' | 'panel-xs' | 'panel-sm' | 'panel-md' | 'panel-lg' | 'panel-xl' | 'auto';
/**
 * @category Navigation
 * @description A collapsible sidebar navigation component with menu support and responsive behavior. Features animation, auto-collapse, and keyboard navigation. Nest inside at-sidebar-provider (instead of using it standalone) to place more than one sidebar on the same page.
 * @slot sidebar-header - Header of the sidebar (likely to be atui-sidebar-trigger)
 * @slot sidebar-content - Content displayed in the sidebar (likely to be atui-sidebar-menu elements)
 * @slot sidebar-footer - Footer displayed in the sidebar
 * @slot page-content - Content of the page. Ignored when nested inside at-sidebar-provider — use at-sidebar-inset for that instead.
 */
export declare class AtSidebarComponent {
    /**
     * Position of the sidebar on the page
     */
    side: 'left' | 'right';
    /**
     * Width of the sidebar
     */
    width: AtSideBarWidth;
    /**
     * Size of the sidebar when collapsed.
     */
    collapsible: 'offcanvas' | 'icon' | 'none';
    /**
     * How the sidenav interacts with main content when open
     */
    mode: 'over' | 'push';
    /**
     * Display a clickable backdrop when mode = over
     */
    backdrop: boolean;
    /**
     * Opens the sidebar by default when set
     */
    default_open?: boolean;
    /**
     * Identifies this panel so external elements can toggle it by adding a matching `data-sidebar` attribute, and so at-sidebar-trigger can address it remotely (`data-sidebar` on the trigger). Also used as the panel's id when nested inside at-sidebar-provider. Auto-generated when omitted.
     */
    trigger_id?: string;
    isOpen: boolean;
    /**
     * Emits an even when the sidebar is toggled, with `event.detail` being true if the sidebar is now open
     */
    atuiSidebarChange: EventEmitter;
    el: HTMLAtSidebarElement;
    private panelId;
    private hasExplicitTriggerId;
    private provider;
    private providerOwner?;
    private triggerEls;
    private externalTriggerListeners;
    private triggerObserver?;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    componentDidRender(): void;
    disconnectedCallback(): void;
    /**
     * Toggles the sidebar's open state.
     */
    toggleSidebar(): Promise<void>;
    /**
     * Getter method for the open state of the sidebar
     * @returns The current open state of the sidebar
     */
    getIsOpen(): Promise<boolean>;
    private isModalOverlay;
    private handleProviderChange;
    private handleBackdropClick;
    /**
    Automate closing of the menu via menu-item click if the menu is in offcanvas mode and currently open
     */
    private handleMenuItemClick;
    private setupExternalTriggers;
    private scanForTriggers;
    private updateTriggerAria;
    private cleanupExternalTriggerListeners;
    render(): any;
}
