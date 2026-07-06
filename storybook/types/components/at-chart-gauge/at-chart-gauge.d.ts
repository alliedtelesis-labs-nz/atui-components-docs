import { Chart, ChartConfiguration } from 'chart.js';
import { AtChartColorPalette } from '../../types/chart-color';
import { AtChartHeight } from '../../types/chart';
/**
 * Health colour mode for the value arc. Each status maps to an index of the
 * device-status palette array (good → 0, warning → 1, bad → 2, unreachable → 3).
 */
export type AtChartGaugeStatus = 'good' | 'warning' | 'bad' | 'unreachable';
/**
 * The two palettes the gauge supports:
 * - `ALERT` — for gauges with threshold zones (health bands).
 * - `CATEGORICAL` — for gauges without thresholds.
 */
export type AtChartGaugePalette = AtChartColorPalette.ALERT | AtChartColorPalette.CATEGORICAL;
/**
 * @category Data Visualization
 * @description A semicircle gauge for a single metric against a min/max scale. A thick inner value arc is coloured by health status, an optional thin outer ring shows persistent threshold zones, and the value plus a label sit in the centre. Colours resolve from theme CSS variables so the gauge stays theme-aware.
 */
export declare class AtChartGauge {
    /**
     * The metric value to display, plotted against `min` and `max`. Values
     * outside the range are clamped.
     */
    value: number;
    /**
     * Start of the gauge scale.
     */
    min: number;
    /**
     * End of the gauge scale.
     */
    max: number;
    /**
     * Threshold boundary stops within the scale, e.g. `[60, 85]` splits the
     * range into three zones (min–60, 60–85, 85–max). Zones are drawn as a thin
     * outer ring and coloured from the alert palette by index. When omitted, no
     * threshold ring is drawn.
     */
    thresholds?: number[];
    /**
     * Health colour mode for the value arc. When set, the arc colour is taken
     * from the device-status palette for the given state (good / warning / bad /
     * unreachable). When unset, the first colour of `color_palette` is used.
     */
    status?: AtChartGaugeStatus;
    /**
     * Optional value text shown in the centre of the gauge, e.g. `"72%"`.
     */
    center_value?: string;
    /**
     * Optional label shown beneath the centre value.
     */
    center_text?: string;
    /**
     * Controls the thickness of the donut ring. Value between 0 and 100.
     * 0 means no cutout (solid circle), 100 means maximum cutout (thin ring).
     * Default is 70.
     */
    cutout?: number;
    /**
     * Palette for the gauge — one of two roles:
     * - `ALERT` (default): use when the gauge has `thresholds`. The threshold
     *   zones always use the alert palette, and the value arc falls back to the
     *   alert palette's first colour when no `status` is set.
     * - `CATEGORICAL`: use when the gauge has no `thresholds`. The value arc
     *   falls back to the categorical palette's first colour when no `status` is
     *   set.
     *
     * `status`, when set, always colours the value arc from the device-status
     * palette and takes precedence over this palette. Colours resolve from theme
     * CSS variables.
     */
    color_palette: AtChartGaugePalette;
    /**
     * Height of the gauge.
     */
    height?: AtChartHeight;
    /**
     * Additional options merged into the chart configuration.
     */
    options?: object;
    /**
     * Pass the active theme value here to trigger a chart redraw when the theme
     * changes. The value itself is not used — any change to this prop causes the
     * chart to reinitialise so colours and text are re-read from the current CSS
     * variables.
     */
    refresh_theme?: string;
    canvasEl: HTMLCanvasElement;
    config: ChartConfiguration;
    chart: Chart | null;
    /**
     * Getter method for the chart's configuration object.
     * @returns Configuration of the chart
     */
    getConfig(): Promise<object>;
    /**
     * Manually trigger a chart resize to fit container dimensions.
     */
    resize(): Promise<void>;
    /**
     * Resolve the value-arc colour. A `status` selects a device-status palette
     * slot; otherwise the first colour of `color_palette` is used.
     */
    private resolveValueColor;
    /**
     * The thick inner value arc: a filled portion (value) plus a muted track
     * for the remainder of the scale.
     */
    private valueDataset;
    /**
     * The thin outer threshold ring: one segment per zone, coloured from the
     * palette by index.
     */
    private thresholdDataset;
    /**
     * A transparent ring that occupies radial space between the value and
     * threshold rings, producing a clean uniform gap between them.
     */
    private spacerDataset;
    /**
     * Draws the centre value and label stacked at the base of the dial (the
     * semicircle's diameter). The value and description share one colour and
     * font size. Mirrors at-chart-donut's text-styling approach.
     */
    private getDrawCenterTextPlugin;
    initChart(): void;
    disconnectedCallback(): void;
    componentDidUpdate(): void;
    /**
     * componentDidLoad runs once the element is in the DOM. If the scale isn't
     * usable yet, the chart initialises later via componentDidUpdate.
     */
    componentDidLoad(): void;
    render(): any;
}
