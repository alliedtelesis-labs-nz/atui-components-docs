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
     * Displays a close button if set
     */
    has_close_button: boolean;
    /**
     * If sidepanel should use fixed positioning (will fallback to absolute)
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
    private cleanupExternalTriggerListeners;
    private setupExternalTriggerListeners;
    render(): any;
}
