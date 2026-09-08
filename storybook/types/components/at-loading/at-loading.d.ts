export type AtLoadingVariant = 'spinner' | 'dots' | 'typing' | 'wave';
export type AtLoadingType = 'default' | 'error' | 'secondary';
export type AtLoadingSize = 'sm' | 'md' | 'lg';
/**
 * @category Feedback
 * @description A versatile loading component with multiple animation types including spinner, dots, typing, wave, and thinking indicators. Use for indicating ongoing processes or data fetching states across different contexts.
 * @slot - Label content rendered beside the animation
 */
export declare class AtLoadingComponent {
    /**
     * Type of loading animation to display
     */
    variant: AtLoadingVariant;
    /**
     * Visual type/color of the loading indicator
     */
    type: AtLoadingType;
    /**
     * Size of the loading indicator
     */
    size: AtLoadingSize;
    get typeClasses(): string;
    get sizeClasses(): string;
    get spinnerSizeClasses(): string;
    private renderSpinner;
    private renderShapes;
    private renderIndicator;
    render(): any;
}
