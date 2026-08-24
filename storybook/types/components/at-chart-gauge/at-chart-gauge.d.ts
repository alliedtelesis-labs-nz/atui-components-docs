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
     * unreachable), and the state is shown as the hover tooltip's title. When
     * unset, the first colour of `color_palette` is used and the tooltip has no
     * title.
     */
    status?: AtChartGaugeStatus;
    /**
     * Optional value text shown in the centre of the gauge, e.g. `"72"`.
     */
    center_value?: string;
    /**
     * Unit appended to `center_value`, rendered at a smaller size (e.g.
     * `%`). Not appended to `center_value` directly — include it via this
     * prop to get the smaller styling; otherwise bake it into `center_value`
     * for equal-size rendering.
     */
    unit?: string;
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
     * Label shown in the hover tooltip, before the value — typically the title
     * of the widget the gauge sits in, e.g. `"CPU Usage"` renders
     * `CPU Usage: 72%`. Falls back to `center_text` when unset; when neither is
     * set, only the value (and `unit`) is shown. The tooltip's title line is
     * the `status`, when one is set.
     */
    tooltip_label?: string;
    /**
     * Options merged into the tooltip plugin config. ATUI defaults are preserved
     * unless explicitly overridden.
     */
    tooltip_options?: object;
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
    private hasLoaded;
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
     * semicircle's diameter), growing upward. Sizing, weight, font family and
     * line-height match at-chart-donut's center text exactly — only the
     * bottom-anchored (rather than vertically centered) stacking differs,
     * since a semicircle's usable space sits above its flat base.
     */
    private getDrawCenterTextPlugin;
    /**
     * The value the arc actually renders, after clamping `value` to
     * [min, max]. Shared by `initChart` (arc span) and `tooltipText` (fallback
     * label) so the tooltip never shows a raw value the dial can't display.
     */
    private clampedValue;
    /**
     * The tooltip's title line: the health status of the value arc, e.g.
     * `Warning`. Empty when no `status` is set, in which case Chart.js draws
     * the tooltip with the value line alone.
     */
    private tooltipTitle;
    /**
     * The tooltip's body line: the widget/metric label, then the value and its
     * unit — e.g. `CPU Usage: 72%`. Mirrors Chart.js's doughnut label format
     * (`label: value`) so the gauge reads the same as at-chart-donut and
     * at-chart-breakdown. `center_value` is preferred over the raw `value` prop
     * so the tooltip shows exactly what the dial shows.
     */
    private tooltipText;
    /**
     * Chart.js decides whether to show the tooltip from the hovered elements,
     * not from the items that survive `filter`. Hovering the track, the spacer
     * or a threshold zone therefore still opened a tooltip, with every body
     * line filtered away and only the status title left.
     *
     * Dropping those elements from the tooltip's active set (rather than
     * cancelling the draw) leaves Chart.js in its normal "nothing hovered"
     * state, so the opacity animation fades the box out instead of clipping
     * it. The draw guard remains as a backstop for the first frames, before
     * any content has ever been built.
     */
    private getTooltipGuardPlugin;
    initChart(): void;
    disconnectedCallback(): void;
    connectedCallback(): void;
    componentDidUpdate(): void;
    /**
     * componentDidLoad runs once the element is in the DOM. If the scale isn't
     * usable yet, the chart initialises later via componentDidUpdate.
     */
    componentDidLoad(): void;
    render(): any;
}
