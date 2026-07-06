import { Chart, ChartConfiguration } from 'chart.js';
import { AtChartColorPalette } from '../../types/chart-color';
import { AtChartHeight } from '../../types/chart';
/**
 * Display treatment for the sparkline.
 * - `line`: a solid line with a thicker, semi-transparent glow line behind it.
 * - `area`: a solid line with a gradient fill fading to transparent.
 */
export type AtChartSparklineMode = 'line' | 'area';
export type AtChartSparklineStatus = 'good' | 'warning' | 'bad' | 'unreachable';
/**
 * @category Data Visualization
 * @description A minimal sparkline chart that renders a single styled line with no axes, grid, legend, or tooltip. Suited to compact health/trend indicators inside table cells, cards, or stat tiles. Supports a device-status colour mode and line/area display treatments.
 */
export declare class AtChartSparkline {
    /**
     * The sparkline is a compact graph for the shape of one trend.
     * It accepts a single, pre-summarized series of numeric values to plot, and renders no axes, legend or tooltip.
     * For multi-series, labelled or time-based data, use `at-chart-bar-line`.
     */
    data: number[];
    /**
     * Display treatment: a glowing `line`, or an `area` with a gradient fill.
     */
    mode: AtChartSparklineMode;
    /**
     * Health colour mode. When set, the line colour is taken from the
     * device-status palette for the given state (good / warning / bad /
     * unreachable). Takes precedence over `color_palette`.
     */
    status?: AtChartSparklineStatus;
    /**
     * Height of the sparkline.
     */
    height?: AtChartHeight;
    /**
     * Colour palette used for the line when `status` is not set. The sparkline is
     * a single series, so it uses the first colour of the chosen palette. Values
     * resolve from theme CSS variables so the line stays theme-aware.
     */
    color_palette: AtChartColorPalette;
    /**
     * Pass the active theme value here to trigger a chart redraw when the theme
     * changes. The value itself is not used — any change to this prop causes the
     * chart to reinitialise so the colour is re-read from the current CSS
     * variables.
     */
    refresh_theme?: string;
    /**
     * Getter method for the chart's configuration object.
     * @returns Configuration of the chart
     */
    getConfig(): Promise<object>;
    canvasEl: HTMLCanvasElement;
    config: ChartConfiguration;
    chart: Chart | null;
    /**
     * Resolve the base line colour. A `status` selects a device-status palette
     * slot; otherwise the first colour of `color_palette` is used.
     */
    private resolveColor;
    /**
     * The solid foreground line, shared by both display modes. In `area` mode it
     * also carries a top-to-bottom gradient fill.
     */
    private lineDataset;
    /**
     * A thicker, semi-transparent solid line drawn behind the foreground line to
     * create a glow (no blur/feathering). Used in `line` mode only.
     */
    private glowDataset;
    initChart(): void;
    disconnectedCallback(): void;
    connectedCallback(): void;
    componentDidUpdate(): void;
    /**
     * componentDidLoad runs once the element is in the DOM. If the data prop
     * hasn't been set yet, the chart initialises later via componentDidUpdate.
     */
    componentDidLoad(): void;
    render(): any;
}
