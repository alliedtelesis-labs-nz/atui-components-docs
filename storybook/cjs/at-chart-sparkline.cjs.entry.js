'use strict';

var index = require('./index-Dos-V-Qv.js');
var chartColor$1 = require('./chart-color-CxOzTTyI.js');
var chartColor = require('./chart-color-ChPOocG1.js');

const heightVariants = {
    xs: 'h-[40px]',
    sm: 'h-[70px]',
    md: 'h-[120px]',
    lg: 'h-[180px]',
    xl: 'h-[240px]',
    auto: 'h-full',
};
const statusPaletteIndex = {
    good: 0,
    warning: 1,
    bad: 2,
    unreachable: 3,
};
const LINE_WIDTH = 2;
const GLOW_WIDTH = 8;
const GLOW_ALPHA = 0.25;
const FILL_TOP_ALPHA = 0.35;
const AtChartSparkline = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * The sparkline is a compact graph for the shape of one trend.
     * It accepts a single, pre-summarized series of numeric values to plot, and renders no axes, legend or tooltip.
     * For multi-series, labelled or time-based data, use `at-chart-bar-line`.
     */
    data = [];
    /**
     * Display treatment: a glowing `line`, or an `area` with a gradient fill.
     */
    mode = 'line';
    /**
     * Health colour mode. When set, the line colour is taken from the
     * device-status palette for the given state (good / warning / bad /
     * unreachable). Takes precedence over `color_palette`.
     */
    status;
    /**
     * Height of the sparkline.
     */
    height = 'xs';
    /**
     * Colour palette used for the line when `status` is not set. The sparkline is
     * a single series, so it uses the first colour of the chosen palette. Values
     * resolve from theme CSS variables so the line stays theme-aware.
     */
    color_palette = chartColor.AtChartColorPalette.CATEGORICAL;
    /**
     * Pass the active theme value here to trigger a chart redraw when the theme
     * changes. The value itself is not used — any change to this prop causes the
     * chart to reinitialise so the colour is re-read from the current CSS
     * variables.
     */
    refresh_theme;
    /**
     * Getter method for the chart's configuration object.
     * @returns Configuration of the chart
     */
    async getConfig() {
        return this.config;
    }
    canvasEl;
    config;
    chart;
    /**
     * Resolve the base line colour. A `status` selects a device-status palette
     * slot; otherwise the first colour of `color_palette` is used.
     */
    resolveColor() {
        if (this.status) {
            const colors = chartColor$1.getChartColors(chartColor.AtChartColorPalette.DEVICE_STATUS) || [];
            return colors[statusPaletteIndex[this.status]];
        }
        const colors = chartColor$1.getChartColors(this.color_palette);
        return colors && colors.length ? colors[0] : undefined;
    }
    /**
     * The solid foreground line, shared by both display modes. In `area` mode it
     * also carries a top-to-bottom gradient fill.
     */
    lineDataset(base) {
        const isArea = this.mode === 'area';
        return {
            data: this.data,
            borderColor: base,
            borderWidth: LINE_WIDTH,
            borderCapStyle: 'round',
            borderJoinStyle: 'round',
            tension: 0.3,
            fill: isArea ? 'origin' : false,
            backgroundColor: isArea && base
                ? (context) => {
                    const { ctx, chartArea } = context.chart;
                    if (!chartArea) {
                        return 'transparent';
                    }
                    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                    gradient.addColorStop(0, chartColor$1.color(base).alpha(FILL_TOP_ALPHA).rgbString());
                    gradient.addColorStop(1, chartColor$1.color(base).alpha(0).rgbString());
                    return gradient;
                }
                : base,
            pointRadius: 0,
            pointHitRadius: 0,
            pointHoverRadius: 0,
        };
    }
    /**
     * A thicker, semi-transparent solid line drawn behind the foreground line to
     * create a glow (no blur/feathering). Used in `line` mode only.
     */
    glowDataset(base) {
        return {
            data: this.data,
            borderColor: chartColor$1.color(base).alpha(GLOW_ALPHA).rgbString(),
            borderWidth: GLOW_WIDTH,
            borderCapStyle: 'round',
            borderJoinStyle: 'round',
            tension: 0.3,
            fill: false,
            pointRadius: 0,
            pointHitRadius: 0,
            pointHoverRadius: 0,
        };
    }
    initChart() {
        chartColor$1.Chart.register(chartColor$1.LinearScale, chartColor$1.CategoryScale, chartColor$1.LineController, chartColor$1.LineElement, chartColor$1.PointElement, chartColor$1.index);
        const base = this.resolveColor();
        const isArea = this.mode === 'area';
        // Glow first so it sits behind the solid foreground line.
        const datasets = !isArea && base
            ? [this.glowDataset(base), this.lineDataset(base)]
            : [this.lineDataset(base)];
        this.config = {
            type: 'line',
            data: {
                labels: this.data.map((_, index) => index),
                datasets,
            },
            options: {
                devicePixelRatio: 2,
                responsive: true,
                maintainAspectRatio: false,
                // Inset the plot so round end caps and the thick glow aren't
                // clipped against the canvas edges.
                layout: { padding: GLOW_WIDTH / 2 + 2 },
                scales: {
                    x: { display: false },
                    y: { display: false, beginAtZero: false },
                },
                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false },
                },
                elements: {
                    line: { tension: 0.3 },
                },
                clip: false,
            },
        };
        if (this.chart) {
            this.chart.destroy();
        }
        this.chart = new chartColor$1.Chart(this.canvasEl, this.config);
        this.canvasEl.style.width = '';
        this.canvasEl.style.height = '';
    }
    disconnectedCallback() {
        this.chart?.destroy();
        this.chart = null;
    }
    componentDidUpdate() {
        if (this.data && this.data.length) {
            this.initChart();
        }
    }
    /**
     * componentDidLoad runs once the element is in the DOM. If the data prop
     * hasn't been set yet, the chart initialises later via componentDidUpdate.
     */
    componentDidLoad() {
        if (this.data && this.data.length) {
            this.initChart();
        }
    }
    render() {
        return (index.h(index.Host, { key: '137212758cf8427666b3bc0aa75ad35f1e324fd5', style: { height: '100%', width: '100%' } }, index.h("canvas", { key: 'd7df653f44429b4fff1d826d373a874ab7ac6953', ref: (el) => (this.canvasEl = el), class: `w-full ${heightVariants[this.height]}`, "data-name": "sparkline-canvas" })));
    }
};

exports.at_chart_sparkline = AtChartSparkline;
