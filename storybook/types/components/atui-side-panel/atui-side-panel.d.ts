export type SidePanelDirection = 'left' | 'right';
export type SidePanelSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
/**
 * @category Overlays
 * @description A sliding side panel component for displaying secondary content or forms. Features customizable positioning, backdrop, and animation options.
 *
 * @slot content - Used for placing the content of the side panel.
 */
export declare class AtuiSidePanelComponent {
    el: HTMLAtuiSidePanelElement;
    /**
     * Size of the size panel
     */
    size: SidePanelSize;
    /**
     * ID of the panel
     */
    panel_id: string;
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
     * Will close the sidepanel if clicked off when set
     */
    close_backdrop: boolean;
    /**
     * If sidepanel should used fixed positioning (otherwise absolute)
     */
    fixed: boolean;
    /**
     * Whether to show a backdrop behind the panel
     */
    backdrop: boolean;
    isExpanded: boolean;
    private sidePanelWrapper;
    private panelDialog;
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
    private handleClose;
    offClickHandler(event: any): void;
    render(): any;
    get panelClasses(): string;
    get sizeClasses(): string;
}
