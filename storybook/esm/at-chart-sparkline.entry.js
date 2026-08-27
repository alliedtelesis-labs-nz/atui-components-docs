import { r as registerInstance, h, H as Host } from './index-lWb16Ay7.js';
import { g as getChartColors, c as color, C as Chart, L as LinearScale, b as CategoryScale, d as LineController, e as LineElement, P as PointElement, i as index } from './chart-color-D0s5MbHz.js';
import { A as AtChartColorPalette } from './chart-color-PVoy06gY.js';

const heightVariants = {
    xs: 'h-[40px]',
    sm: 'h-[70px]',
    md: 'h-[120px]',
    lg: 'h-[180px]',
    xl: 'h-[240px]',
    auto: 'h-full',
};
/**
 * Mid-tone slot of the selected palette. Sequential palettes run light to dark,
 * so the earlier slots wash out against a light background at sparkline stroke
 * widths.
 */
const LINE_PALETTE_INDEX = 3;
const statusPaletteIndex = {
    good: 0,
    warning: 1,
    bad: 2,
    unreachable: 3,
};
const LINE_WIDTH = 2;
const GLOW_WIDTH = 8;
const GLOW_ALPHA = 0.2;
const FILL_TOP_ALPHA = 0.35;
const AtChartSparkline = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
     * a single series, so it uses one mid-tone slot of the chosen palette, picked
     * for contrast at stroke width. Values resolve from theme CSS variables so the
     * line stays theme-aware.
     */
    color_palette = AtChartColorPalette.SEQUENTIAL;
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
     * slot; otherwise a mid-tone slot of `color_palette` is used.
     */
    resolveColor() {
        if (this.status) {
            const colors = getChartColors(AtChartColorPalette.DEVICE_STATUS) || [];
            return colors[statusPaletteIndex[this.status]];
        }
        const colors = getChartColors(this.color_palette);
        return colors && colors.length ? colors[LINE_PALETTE_INDEX] : undefined;
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
            tension: 0.2,
            fill: isArea ? 'origin' : false,
            backgroundColor: isArea && base
                ? (context) => {
                    const { ctx, chartArea } = context.chart;
                    if (!chartArea) {
                        return 'transparent';
                    }
                    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                    gradient.addColorStop(0, color(base).alpha(FILL_TOP_ALPHA).rgbString());
                    gradient.addColorStop(1, color(base).alpha(0).rgbString());
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
            borderColor: color(base).alpha(GLOW_ALPHA).rgbString(),
            borderWidth: GLOW_WIDTH,
            borderCapStyle: 'round',
            borderJoinStyle: 'round',
            tension: 0.2,
            fill: false,
            pointRadius: 0,
            pointHitRadius: 0,
            pointHoverRadius: 0,
        };
    }
    initChart() {
        Chart.register(LinearScale, CategoryScale, LineController, LineElement, PointElement, index);
        const base = this.resolveColor();
        const isArea = this.mode === 'area';
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
                    line: { tension: 0.2 },
                },
                clip: false,
            },
        };
        if (this.chart) {
            this.chart.destroy();
        }
        this.chart = new Chart(this.canvasEl, this.config);
        this.canvasEl.style.width = '';
        this.canvasEl.style.height = '';
    }
    disconnectedCallback() {
        this.chart?.destroy();
        this.chart = null;
    }
    connectedCallback() {
        if (this.data?.length && !this.chart) {
            requestAnimationFrame(() => {
                if (!this.canvasEl?.isConnected) {
                    return;
                }
                if (!this.chart && this.data?.length) {
                    this.initChart();
                }
            });
        }
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
        return (h(Host, { key: 'ca70cddf4b9596a62e234bbf2c5bbd57c4ca7536', style: { height: '100%', width: '100%' } }, h("canvas", { key: '16e02ee8a264e7e54234df9af5bd6b9ced5aa17e', ref: (el) => (this.canvasEl = el), class: `w-full ${heightVariants[this.height]}`, "data-name": "sparkline-canvas" })));
    }
};

export { AtChartSparkline as at_chart_sparkline };
