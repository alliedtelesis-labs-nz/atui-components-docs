export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
export type TooltipAlign = 'start' | 'end' | 'center';
/**
 * @category **Overlays**
 * @description **A tooltip popover component that displays contextual information when hovering over or focusing on an element.**
 *
 * @slot tooltip-trigger - Shows the tooltip when hovered (only used when trigger_id is not provided)
 * @slot default - Content to go inside the tooltip
 */
export declare class AtTooltip {
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
    /**
     * Data-id of an external element to use as the trigger. When provided, the trigger slot is not needed.
     */
    trigger_id?: string;
    disabledChanged(newValue: boolean): Promise<void>;
    isOpen: boolean;
    el: HTMLElement;
    triggerEl: HTMLElement;
    tooltipEl: HTMLElement;
    private triggerEls;
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
    private updateAriaExpanded;
    componentDidLoad(): Promise<void>;
    disconnectedCallback(): void;
    private externalTriggerListeners;
    private cleanupExternalTriggerListeners;
    private setupPopoverEventListeners;
    private setupExternalTriggerListeners;
    private mouseEnterHandler;
    private mouseLeaveHandler;
    private setupFloatingUI;
    private cleanupFloatingUI;
    private updateFloatingPosition;
    private getFloatingUIPlacement;
    render(): any;
}
