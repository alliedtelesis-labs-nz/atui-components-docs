'use strict';

var index = require('./index-DRsFs1GW.js');
var chartColor$1 = require('./chart-color-CxOzTTyI.js');
var chartColor = require('./chart-color-ChPOocG1.js');

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
        index.registerInstance(this, hostRef);
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
    color_palette = chartColor.AtChartColorPalette.ALERT;
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
            const colors = chartColor$1.getChartColors(chartColor.AtChartColorPalette.DEVICE_STATUS) || [];
            return colors[statusPaletteIndex[this.status]];
        }
        const colors = chartColor$1.getChartColors(this.color_palette);
        return colors && colors.length ? colors[0] : undefined;
    }
    /**
     * The thick inner value arc: a filled portion (value) plus a muted track
     * for the remainder of the scale.
     */
    valueDataset(span, total) {
        const base = this.resolveValueColor();
        const track = base !== undefined
            ? chartColor$1.color(base).alpha(TRACK_ALPHA).rgbString()
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
        const colors = chartColor$1.getChartColors(chartColor.AtChartColorPalette.ALERT) || [];
        const tint = (c) => c ? chartColor$1.color(c).alpha(THRESHOLD_ALPHA).rgbString() : 'transparent';
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
     * semicircle's diameter). The value and description share one colour and
     * font size. Mirrors at-chart-donut's text-styling approach.
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
                const height = chart.chartArea.bottom - chart.chartArea.top;
                const fontSize = (height / 140).toFixed(2) + 'em sans-serif';
                const textColor = chartColor.readChartTextColors().title;
                const lineGap = 2;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
                ctx.font = '500 ' + fontSize;
                ctx.fillStyle = textColor;
                // Draw one line bottom-aligned at `bottomY` and return its
                // height so the next line can stack above it.
                const addText = (text, bottomY) => {
                    ctx.font = '500 ' + fontSize;
                    ctx.fillStyle = textColor;
                    const textMetrics = ctx.measureText(text);
                    const textHeight = textMetrics.actualBoundingBoxAscent +
                        textMetrics.actualBoundingBoxDescent;
                    ctx.fillText(text, arc.x, bottomY);
                    return textHeight;
                };
                // Stack upward from the dial's base: description at the bottom,
                // value above it.
                let bottomY = arc.y;
                if (this.center_text) {
                    const textHeight = addText(this.center_text, bottomY);
                    bottomY -= textHeight + lineGap;
                }
                if (this.center_value) {
                    addText(this.center_value, bottomY);
                }
                ctx.save();
            },
        };
    }
    initChart() {
        chartColor$1.Chart.register(chartColor$1.DoughnutController, chartColor$1.ArcElement, chartColor$1.index);
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
        this.chart = new chartColor$1.Chart(this.canvasEl, this.config);
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
        return (index.h(index.Host, { key: 'ef9101fb6a23943a9c484dc2bfc44cec9207d489', style: { height: '100%', width: '100%' } }, index.h("canvas", { key: 'b423ce0c6d06c82d442238eed101bcf2babb5b51', ref: (el) => (this.canvasEl = el), class: `w-full ${heightVariants[this.height]}`, "data-name": "gauge-canvas" })));
    }
};

exports.at_chart_gauge = AtChartGauge;
