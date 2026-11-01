export interface AtIStatusBarSegment {
    label?: string;
    percentage: number;
    backgroundColor: string;
}
type Size = 'sm' | 'lg';
/**
 * @category Data Visualization
 * @description A status bar component for displaying progress, completion, or state information with customizable colors and labels.
 */
export declare class AtStatusBar {
    /**
     * List of segments that make up the status bar. Each segment implements the AtIStatusBarSegment interface.
     */
    status_bar: AtIStatusBarSegment[];
    /**
     * Height of the status bar
     */
    size?: Size;
    /**
     * Shows a tooltip with the segment's label and percentage on hover
     */
    show_tooltip?: boolean;
    /**
     * Shows each segment's label and percentage inside the bar. The bar grows with
     * its text, never shorter than the `lg` size, and ignores `size`. Text colour is
     * derived from each segment's background.
     */
    show_internal_value?: boolean;
    /**
     * Space in pixels between adjacent segments. Segments share the remaining
     * width in proportion to their percentages.
     */
    segment_gap: number;
    el: HTMLElement;
    private themeObserver?;
    componentDidLoad(): void;
    componentDidRender(): void;
    disconnectedCallback(): void;
    private applyContrast;
    get statusBarClass(): string;
    private segmentSummary;
    private get coveredPercentage();
    private get hasRemainder();
    private get flexItemCount();
    private renderRemainder;
    private segmentBasis;
    get segments(): any;
    render(): any;
}
export {};
