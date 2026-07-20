'use strict';

var index = require('./index-e0g5edej.js');
var chartColor = require('./chart-color-D8HPmi5o.js');

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
        return (index.h(index.Host, { key: '2544c30a79b5cebced7ec9d3cee331db3c8a40ac', style: { display: 'block', height: '100%', width: '100%' } }, index.h("div", { key: '13dad86272f5de21c86ad318d2c9fb13da1df357', class: "flex h-full flex-col justify-between gap-4" }, index.h("div", { key: '787cccf243d3be2c1861b835a88ee139b2fe8832', class: "flex items-baseline justify-between gap-8" }, index.h("span", { key: '960a0038c1d27db585b612d8921b432889c9cf83', style: {
                fontSize: '3rem',
                fontWeight: '700',
                lineHeight: '1.1',
            }, "data-name": "value" }, this.value, index.h("span", { key: 'abc8327f1d1aae7680a26824c0ee2bfb7068a188', style: {
                fontSize: '0.65em',
                fontWeight: '500',
            } }, this.unit ?? ''))), index.h("div", { key: 'efa34410f9811b1e59a50511a011ccd6b2ea2980', class: "relative min-h-0 flex-1", "data-name": "sparkline" }, index.h("at-chart-sparkline", { key: '5ead1c0776ac74888ce7bbb1a4d948f034b786ab', class: "absolute inset-0 block h-full w-full", data: this.data, mode: this.mode, status: this.status, color_palette: this.color_palette, height: this.height, refresh_theme: this.refresh_theme })), delta !== 0 ? this.renderDelta(delta) : null)));
    }
};

exports.at_chart_trend = AtChartTrend;
