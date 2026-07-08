export type AtHealthDotStatus = 'good' | 'warn' | 'bad';
export type AtHealthDotSize = 'sm' | 'md' | 'lg';
/**
 * @category Feedback
 * @description A compact health status indicator dot. Renders a circle, triangle, or diamond glyph coloured from the theme-aware alert palette to convey good, warning, or bad states.
 */
export declare class AtHealthDot {
    /**
     * Health state to display.
     */
    status: AtHealthDotStatus;
    /**
     * Size of the dot glyph.
     */
    size: AtHealthDotSize;
    private renderGlyph;
    render(): any;
}
