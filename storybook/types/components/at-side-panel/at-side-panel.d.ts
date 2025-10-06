import { EventEmitter } from '../../stencil-public-runtime';
export type SidePanelDirection = 'left' | 'right';
export type SidePanelSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
/**
 * @category Overlays
 * @description A sliding side panel component for displaying secondary content or forms. Features customizable positioning, backdrop, and animation options.
 *
 * @slot - Display content within the dialog
 */
export declare class AtSidePanelComponent {
    el: HTMLAtSidePanelElement;
    /**
     * Size of the size panel
     */
    size: SidePanelSize;
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
    origin: SidePanelDirection;
    /**
     * Puts a scrollbar on the sidepanel if set
     */
    has_scrollbar: boolean;
    /**
     * Displays a close button if set
     */
    has_close_button: boolean;
    /**
     * If sidepanel should used fixed positioning (otherwise absolute)
     */
    fixed: boolean;
    /**
     * Whether to show a backdrop behind the panel, prevents any interaction with background UI.
     */
    backdrop: boolean;
    /**
     * Will close the sidepanel if clicked
     */
    close_backdrop: boolean;
    /**
     * Data-id of an external element to use as the trigger. When provided, clicking the trigger will toggle the side panel.
     */
    trigger_id?: string;
    isExpanded: boolean;
    isOpen: boolean;
    /**
     * Emits an event when the side panel is toggled, with `event.detail` being true if the panel is now open
     */
    atuiSidepanelChange: EventEmitter;
    private sidePanelWrapper;
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
    private cleanupExternalTriggerListeners;
    private setupExternalTriggerListeners;
    render(): any;
    get panelClasses(): string;
    get sizeClasses(): string;
}
