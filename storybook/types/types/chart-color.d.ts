export declare enum AtChartColorPalette {
    CATEGORICAL = "categorical",
    SEQUENTIAL = "sequential",
    ALERT = "alert",
    DEVICE_STATUS = "device-status",
    ONBOARDING_STATUS = "onboarding-status",
    CUSTOM = "custom"
}
export interface AtChartTextColors {
    axisLine: string;
    label: string;
    title: string;
    tooltipBg: string;
    tooltipTitle: string;
    tooltipBody: string;
}
export declare function readChartFontFamily(): string;
export declare function readChartTextColors(): AtChartTextColors;
export interface AtChartTypography {
    /** Resolved px value of 1rem in this app's design tokens. */
    remPx: number;
    /** Font size for center_value, in rem — from --token-font-size-xl. */
    valueRem: number;
    /** Font size for center_text, in rem — from --token-font-size-base. */
    textRem: number;
    /** Font size for legend labels, in rem — from --token-font-size-xs. */
    legendRem: number;
    /** Font weight for center_value, from --token-font-weight-bold. */
    weightBold: number;
    /** Font weight for center_text, from --token-font-weight-light. */
    weightLight: number;
}
/**
 * Reads the chart typography tokens. Sizes are returned in rem (their native
 * unit) plus `remPx` — the current px value of 1rem for `el` — so canvas
 * callers (which can't use CSS var()/rem directly) can convert to px
 * themselves via `remPx * xRem`, while DOM callers can use the rem value as-is.
 */
export declare function readChartTypography(el: Element): AtChartTypography;
export declare function readPaletteColors(palette: AtChartColorPalette): string[] | null;
