import { r as registerInstance, a as getElement, h, H as Host } from './index-DTCxn2cp.js';
import { A as AtChartColorPalette } from './chart-color-PVoy06gY.js';

const AtChartTrend = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
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
        return (h("span", { class: `text-h4 flex items-center gap-2 font-bold tabular-nums ${textClass}`, "data-name": "delta" }, h("at-icon", { name: delta > 0 ? 'trend_up' : 'trend_down', size: "16", class: fillClass }), this.deltaLabel(delta)));
    }
    render() {
        const delta = this.resolveDelta();
        return (h(Host, { key: 'b600cfcd9dfd77fff07787672192225d01aacb97', style: { display: 'block', height: '100%', width: '100%' } }, h("div", { key: 'fbb5355ba1e1718420b8c65186e26f8129f18985', class: "flex h-full flex-col justify-between gap-4", "data-name": "chart-trend" }, h("div", { key: '523c577860eaa30f4ece7f038532296fd4d05e4f', class: "flex items-baseline justify-between gap-8" }, h("span", { key: 'c3313a79fc75dcfe55568d204c06f451cf80f1af', class: "text-xl leading-[1.1] font-bold", "data-name": "value" }, this.value, this.unit && (h("span", { key: 'bd6ce25666708a43e921f4a92534b6da41c75de6', class: "text-[0.65em] font-medium", "data-name": "value-unit" }, this.unit)))), h("div", { key: '131ad2a72a92f3779805905ba34b8a85f3ca1027', class: "relative min-h-0 flex-1", "data-name": "sparkline" }, h("at-chart-sparkline", { key: 'e556bbba6ea978f0b22ab952a724e15ba482496d', class: "absolute inset-0 block h-full w-full", data: this.data, mode: this.mode, status: this.status, color_palette: this.color_palette, height: this.height, refresh_theme: this.refresh_theme })), delta !== 0 ? this.renderDelta(delta) : null)));
    }
};

export { AtChartTrend as at_chart_trend };
