import { r as registerInstance, h, H as Host } from './index-B6R87LxD.js';
import { A as AtChartColorPalette } from './chart-color-PVoy06gY.js';

const AtChartTrend = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * The numeric series plotted as the underlying sparkline. For multi-series,
     * labelled or time-based data use `at-chart-bar-line` instead.
     */
    data = [];
    /**
     * Large current value shown above the line, displayed as-is — pre-format
     * the number upstream (rounding, thousands separators). Pass the unit
     * separately via `unit` for the smaller suffix styling; including a unit
     * in `value` directly also works when that styling isn't wanted, as long
     * as `unit` is then left unset so it isn't shown twice.
     */
    value;
    /**
     * Unit of the metric (e.g. `%`, `ms`). Rendered as a smaller suffix after
     * `value` and appended to the delta label.
     */
    unit;
    /**
     * Net change over the displayed period, shown as a signed delta with an
     * up/down trend arrow. When omitted, it is derived from the series as
     * `last − first`. A delta of 0 hides the indicator.
     */
    delta;
    /**
     * How the delta indicator is coloured relative to its sign. Defaults to
     * `up-is-bad` (an increase reads as a regression).
     */
    delta_direction = 'up-is-bad';
    /**
     * Sparkline display treatment forwarded to `at-chart-sparkline`: a glowing
     * `line`, or an `area` with a gradient fill.
     */
    mode = 'line';
    /**
     * Optional device-status colour mode forwarded to the sparkline. When set,
     * the line colour comes from the device-status palette and takes precedence
     * over `color_palette`.
     */
    status;
    /**
     * Colour palette forwarded to the sparkline when `status` is not set.
     */
    color_palette = AtChartColorPalette.CATEGORICAL;
    /**
     * Height of the tile. `auto` fills the host (the value/delta header sits on
     * top and the sparkline flexes to fill the remaining space).
     */
    height = 'auto';
    /**
     * Pass the active theme value here to trigger a redraw of the underlying
     * sparkline when the theme changes. Forwarded to `at-chart-sparkline`.
     */
    refresh_theme;
    /**
     * Net change over the period. Uses the explicit `delta` prop when provided,
     * otherwise derives `last − first` from the series (0 for < 2 points).
     */
    resolveDelta() {
        if (this.delta !== undefined) {
            return this.delta;
        }
        return this.data.length >= 2
            ? this.data[this.data.length - 1] - this.data[0]
            : 0;
    }
    /**
     * Signed, unit-suffixed delta label (e.g. `+3%`, `-1.2ms`).
     */
    deltaLabel(delta) {
        const sign = delta > 0 ? '+' : '';
        return `${sign}${delta}${this.unit ?? ''}`;
    }
    /**
     * Whether the delta reads as a regression given `delta_direction`. Drives
     * the error (regression) vs success (improvement) colouring.
     */
    isRegression(delta) {
        return delta > 0 === (this.delta_direction === 'up-is-bad');
    }
    renderDelta(delta) {
        const regression = this.isRegression(delta);
        const textClass = regression ? 'text-error' : 'text-success';
        const fillClass = regression
            ? 'fill-feedback-error-accent'
            : 'fill-feedback-success-accent';
        return (h("span", { class: `text-h4 flex items-center gap-2 font-bold tabular-nums ${textClass}`, "data-name": "delta" }, h("at-icon", { name: delta > 0 ? 'trend_up' : 'trend_down', size: "16", class: fillClass }), this.deltaLabel(delta)));
    }
    render() {
        const delta = this.resolveDelta();
        return (h(Host, { key: 'b06d0adbc91415ba43ceb3268c3b9fa94640db29', style: { display: 'block', height: '100%', width: '100%' } }, h("div", { key: '0659b2c269532d62f55accbc14043af4922eb36c', class: "flex h-full flex-col justify-between gap-4" }, h("div", { key: 'cae0700ce48953eaf1677a0e5a80d2dccb163cbf', class: "flex items-baseline justify-between gap-8" }, h("span", { key: 'e4167063efa42ae468316291b12bc47521792b57', style: {
                fontSize: '3rem',
                fontWeight: '700',
                lineHeight: '1.1',
            }, "data-name": "value" }, this.value, this.unit && (h("span", { key: '3a6a4721be53a6ccffdd2afc3d91577171227914', style: {
                fontSize: '0.65em',
                fontWeight: '500',
            }, "data-name": "value-unit" }, this.unit)))), h("div", { key: '9eb577951748acb7c44fb3525eecc44ab2403b17', class: "relative min-h-0 flex-1", "data-name": "sparkline" }, h("at-chart-sparkline", { key: 'c375a353fcb58c58160ba3c42414795024f8a819', class: "absolute inset-0 block h-full w-full", data: this.data, mode: this.mode, status: this.status, color_palette: this.color_palette, height: this.height, refresh_theme: this.refresh_theme })), delta !== 0 ? this.renderDelta(delta) : null)));
    }
};

export { AtChartTrend as at_chart_trend };
