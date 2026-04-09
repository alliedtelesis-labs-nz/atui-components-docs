export declare enum AtChartColorPalette {
    CATEGORICAL = "categorical",// For charts with data that have distinct labels and no natural order
    SEQUENTIAL = "sequential",// For charts with data that is numeric or is naturally ordered.
    ALERT = "alert",// For charts that relate to health state.
    CUSTOM = "custom"
}
export declare const palettes: {
    categorical: string[];
    sequential: string[];
    alert: string[];
};
