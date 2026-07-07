import { h, Host } from "@stencil/core";
import { CategoryScale, Chart, Filler, LinearScale, LineController, LineElement, PointElement, } from "chart.js";
import { color } from "chart.js/helpers";
import { AtChartColorPalette } from "../../types/chart-color";
import { getChartColors } from "../../utils/chart-color";
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
const GLOW_ALPHA = 0.2;
const FILL_TOP_ALPHA = 0.35;
/**
 * @category Data Visualization
 * @description A minimal sparkline chart that renders a single styled line with no axes, grid, legend, or tooltip. Suited to compact health/trend indicators inside table cells, cards, or stat tiles. Supports a device-status colour mode and line/area display treatments.
 */
export class AtChartSparkline {
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
     * slot; otherwise the first colour of `color_palette` is used.
     */
    resolveColor() {
        if (this.status) {
            const colors = getChartColors(AtChartColorPalette.DEVICE_STATUS) || [];
            return colors[statusPaletteIndex[this.status]];
        }
        const colors = getChartColors(this.color_palette);
        return colors && colors.length ? colors[3] : undefined;
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
        Chart.register(LinearScale, CategoryScale, LineController, LineElement, PointElement, Filler);
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
        return (h(Host, { key: 'e1ac49f69a5b06cbfa9fa57e3a44345c6e850931', style: { height: '100%', width: '100%' } }, h("canvas", { key: 'b8aed2ab5396520a3a6a8adb4dc3a231a4d3a61d', ref: (el) => (this.canvasEl = el), class: `w-full ${heightVariants[this.height]}`, "data-name": "sparkline-canvas" })));
    }
    static get is() { return "at-chart-sparkline"; }
    static get properties() {
        return {
            "data": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "number[]",
                    "resolved": "number[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The sparkline is a compact graph for the shape of one trend.\nIt accepts a single, pre-summarized series of numeric values to plot, and renders no axes, legend or tooltip.\nFor multi-series, labelled or time-based data, use `at-chart-bar-line`."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AtChartSparklineMode",
                    "resolved": "\"area\" | \"line\"",
                    "references": {
                        "AtChartSparklineMode": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-chart-sparkline/at-chart-sparkline.tsx",
                            "id": "src/components/at-chart-sparkline/at-chart-sparkline.tsx::AtChartSparklineMode"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Display treatment: a glowing `line`, or an `area` with a gradient fill."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "mode",
                "defaultValue": "'line'"
            },
            "status": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AtChartSparklineStatus",
                    "resolved": "\"bad\" | \"good\" | \"unreachable\" | \"warning\"",
                    "references": {
                        "AtChartSparklineStatus": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-chart-sparkline/at-chart-sparkline.tsx",
                            "id": "src/components/at-chart-sparkline/at-chart-sparkline.tsx::AtChartSparklineStatus"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Health colour mode. When set, the line colour is taken from the\ndevice-status palette for the given state (good / warning / bad /\nunreachable). Takes precedence over `color_palette`."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "status"
            },
            "height": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AtChartHeight",
                    "resolved": "\"auto\" | \"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\"",
                    "references": {
                        "AtChartHeight": {
                            "location": "import",
                            "path": "../../types/chart",
                            "id": "src/types/chart.ts::AtChartHeight",
                            "referenceLocation": "AtChartHeight"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Height of the sparkline."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "height",
                "defaultValue": "'xs'"
            },
            "color_palette": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AtChartColorPalette",
                    "resolved": "AtChartColorPalette.ALERT | AtChartColorPalette.CATEGORICAL | AtChartColorPalette.CUSTOM | AtChartColorPalette.DEVICE_STATUS | AtChartColorPalette.ONBOARDING_STATUS | AtChartColorPalette.SEQUENTIAL",
                    "references": {
                        "AtChartColorPalette": {
                            "location": "import",
                            "path": "../../types/chart-color",
                            "id": "src/types/chart-color.ts::AtChartColorPalette",
                            "referenceLocation": "AtChartColorPalette"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Colour palette used for the line when `status` is not set. The sparkline is\na single series, so it uses the first colour of the chosen palette. Values\nresolve from theme CSS variables so the line stays theme-aware."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "color_palette",
                "defaultValue": "AtChartColorPalette.SEQUENTIAL"
            },
            "refresh_theme": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Pass the active theme value here to trigger a chart redraw when the theme\nchanges. The value itself is not used \u2014 any change to this prop causes the\nchart to reinitialise so the colour is re-read from the current CSS\nvariables."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "refresh_theme"
            }
        };
    }
    static get methods() {
        return {
            "getConfig": {
                "complexType": {
                    "signature": "() => Promise<object>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<object>"
                },
                "docs": {
                    "text": "Getter method for the chart's configuration object.",
                    "tags": [{
                            "name": "returns",
                            "text": "Configuration of the chart"
                        }]
                }
            }
        };
    }
}
