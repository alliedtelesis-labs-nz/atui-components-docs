'use strict';

var index = require('./index-hahhWKrj.js');
var chartColor = require('./chart-color-CQfnk_Ov.js');

const AtChartTrend = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * The numeric series plotted as the underlying sparkline. For multi-series,
     * labelled or time-based data use `at-chart-bar-line` instead.
     */
    data = [];
    /**
     * Large current value shown above the line. Displayed as-is, so pre-format
     * it upstream (rounding, thousands separators, unit suffix if desired).
     */
    value;
    /**
     * Unit appended to the delta label (e.g. `%`, `ms`). Not appended to
     * `value` — include any unit in `value` directly if required.
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
    color_palette = chartColor.AtChartColorPalette.CATEGORICAL;
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
        return (index.h("span", { class: `text-h4 flex items-center gap-2 font-bold tabular-nums ${textClass}`, "data-name": "delta" }, index.h("at-icon", { name: delta > 0 ? 'trend_up' : 'trend_down', size: "16", class: fillClass }), this.deltaLabel(delta)));
    }
    render() {
        const delta = this.resolveDelta();
        return (index.h(index.Host, { key: 'd2b76a72cd388bba0e30bae7c9175adc6aeb9ba0', style: { display: 'block', height: '100%', width: '100%' } }, index.h("div", { key: 'd2d03bd32a8ee45126c02f6ef3071049af6dc8e3', class: "flex h-full flex-col justify-between gap-4" }, index.h("div", { key: '6541f02e64e2165698c77aa2b1fdc17f77a33b6d', class: "flex items-baseline justify-between gap-8" }, index.h("span", { key: '153f3e74352b524f07d9c8f59666ffca84216319', style: {
                fontSize: '3rem',
                fontWeight: '700',
                lineHeight: '1.1',
            }, "data-name": "value" }, this.value, index.h("span", { key: '1ae984f2c59b98b1ba705ca52b471231049072bb', style: {
                fontSize: '0.65em',
                fontWeight: '500',
            } }, this.unit ?? ''))), index.h("div", { key: '3d6507853f72a449d47ddcf79ec4042e2754ed8c', class: "relative min-h-0 flex-1", "data-name": "sparkline" }, index.h("at-chart-sparkline", { key: 'f68998d94571b2e69d54fd88a1c963cb732eb118', class: "absolute inset-0 block h-full w-full", data: this.data, mode: this.mode, status: this.status, color_palette: this.color_palette, height: this.height, refresh_theme: this.refresh_theme })), delta !== 0 ? this.renderDelta(delta) : null)));
    }
};

exports.at_chart_trend = AtChartTrend;
