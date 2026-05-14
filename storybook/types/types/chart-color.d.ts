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
}
export declare function readChartTextColors(): AtChartTextColors;
export declare function readPaletteColors(palette: AtChartColorPalette): string[] | null;
