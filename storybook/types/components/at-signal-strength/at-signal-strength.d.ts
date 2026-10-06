export type AtSignalStrengthVariant = 'status' | 'mono';
export type AtSignalStrengthSize = 'sm' | 'md' | 'lg';
/**
 * @category Feedback
 * @description A compact signal-strength indicator that converts an RSSI value in dBm into one to four bars, with an optional dBm value.
 * @slot - Optional text shown after the bars, e.g. a quality word or access point name.
 */
export declare class AtSignalStrength {
    /**
     * Received signal strength in dBm (e.g. -62). A missing value renders as "No signal".
     */
    rssi?: number;
    /**
     * Minimum dBm for one, two, three and four bars. Defaults to -85, -75, -67 and -60.
     */
    thresholds: number[];
    /**
     * `status` colours the filled bars by level (good, warning, poor); `mono` fills them in the current text colour.
     */
    variant: AtSignalStrengthVariant;
    /**
     * Size of the bars glyph.
     */
    size: AtSignalStrengthSize;
    /**
     * Shows the dBm value after the bars.
     */
    show_value: boolean;
    private renderBars;
    render(): any;
}
