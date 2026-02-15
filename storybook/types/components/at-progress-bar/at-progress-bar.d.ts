type AtProgressBarSize = 'sm' | 'lg';
export type AtProgressBarType = 'info' | 'success' | 'warning' | 'error';
/**
 * @category Data Visualization
 * @description A progress bar component for displaying percentage values or progress loading, with customizable colors and sizes.
 * @slot label-before - Placed before the progress bar to add custom label content.
 * @slot label-after - Placed after the progress bar to add custom label content.
 */
export declare class AtProgressBar {
    /**
     * Percentage value of the progress bar.
     */
    percentage: number;
    /**
     * Mode of the progress bar, either determinate or indeterminate (loading).
     */
    mode?: 'determinate' | 'indeterminate';
    /**
     * Type of the progress bar, which determines its color.
     */
    type?: AtProgressBarType;
    /**
     * Height of the progress bar
     */
    size?: AtProgressBarSize;
    private clamped;
    onPercentageChange(): void;
    componentWillLoad(): void;
    private clampPercentage;
    get statusBarClass(): string;
    get segments(): string;
    renderIndeterminate(): any;
    renderDeterminate(): any;
    render(): any;
}
export {};
