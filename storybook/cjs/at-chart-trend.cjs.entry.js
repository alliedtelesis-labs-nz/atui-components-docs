'use strict';

var index = require('./index-GH7gxrjy.js');
var chartColor = require('./chart-color-CbbmT7Il.js');

const AtChartTrend = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
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
        const series = this.data ?? [];
        const delta = this.delta ??
            (series.length >= 2 ? series[series.length - 1] - series[0] : 0);
        return Number.isFinite(delta) ? delta : 0;
    }
    /**
     * Signed, unit-suffixed delta label (e.g. `+3%`, `-1.2ms`).
     */
    deltaLabel(delta) {
        const locale = this.el.closest('[lang]')?.getAttribute('lang') || undefined;
        const formatted = new Intl.NumberFormat(locale, {
            maximumFractionDigits: 2,
            signDisplay: 'exceptZero',
        }).format(delta);
        return `${formatted}${this.unit ?? ''}`;
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
        return (index.h(index.Host, { key: 'efa31b33098f99b2998ac349ba3a7a0b1e9b8a1e', style: { display: 'block', height: '100%', width: '100%' } }, index.h("div", { key: 'f7cb2d13a09dd996cb8785872597e8fdbbf217c6', class: "flex h-full flex-col justify-between gap-4", "data-name": "chart-trend" }, index.h("div", { key: 'c65e0cb7929467515c560ed7953fb4fed562c0ad', class: "flex items-baseline justify-between gap-8" }, index.h("span", { key: 'd35c38ef6a62c69853a0474e9af05b151a55b017', class: "text-xl leading-[1.1] font-bold", "data-name": "value" }, this.value, this.unit && (index.h("span", { key: 'c4b962cc81df8f6a1c6fe0dfd3f4c3e73ef014a0', class: "text-[0.65em] font-medium", "data-name": "value-unit" }, this.unit)))), index.h("div", { key: '6df74c1026ba4ce86112ae7fcf1101f37d6aa46c', class: "relative min-h-0 flex-1", "data-name": "sparkline" }, index.h("at-chart-sparkline", { key: '13d388354929a850335313db3734eca862a40e13', class: "absolute inset-0 block h-full w-full", data: this.data, mode: this.mode, status: this.status, color_palette: this.color_palette, height: this.height, refresh_theme: this.refresh_theme })), delta !== 0 ? this.renderDelta(delta) : null)));
    }
};

exports.at_chart_trend = AtChartTrend;
