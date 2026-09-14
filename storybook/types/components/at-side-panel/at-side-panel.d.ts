import { EventEmitter } from '../../stencil-public-runtime';
export type AtSidePanelDirection = 'left' | 'right';
export type AtSidePanelSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AtSidePanelPosition = 'absolute' | 'fixed';
/**
 * @category Overlays
 * @description A sliding side panel component for displaying secondary content or forms. Features customizable positioning, backdrop, and animation options.
 *
 * @slot - Display content within the dialog
 * @slot title - Replaces the generated title block in the header
 * @slot actions - Header controls, placed before the close button
 * @slot footer - An action row below the content. It carries the header's
 * surface treatment and sits directly under short content, sticking to the
 * bottom edge only once the panel scrolls. The slot spans the full row width;
 * arranging the actions inside it is left to the consumer.
 *
 * @dependency at-button
 */
export declare class AtSidePanelComponent {
    el: HTMLAtSidePanelElement;
    /**
     * Size of the size panel
     */
    size: AtSidePanelSize;
    /**
     * Title displayed in the side panel
     */
    panel_title: string;
    /**
     * Subtitle displayed in the side panel
     */
    panel_subtitle: string;
    /**
     *  Position of the side panel
     */
    origin: AtSidePanelDirection;
    /**
     * Enables scroll overflow on the sidepanel container
     */
    has_scrollbar: boolean;
    /**
     * Apply or remove padding from the panel content area. Remove it when the
     * slotted content owns its own spacing -- a peek view rendering a page
     * summary usually pads at the page component, and would otherwise be
     * indented twice.
     */
    padding?: boolean;
    /**
     * Displays a close button if set
     */
    has_close_button: boolean;
    /**
     * Whether the panel overlays the viewport ('fixed', the default) or is
     * positioned relative to its nearest positioned ancestor ('absolute') —
     * e.g. to stay confined to at-sidebar-inset's content region instead of
     * covering the full viewport.
     */
    position: AtSidePanelPosition;
    /**
     * Whether to show a backdrop behind the panel, prevents any interaction with background UI.
     */
    backdrop: boolean;
    /**
     * Will close the sidepanel if clicked
     */
    close_backdrop: boolean;
    /**
     * Target an external element to use as the trigger. When provided, clicking an element wia matching data-sidepanel attribute value will toggle the side panel.
     */
    trigger_id?: string;
    isExpanded: boolean;
    isOpen: boolean;
    hasFooter: boolean;
    /**
     * Emits an event when the side panel is toggled, with `event.detail` being true if the panel is now open
     */
    atuiSidepanelChange: EventEmitter;
    private sidePanelWrapper;
    private footerObserver;
    private panelDialog;
    private headerEl;
    private railEl;
    private confineObserver?;
    private confinementMutationObserver?;
    private triggerEls;
    private externalTriggerListeners;
    /**
     * Toggles the side panel between open and closed states
     * @returns Promise that resolves when the panel state is toggled
     */
    toggleSidePanel(): Promise<void>;
    /**
     * Opens the side panel
     * @returns Promise that resolves when the panel is opened
     */
    openSidePanel(): Promise<void>;
    /**
     * Closes the side panel
     * @returns Promise that resolves when the panel is closed
     */
    closeSidePanel(): Promise<void>;
    /**
     * Getter method for the open state of the side panel
     * @returns The current open state of the side panel
     */
    getIsOpen(): Promise<boolean>;
    private handleClose;
    private handleDialogClose;
    private handleKeyDown;
    offClickHandler(event: any): void;
    componentDidLoad(): Promise<void>;
    disconnectedCallback(): void;
    /**
     * The footer drives layout (the content stops stretching once there is a
     * footer to sit under it), and `:has()` cannot see the slot reliably once
     * Stencil has relocated slotted nodes - so the state is resolved here.
     */
    private syncHasFooter;
    /**
     * Only called for position:fixed panels nested in at-sidebar-inset (see
     * the componentDidLoad guard) — those stay true viewport overlays (an
     * absolute-positioned descendant of a scrolling ancestor scrolls away
     * with it, which is exactly what used to break here) and so can't rely
     * on CSS containment to avoid at-header and whichever at-sidebar rail
     * shares their origin side. A position:absolute panel doesn't need any
     * of this: its containing block (at-sidebar-inset) is already laid out
     * below the header and beside the rail by ordinary flex layout. So this
     * measures those elements directly and exposes the offsets as custom
     * properties for the CSS to consume only for the fixed case.
     *
     * ResizeObserver, not a one-time measurement: at-header's height is
     * fairly static, but the at-sidebar rail's width isn't — it changes on
     * collapse/expand today, and will change on drag once at-sidebar panels
     * are user-resizable (planned). Observing the actual rendered box means
     * this stays correct either way without new code when that lands.
     */
    private setupConfinement;
    /**
     * The convention is to author at-sidebar-inset before a right-side
     * at-sidebar rail in the DOM (see at-sidebar-provider.scss), so this
     * panel's own componentDidLoad can easily run before the rail has
     * connected — a single lookup here would then miss it permanently, the
     * same class of registration-order race at-sidebar-trigger's remote
     * resolution and at-sidebar's scanForTriggers both retry for. Keep
     * watching for whichever of at-header/the rail hasn't shown up yet,
     * rather than giving up after one attempt.
     */
    private resolveConfinementTargets;
    private updateConfinementOffsets;
    private cleanupExternalTriggerListeners;
    private setupExternalTriggerListeners;
    render(): any;
}
