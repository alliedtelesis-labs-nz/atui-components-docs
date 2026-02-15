export type AtLoadingVariant = 'spinner' | 'dots' | 'typing' | 'wave';
export type AtLoadingType = 'default' | 'error' | 'secondary';
export type AtLoadingSize = 'sm' | 'md' | 'lg';
/**
 * @category Feedback
 * @description A versatile loading component with multiple animation types including spinner, dots, typing, wave, and thinking indicators. Perfect for indicating ongoing processes or data fetching states across different contexts.
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
    /**
     * Custom text to display with text-based animations
     */
    text: string;
    get typeClasses(): string;
    get sizeClasses(): string;
    get spinnerSizeClasses(): string;
    private renderSpinner;
    private renderTyping;
    render(): any;
}
