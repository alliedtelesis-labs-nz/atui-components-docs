import { r as registerInstance, h, H as Host } from './index-CFoMekA-.js';
import { g as getChartColors, c as color, C as Chart, D as DoughnutController, A as ArcElement, i as index } from './chart-color-BukeUrGZ.js';
import { A as AtChartColorPalette, a as readChartFontFamily, r as readChartTextColors } from './chart-color-D288RS7J.js';

const heightVariants = {
    xs: 'h-[80px]',
    sm: 'h-[120px]',
    md: 'h-[160px]',
    lg: 'h-[220px]',
    xl: 'h-[300px]',
    auto: 'h-full',
};
const statusPaletteIndex = {
    good: 0,
    warning: 1,
    bad: 2,
    unreachable: 3,
};
// Relative ring thicknesses: the value arc is the thick inner ring, the
// threshold arc a thin band (half the value ring's width) on the outer rim.
const VALUE_WEIGHT = 4;
const THRESHOLD_WEIGHT = 0.5;
// Alpha applied to the status colour to draw the unfilled value-arc track.
const TRACK_ALPHA = 0.15;
// Opacity applied to the threshold-zone colours.
const THRESHOLD_ALPHA = 0.5;
// Transparent border (px) on each ring — separates the coloured segments
// within a ring (e.g. the threshold zones) with a hairline.
const RING_GAP = 0.6;
// Weight of a transparent spacer ring inserted between the value and threshold
// rings, creating a clean uniform radial gap (relative to the ring weights).
const GAP_WEIGHT = 0.5;
const AtChartGauge = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * The metric value to display, plotted against `min` and `max`. Values
     * outside the range are clamped.
     */
    value = 0;
    /**
     * Start of the gauge scale.
     */
    min = 0;
    /**
     * End of the gauge scale.
     */
    max = 100;
    /**
     * Threshold boundary stops within the scale, e.g. `[60, 85]` splits the
     * range into three zones (min–60, 60–85, 85–max). Zones are drawn as a thin
     * outer ring and coloured from the alert palette by index. When omitted, no
     * threshold ring is drawn.
     */
    thresholds;
    /**
     * Health colour mode for the value arc. When set, the arc colour is taken
     * from the device-status palette for the given state (good / warning / bad /
     * unreachable). When unset, the first colour of `color_palette` is used.
     */
    status;
    /**
     * Optional value text shown in the centre of the gauge, e.g. `"72%"`.
     */
    center_value;
    /**
     * Optional label shown beneath the centre value.
     */
    center_text;
    /**
     * Controls the thickness of the donut ring. Value between 0 and 100.
     * 0 means no cutout (solid circle), 100 means maximum cutout (thin ring).
     * Default is 70.
     */
    cutout = 70;
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
    color_palette = AtChartColorPalette.ALERT;
    /**
     * Height of the gauge.
     */
    height = 'md';
    /**
     * Additional options merged into the chart configuration.
     */
    options;
    /**
     * Pass the active theme value here to trigger a chart redraw when the theme
     * changes. The value itself is not used — any change to this prop causes the
     * chart to reinitialise so colours and text are re-read from the current CSS
     * variables.
     */
    refresh_theme;
    canvasEl;
    config;
    chart;
    /**
     * Getter method for the chart's configuration object.
     * @returns Configuration of the chart
     */
    async getConfig() {
        return this.config;
    }
    /**
     * Manually trigger a chart resize to fit container dimensions.
     */
    async resize() {
        if (this.chart) {
            this.chart.resize();
        }
    }
    /**
     * Resolve the value-arc colour. A `status` selects a device-status palette
     * slot; otherwise the first colour of `color_palette` is used.
     */
    resolveValueColor() {
        if (this.status) {
            const colors = getChartColors(AtChartColorPalette.DEVICE_STATUS) || [];
            return colors[statusPaletteIndex[this.status]];
        }
        const colors = getChartColors(this.color_palette);
        return colors && colors.length ? colors[0] : undefined;
    }
    /**
     * The thick inner value arc: a filled portion (value) plus a muted track
     * for the remainder of the scale.
     */
    valueDataset(span, total) {
        const base = this.resolveValueColor();
        const track = base !== undefined
            ? color(base).alpha(TRACK_ALPHA).rgbString()
            : 'transparent';
        return {
            data: [span, Math.max(total - span, 0)],
            backgroundColor: [base ?? 'transparent', track],
            // Transparent border opens up the gap to the outer threshold ring.
            borderColor: 'transparent',
            borderWidth: RING_GAP,
            weight: VALUE_WEIGHT,
        };
    }
    /**
     * The thin outer threshold ring: one segment per zone, coloured from the
     * palette by index.
     */
    thresholdDataset() {
        if (!this.thresholds || !this.thresholds.length) {
            return null;
        }
        const bounds = [this.min, ...this.thresholds, this.max];
        const spans = [];
        for (let i = 0; i < bounds.length - 1; i++) {
            spans.push(Math.max(bounds[i + 1] - bounds[i], 0));
        }
        // Threshold zones are always the alert palette (health bands).
        const colors = getChartColors(AtChartColorPalette.ALERT) || [];
        const tint = (c) => c ? color(c).alpha(THRESHOLD_ALPHA).rgbString() : 'transparent';
        return {
            data: spans,
            backgroundColor: spans.map((_, i) => tint(colors[i % (colors.length || 1)])),
            // Hairline between adjacent zone segments.
            borderColor: 'transparent',
            borderWidth: RING_GAP,
            weight: THRESHOLD_WEIGHT,
        };
    }
    /**
     * A transparent ring that occupies radial space between the value and
     * threshold rings, producing a clean uniform gap between them.
     */
    spacerDataset(total) {
        return {
            data: [total],
            backgroundColor: ['transparent'],
            borderWidth: 0,
            weight: GAP_WEIGHT,
        };
    }
    /**
     * Draws the centre value and label stacked at the base of the dial (the
     * semicircle's diameter), growing upward. Sizing, weight, font family and
     * line-height match at-chart-donut's center text exactly — only the
     * bottom-anchored (rather than vertically centered) stacking differs,
     * since a semicircle's usable space sits above its flat base.
     */
    getDrawCenterTextPlugin() {
        return {
            id: 'DrawGaugeCenterTextPlugin',
            afterDatasetsDraw: (chart) => {
                const ctx = chart.ctx;
                const meta = chart.getDatasetMeta(chart.data.datasets.length - 1);
                const arc = meta?.data?.[0];
                if (!ctx || !arc) {
                    return;
                }
                ctx.restore();
                const innerRadius = arc.innerRadius;
                const fontFamily = readChartFontFamily();
                // 1rem in this app's design tokens — not necessarily the
                // browser default of 16px — so `em` sizing below tracks the
                // same rem scale at-chart-breakdown's CSS uses.
                const remPx = parseFloat(getComputedStyle(chart.canvas).fontSize) || 16;
                const setFont = (px, weight = 300) => {
                    return (ctx.font = `${weight} ${(px / remPx).toFixed(2)}em ${fontFamily}`);
                };
                // Width of the horizontal chord `offset` px above the dial's
                // flat base (arc.y). Unlike a full donut, the gauge is only
                // the top half of a circle, so the space available to text
                // narrows the further it sits above the base — using a
                // single diameter-wide maxWidth for every line let text
                // overflow the dial once it climbed high enough to be
                // clipped by the curve.
                const chordWidth = (offset) => {
                    const clamped = Math.min(Math.abs(offset), innerRadius);
                    return (Math.sqrt(innerRadius ** 2 - clamped ** 2) * 2 * 0.82);
                };
                // Largest size up to `base` that keeps `text` within maxWidth.
                const fit = (text, base, maxWidth, weight = 300) => {
                    setFont(base, weight);
                    const w = ctx.measureText(text).width;
                    return w > maxWidth && w > 0 ? base * (maxWidth / w) : base;
                };
                // Match at-chart-donut's 3rem/1rem sizes by default, but cap
                // to the dial so text can't overflow vertically on smaller
                // gauges.
                const baseLabelPx = Math.min(remPx, innerRadius * 0.36);
                const baseValuePx = Math.min(remPx * 3, innerRadius * 0.6);
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
                ctx.fillStyle = readChartTextColors().title;
                // Stack upward from the dial's flat base: label first (where
                // the chord is widest), then the value above it. Each line is
                // width-fit against the chord at its own vertical offset —
                // estimated from its un-fit size, so a line that ends up
                // shrinking only ever sits within a *wider* chord than assumed.
                let offset = 0;
                let prevPx = 0;
                const draw = (text, basePx, weight, lineHeight) => {
                    const gap = prevPx * 0.1;
                    const baselineOffset = offset + gap;
                    const px = fit(text, basePx, chordWidth(baselineOffset + basePx * lineHeight), weight);
                    setFont(px, weight);
                    ctx.fillText(text, arc.x, arc.y - baselineOffset);
                    offset = baselineOffset + px * lineHeight;
                    prevPx = px;
                };
                if (this.center_text) {
                    draw(this.center_text, baseLabelPx, 300, 1);
                }
                if (this.center_value) {
                    draw(this.center_value, baseValuePx, 700, 0.85);
                }
                ctx.save();
            },
        };
    }
    initChart() {
        Chart.register(DoughnutController, ArcElement, index);
        const total = Math.max(this.max - this.min, 0);
        const clamped = Math.min(Math.max(this.value, this.min), this.max);
        const span = clamped - this.min;
        // Chart.js draws the first doughnut dataset as the outermost ring and
        // the last as the innermost. The thin threshold ring goes first (outer
        // rim), then a transparent spacer for the gap, then the thick value
        // ring last (inner).
        const datasets = [];
        const threshold = this.thresholdDataset();
        if (threshold) {
            datasets.push(threshold);
            datasets.push(this.spacerDataset(total));
        }
        datasets.push(this.valueDataset(span, total));
        const plugins = [];
        if (this.center_value || this.center_text) {
            plugins.push(this.getDrawCenterTextPlugin());
        }
        // `rotation`/`circumference` are doughnut-only options; cast through
        // `unknown` so the generic ChartConfiguration literal accepts them.
        this.config = {
            type: 'doughnut',
            data: { datasets },
            options: {
                devicePixelRatio: window.devicePixelRatio || 1,
                responsive: true,
                maintainAspectRatio: false,
                // Animation off by default; override via `options` if desired.
                animation: false,
                rotation: -90,
                circumference: 180,
                cutout: `${this.cutout}%`,
                layout: { padding: 8 },
                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false },
                },
                ...(this.options || {}),
            },
            plugins,
        };
        if (this.chart) {
            this.chart.destroy();
        }
        this.chart = new Chart(this.canvasEl, this.config);
    }
    disconnectedCallback() {
        this.chart?.destroy();
        this.chart = null;
    }
    componentDidUpdate() {
        if (this.max > this.min) {
            this.initChart();
        }
    }
    /**
     * componentDidLoad runs once the element is in the DOM. If the scale isn't
     * usable yet, the chart initialises later via componentDidUpdate.
     */
    componentDidLoad() {
        if (this.max > this.min) {
            this.initChart();
        }
    }
    render() {
        return (h(Host, { key: '722b4452d5803281c7940276cb5187c439c7bf95', style: { height: '100%', width: '100%' } }, h("canvas", { key: '51e0cf57ee30dc47f4246fee07ba1100701fd306', ref: (el) => (this.canvasEl = el), class: `w-full ${heightVariants[this.height]}`, "data-name": "gauge-canvas" })));
    }
};

export { AtChartGauge as at_chart_gauge };
