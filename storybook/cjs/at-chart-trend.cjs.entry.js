'use strict';

var index = require('./index-DK-3iCCu.js');
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
        return (index.h(index.Host, { key: '652a2a297388f5ff37965c2f0c7ba538badafbd1', style: { display: 'block', height: '100%', width: '100%' } }, index.h("div", { key: 'c4b4f39790e752124f7792876caa7486aa758bfc', class: "flex h-full flex-col justify-between gap-4" }, index.h("div", { key: '39e988157d96f6bc8816a1b18d9859d44bd4e20d', class: "flex items-baseline justify-between gap-8" }, index.h("span", { key: '816c5123397f37b5efb0d8e9f10ff411211c13dd', style: {
                fontSize: '3rem',
                fontWeight: '700',
                lineHeight: '1.1',
            }, "data-name": "value" }, this.value, this.unit && (index.h("span", { key: 'c291c50e3fecc339f145c9e23fcabe02b34f1d6a', style: {
                fontSize: '0.65em',
                fontWeight: '500',
            }, "data-name": "value-unit" }, this.unit)))), index.h("div", { key: '039fce3f5665fa5847aea0f01c3de23207c4d16b', class: "relative min-h-0 flex-1", "data-name": "sparkline" }, index.h("at-chart-sparkline", { key: 'c238bb9c2784d08e24c82a9496b8dde86f301ff4', class: "absolute inset-0 block h-full w-full", data: this.data, mode: this.mode, status: this.status, color_palette: this.color_palette, height: this.height, refresh_theme: this.refresh_theme })), delta !== 0 ? this.renderDelta(delta) : null)));
    }
};

exports.at_chart_trend = AtChartTrend;
