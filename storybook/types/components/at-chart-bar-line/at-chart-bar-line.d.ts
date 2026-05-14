import 'chartjs-adapter-date-fns';
import { Chart, ChartConfiguration, PointStyle, ChartDataset, Point, BubbleDataPoint, Color } from 'chart.js';
import { AtSelectedTimeRangeExtended } from '../../models/at-time-range.models';
import { AtChartHeight } from '../at-chart-donut/at-chart-donut';
import { AtChartColorPalette } from '../../types/chart-color';
export interface AtIPointStyles {
    pointBackgroundColor: Color;
    pointBorderColor: Color;
    pointBorderWidth: number;
    pointHitRadius: number;
    pointHoverBackgroundColor: Color;
    pointHoverBorderColor: Color;
    pointHoverBorderWidth: number;
    pointHoverRadius: number;
    pointRadius: number;
    pointRotaion: number;
    pointStyle: PointStyle;
}
export interface AtIThreshold {
    label: string;
    data: (number | Point | [number, number] | BubbleDataPoint)[];
    color?: string;
    dashLine?: boolean;
    stepped?: boolean;
}
/**
 * @category Data Visualization
 * @description A flexible chart component for displaying bar and line charts with extensive customization options. Supports multiple data series, thresholds, time-based data, and various color palettes.
 */
/**
 * ### ```interface PointStyles```
 * ```
 *  pointBackgroundColor: Color;
 *  pointBorderColor: Color;
 *  pointBorderWidth: number;
 *  pointHitRadius: number;
 *  pointHoverBackgroundColor: Color;
 *  pointHoverBorderColor: Color;
 *  pointHoverBorderWidth: number;
 *  pointHoverRadius: number;
 *  pointRadius: number;
 *  pointRotaion: number;
 *  pointStyle: PointStyle;
 * ```
 * ### ```interface Threshold```
 * ```
 *  label: string;
 *  data: (number | Point | [number, number] | BubbleDataPoint)[];
 *  color?: string;
 *  dashLine?: boolean;
 *  stepped?: boolean;
 * ```
 */
export declare class AtChartBarLine {
    /**
     * Type of the chart
     */
    type: 'bar' | 'line';
    /**
     * Data to go in the chart. ChartDataset properties found
     * [here for line](https://www.chartjs.org/docs/latest/charts/line.html),
     * and [here for bar](https://www.chartjs.org/docs/latest/charts/bar.html)
     */
    data: {
        labels: string[];
        datasets: ChartDataset[];
    };
    /**
     * X axis formatting merged over ATUI defaults. Use to configure time display formats,
     * tick options, or switch axis type. Pass an empty object to keep all defaults.
     */
    x_axis_format?: object;
    /**
     * Y axis formatting merged over ATUI defaults. Use to configure tick format, labels,
     * or stacking. Pass an empty object to keep all defaults.
     */
    y_axis_format?: object;
    /**
     * Additional options merged into the Chart.js options object. Use to configure axes,
     * time display, and other chart behaviour. User values are spread over ATUI defaults
     * so defaults are preserved unless explicitly overridden.
     */
    options?: object;
    /**
     * Options merged into the tooltip plugin config. ATUI defaults are preserved unless
     * explicitly overridden.
     */
    tooltip_options?: object;
    /**
     * Options merged into the legend plugin config. ATUI defaults are preserved unless
     * explicitly overridden.
     */
    legend_options?: object;
    /**
     * Thresholds to be displayed in the chart
     */
    thresholds?: AtIThreshold[];
    /**
     * Styles for the points in the chart
     */
    point_styles?: AtIPointStyles;
    /**
     * The time range that the chart is displayed in.
     */
    time_range?: AtSelectedTimeRangeExtended;
    /**
     * Height of the chart.
     */
    height?: AtChartHeight;
    /**
     * Colour palette to use for the chart. Preset options are provided ChartColourPalette:
     * 'categorical' : For charts with data that have distinct labels and no natural order
     * 'sequential' : For charts with data that is numeric or is naturally ordered.
     * 'alert' : For charts that relate to health state. Note that data requires a specific order.
     * 'custom' : Use colors defined in data. If none are provided, the ChartJS default will be used.
     */
    color_palette: AtChartColorPalette;
    /**
     * Pass the active theme value here to trigger a chart redraw when the theme changes.
     * The value itself is not used — any change to this prop causes the chart to reinitialise
     * so colors and text are re-read from the current CSS variables.
     */
    refresh_theme?: string;
    /**
     * Getter method for the chart's configuration object
     * @returns Configuration of the chart
     */
    getConfig(): Promise<object>;
    canvasEl: HTMLCanvasElement;
    config: ChartConfiguration;
    chart: Chart;
    initChart(): void;
    componentDidUpdate(): void;
    /**
     * componentDidLoad will be run, but if the props haven't been passed to it yet,
     * it will throw an error. So we catch this, and wait for the props to be passed
     * to the component where it will run componentDidUpdtae.
     */
    componentDidLoad(): void;
    pointStylesSetup(): void;
    applyPresetPalette(colors: string[]): void;
    getMinMaxDateStrings(timeRange: AtSelectedTimeRangeExtended): {
        min: string;
        max: string;
    };
    formatThresholds: () => ChartDataset[];
    /**
     * Manually trigger a chart resize to fit container dimensions.
     */
    resize(): Promise<void>;
    render(): any;
}
