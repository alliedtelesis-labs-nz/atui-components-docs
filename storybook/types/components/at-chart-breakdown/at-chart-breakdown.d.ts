import { EventEmitter } from '../../stencil-public-runtime';
import { Chart, ChartConfiguration, ChartDataset, Plugin } from 'chart.js';
import { AtChartColorPalette } from '../../types/chart-color';
export type AtChartHeight = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'auto';
export type AtLegendPosition = 'top' | 'bottom' | 'left' | 'right';
/**
 * @category Data Visualization
 * @description A breakdown chart component for visualizing proportional distribution of categories with customizable colors and legends. Built on Chart.js with a compact dashboard-friendly layout (donut left; custom canvas legend when legend_position='right'; center text rendered alongside).
 */
export declare class AtChartBreakdown {
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
    height: AtChartHeight;
    /**
     * Position of the legend
     */
    legend_position: AtLegendPosition;
    /**
     * Options merged into the legend plugin config. ATUI defaults are preserved
     * unless explicitly overridden.
     */
    legend_options?: object;
    /**
     * Options merged into the tooltip plugin config. ATUI defaults are preserved
     * unless explicitly overridden.
     */
    tooltip_options?: object;
    /**
     * Pass the active theme value here to trigger a chart redraw when the theme
     * changes. The value itself is not used — any change to this prop causes the
     * chart to reinitialise so colors and text are re-read from CSS variables.
     */
    refresh_theme?: string;
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
    color_palette: AtChartColorPalette;
    /**
     * Optional value text to display alongside the breakdown chart
     */
    center_value?: string;
    /**
     * Optional heading text to display alongside the breakdown chart
     */
    center_text?: string;
    /**
     * Controls the thickness of the ring. Value between 0 and 100.
     * 0 means no cutout (solid circle), 100 means maximum cutout (thin ring).
     * Default is 70.
     */
    cutout?: number;
    /**
     * Emitted when a legend item is toggled. The event detail contains the
     * zero-based `index` of the toggled segment and `visible` — true if the
     * segment is now visible, false if it was hidden.
     */
    atuiLegendToggle: EventEmitter<{
        index: number;
        visible: boolean;
    }>;
    el: HTMLElement;
    /** Tracks the canvas height set by Chart.js so the side-text div can be positioned next to it. */
    compactOffset: number;
    /**
     * Prevents initChart() from being re-called when only compactOffset changed
     * (i.e. the compact plugin updated the side-text position but the chart
     * config itself doesn't need rebuilding).
     */
    private skipInitOnUpdate;
    /** Reference to the side-text div (center_value / center_text), used to
     *  detect overlap with the legend. */
    private sideTextEl?;
    canvasEl: HTMLCanvasElement;
    config: ChartConfiguration;
    chart: Chart;
    /**
     * Getter method for the chart's configuration object
     * @returns Configuration of the chart
     */
    getConfig(): Promise<object>;
    /**
     * Manually trigger a chart resize to fit container dimensions.
     * The optional containerHeight parameter is accepted for API compatibility
     * but is no longer used — the chart self-sizes via its ResizeObserver.
     */
    resize(containerHeight?: number): Promise<void>;
    /**
     * Toggles the visibility of the dataset segment at the given index,
     * mirroring a click on the corresponding legend item. Emits
     * `atuiLegendToggle` with the new visibility state.
     */
    toggleLegendItem(index: number): Promise<void>;
    private toggleItemVisibility;
    /**
     * When only center_value changes (e.g. because a legend item was toggled and
     * Angular recomputed the visible sum), we don't need to tear down and recreate
     * the whole chart — that would reset Chart.js's internal visibility state.
     * Instead, skip the next componentDidUpdate re-init and just re-render the
     * canvas so the side-text div picks up the new value.
     */
    onCenterValueChanged(): void;
    /**
     * Custom plugin that positions the doughnut flush to the left edge of the
     * canvas and draws the legend manually starting immediately to its right.
     * This replaces the built-in legend (which just centers the donut in the
     * remaining space and can leave large gaps).
     *
     * Supports the same toggle-visibility interaction as the built-in legend:
     * clicking an item hides/shows the corresponding slice (with strikethrough
     * and dimming), and hovering shows a pointer cursor.
     */
    private getLeftAlignPlugin;
    /**
     * Chart.js plugin that fires whenever Chart.js finishes resizing the canvas
     * (both on initial construction via its internal ResizeObserver, and on
     * explicit chart.resize() calls). Used to keep compactOffset in sync with
     * the actual canvas height so the side-text div is positioned correctly.
     */
    private getCompactOffsetPlugin;
    /**
     * Plugin that hides the built-in Chart.js legend before layout whenever the
     * canvas is too narrow or too short to display it in full. Runs on every
     * layout cycle so it responds to resize automatically.
     */
    private getLegendOverflowPlugin;
    initChart(): void;
    applyPresetPalette(colors: string[]): void;
    componentDidUpdate(): void;
    /**
     * componentDidLoad will be run, but if the props haven't been passed to it yet,
     * it will throw an error. So we catch this, and wait for the props to be passed
     * to the component where it will run componentDidUpdate.
     */
    componentDidLoad(): void;
    render(): any;
}
