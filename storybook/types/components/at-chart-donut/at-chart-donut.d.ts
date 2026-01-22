import { Chart, ChartConfiguration, ChartDataset, Plugin } from 'chart.js';
import 'chartjs-adapter-moment';
import { ChartColorPalette } from '../../types/chart-color';
export type Height = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'auto';
export type LegendPosition = 'top' | 'bottom' | 'left' | 'right';
/**
 * @category Data Visualization
 * @description A donut chart component for visualizing proportional data with customizable colors and legends. Built on Chart.js with responsive design and interactive hover effects.
 */
export declare class AtChartDonut {
    /**
     * Data to be shown in the chart. ChartDataset properties can be found
     * [here](https://www.chartjs.org/docs/latest/charts/doughnut.html#dataset-properties)
     */
    data: {
        labels: string[];
        datasets: ChartDataset[];
    };
    /**
     * Additional options to be added to the chart configuration
     */
    options?: object;
    /**
     * Height of the chart
     */
    height?: Height;
    /**
     * Position of the legend
     */
    legend_position: LegendPosition;
    /**
     * Additional options for formatting the legend
     */
    legend_format?: object;
    /**
     * Additional options for the tooltip
     */
    tooltip_options?: object;
    /**
     * Additional plugin options
     */
    plugins?: Plugin[];
    /**
     * Colour palette to use for the chart. Preset options are provided ChartColourPalette:
     * 'categorical' : For charts with data that have distinct labels and no natural order
     * 'sequential' : For charts with data that is numeric or is naturally ordered.
     * 'alert' : For charts that relate to health state. Note that data requires a specific order.
     * 'custom' : Use colors defined in data. If none are provided, the ChartJS default will be used.
     */
    color_palette: ChartColorPalette;
    /**
     * Optional value text to display in the center of the donut chart
     */
    center_value?: string;
    /**
     * Optional heading text to display in the center of the donut chart
     */
    center_text?: string;
    /**
     * Controls the thickness of the donut ring. Value between 0 and 100.
     * 0 means no cutout (solid circle), 100 means maximum cutout (thin ring).
     * Default is 70.
     */
    cutout?: number;
    canvasEl: HTMLCanvasElement;
    config: ChartConfiguration;
    chart: Chart;
    /**
     * Getter method for the chart's configuration object
     * @returns Configuration of the chart
     */
    getConfig(): Promise<object>;
    /**
     * Manually trigger a chart resize to fit container dimensions
     */
    resize(): Promise<void>;
    defaultPieTooltipOptions: {
        mode: string;
        intersect: boolean;
        position: string;
        animation: {
            duration: number;
        };
    };
    private getDrawCenterTextPlugin;
    initChart(): void;
    applyPresetPalette(colors: string[]): void;
    componentDidUpdate(): void;
    /**
     * componentDidLoad will be run, but if the props haven't been passed to it yet,
     * it will throw an error. So we catch this, and wait for the props to be passed
     * to the component where it will run componentDidUpdtae.
     */
    componentDidLoad(): void;
    render(): any;
}
