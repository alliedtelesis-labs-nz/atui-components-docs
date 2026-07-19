import { AtChartColorPalette } from '../../types/chart-color';
import { AtChartHeight } from '../../types/chart';
import { AtChartSparklineMode, AtChartSparklineStatus } from '../at-chart-sparkline/at-chart-sparkline';
/**
 * Controls how the delta indicator is coloured relative to its sign.
 * - `up-is-bad`: an increase is a regression (error/red), a decrease is an
 *   improvement (success/green). Suited to "higher is worse" metrics such as
 *   CPU, memory, flash or temperature.
 * - `up-is-good`: the mapping is inverted — an increase is an improvement.
 */
export type AtChartTrendDeltaDirection = 'up-is-bad' | 'up-is-good';
/**
 * @category Data Visualization
 * @description A single-metric trend tile: a large current value, an up/down delta indicator over the period, and a compact `at-chart-sparkline` of the recent series. Composes `at-chart-sparkline` for the line so the sparkline itself stays a pure, reusable primitive. Suited to dashboard stat widgets summarising one metric (CPU, memory, response time, throughput, etc.).
 */
export declare class AtChartTrend {
    /**
     * The numeric series plotted as the underlying sparkline. For multi-series,
     * labelled or time-based data use `at-chart-bar-line` instead.
     */
    data: number[];
    /**
     * Large current value shown above the line. Displayed as-is, so pre-format
     * it upstream (rounding, thousands separators, unit suffix if desired).
     */
    value: string;
    /**
     * Unit appended to the delta label (e.g. `%`, `ms`). Not appended to
     * `value` — include any unit in `value` directly if required.
     */
    unit?: string;
    /**
     * Net change over the displayed period, shown as a signed delta with an
     * up/down trend arrow. When omitted, it is derived from the series as
     * `last − first`. A delta of 0 hides the indicator.
     */
    delta?: number;
    /**
     * How the delta indicator is coloured relative to its sign. Defaults to
     * `up-is-bad` (an increase reads as a regression).
     */
    delta_direction: AtChartTrendDeltaDirection;
    /**
     * Sparkline display treatment forwarded to `at-chart-sparkline`: a glowing
     * `line`, or an `area` with a gradient fill.
     */
    mode: AtChartSparklineMode;
    /**
     * Optional device-status colour mode forwarded to the sparkline. When set,
     * the line colour comes from the device-status palette and takes precedence
     * over `color_palette`.
     */
    status?: AtChartSparklineStatus;
    /**
     * Colour palette forwarded to the sparkline when `status` is not set.
     */
    color_palette: AtChartColorPalette;
    /**
     * Height of the tile. `auto` fills the host (the value/delta header sits on
     * top and the sparkline flexes to fill the remaining space).
     */
    height?: AtChartHeight;
    /**
     * Pass the active theme value here to trigger a redraw of the underlying
     * sparkline when the theme changes. Forwarded to `at-chart-sparkline`.
     */
    refresh_theme?: string;
    /**
     * Net change over the period. Uses the explicit `delta` prop when provided,
     * otherwise derives `last − first` from the series (0 for < 2 points).
     */
    private resolveDelta;
    /**
     * Signed, unit-suffixed delta label (e.g. `+3%`, `-1.2ms`).
     */
    private deltaLabel;
    /**
     * Whether the delta reads as a regression given `delta_direction`. Drives
     * the error (regression) vs success (improvement) colouring.
     */
    private isRegression;
    private renderDelta;
    render(): any;
}
