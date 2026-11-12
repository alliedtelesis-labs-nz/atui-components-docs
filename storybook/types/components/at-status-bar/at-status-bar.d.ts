export interface AtIStatusBarSegment {
    label?: string;
    percentage: number;
    backgroundColor: string;
    /** Text shown for the segment in tooltips in place of its percentage, such as a device count. */
    value?: string;
}
type Size = 'sm' | 'lg';
type TooltipMode = 'segment' | 'summary';
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
     * `segment` gives each segment its own tooltip. `summary` gives the whole bar one
     * tooltip that lists every segment with a colour swatch, so the reader does not
     * have to hit a narrow segment to read it.
     */
    tooltip_mode: TooltipMode;
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
    private segmentValue;
    private segmentSummary;
    private get coveredPercentage();
    private get hasRemainder();
    private get flexItemCount();
    private renderRemainder;
    private segmentBasis;
    private renderSummarySegment;
    private renderInternalValue;
    private renderSummaryTooltip;
    private renderSummary;
    get segments(): any;
    render(): any;
}
export {};
