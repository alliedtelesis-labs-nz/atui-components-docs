export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
/**
 * @category Overlays
 * @description A tooltip component that displays contextual information when hovering over or focusing on an element. Provides accessible hover/focus behavior with customizable positioning and content.
 *
 * @slot tooltip-trigger - Shows the tooltip when hovered
 * @slot tooltip-content - Content to go inside of the tooltip
 */
export declare class AtuiTooltipComponent {
    /**
     * Position of the tooltip content relative to the atui-tooltip
     */
    position: TooltipPosition;
    /**
     * If false, forces the tooltip to hide.
     * If true, tooltip will show when trigger is hovered
     */
    is_visible?: boolean;
    /**
     * String representing the 'max-width' style of the tooltip element (e.g., 'auto', '200px', '50%')
     */
    width?: string;
    /**
     * Offset in pixels from the edge of the trigger element
     */
    offset?: number;
    el: HTMLElement;
    triggerEl: HTMLElement;
    tooltipEl: HTMLElement;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    updateTooltipWidth: () => void;
    get positionStyle(): {
        [key: string]: string;
    };
    render(): any;
}
