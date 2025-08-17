export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
export type TooltipAlign = 'start' | 'end' | 'center';
/**
 * @category **Overlays**
 * @description **A tooltip popover component that displays contextual information when hovering over or focusing on an element.**
 *
 * @slot tooltip-trigger - Shows the tooltip when hovered
 * @slot tooltip-content - Content to go inside the tooltip
 */
export declare class AtuiTooltip {
    /**
     * Position of opened tooltip element relative to the trigger element.
     */
    position: TooltipPosition;
    /**
     * Alignment of opened tooltip element relative to trigger element.
     */
    align: TooltipAlign;
    /**
     * Prevent opening tooltip
     */
    disabled: boolean;
    /**
     * Maximum width constraint for the tooltip in pixels. Defaults to 300px for readability.
     */
    width?: string;
    /**
     * Offset in pixels from the edge of the trigger element
     */
    offset?: number;
    /**
     * Delay before showing and hiding the tooltip when interacting with the trigger element.
     */
    delay?: number;
    disabledChanged(newValue: boolean): Promise<void>;
    isOpen: boolean;
    el: HTMLElement;
    triggerEl: HTMLElement;
    tooltipEl: HTMLElement;
    private cleanupAutoUpdate?;
    private popoverId;
    private showTimeout?;
    private hideTimeout?;
    private updatePosition;
    /**
     * Opens the tooltip.
     */
    openTooltip(): Promise<void>;
    /**
     * Closes the tooltip.
     */
    closeTooltip(): Promise<void>;
    componentDidLoad(): Promise<void>;
    disconnectedCallback(): void;
    private setupPopoverEventListeners;
    private mouseEnterHandler;
    private mouseLeaveHandler;
    private setupFloatingUI;
    private cleanupFloatingUI;
    private updateFloatingPosition;
    private getFloatingUIPlacement;
    render(): any;
}
