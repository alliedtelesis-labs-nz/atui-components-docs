import "chartjs-adapter-date-fns";
import { h, Host } from "@stencil/core";
import { BarController, BarElement, CategoryScale, Chart, LinearScale, LineController, LineElement, TimeScale, Legend, Tooltip, PointElement, Filler, Colors, } from "chart.js";
import { AtTimeDateUtil } from "../../utils/at-time-date.util";
import { AtChartColorPalette } from "../../types/chart-color";
import { getChartColors } from "../../utils/chart-color";
const heightVariants = {
    xs: 'h-[70px]',
    sm: 'h-[160px]',
    md: 'h-[235px]',
    lg: 'h-[330px]',
    xl: 'h-[440px]',
    auto: 'h-full',
};
/**
 * @category Data Visualization
 * @description A flexible chart component for displaying bar and line charts with extensive customization options. Supports multiple data series, thresholds, time-based data, and various color palettes.
 */
/**
 * ### ```interface PointStyles```
 * ```
 *  pointBackgroundColor: Color;
 *  pointBorderColor: Color;
 *  pointBorderWidth: number;
 *  pointHitRadius: number;
 *  pointHoverBackgroundColor: Color;
 *  pointHoverBorderColor: Color;
 *  pointHoverBorderWidth: number;
 *  pointHoverRadius: number;
 *  pointRadius: number;
 *  pointRotaion: number;
 *  pointStyle: PointStyle;
 * ```
 * ### ```interface Threshold```
 * ```
 *  label: string;
 *  data: (number | Point | [number, number] | BubbleDataPoint)[];
 *  color?: string;
 *  dashLine?: boolean;
 *  stepped?: boolean;
 * ```
 */
export class AtChartBarLine {
    /**
     * Type of the chart
     */
    type;
    /**
     * Data to go in the chart. ChartDataset properties found
     * [here for line](https://www.chartjs.org/docs/latest/charts/line.html),
     * and [here for bar](https://www.chartjs.org/docs/latest/charts/bar.html)
     */
    data;
    /**
     * X axis formatting to be applied to the chart.
     * If you would like the default formatting provided by chart.js, set this to an empty object.
     */
    x_axis_format;
    /**
     * Y axis formatting to be applied to the chart.
     */
    y_axis_format;
    /**
     * Additional options to go into the 'options' seciont of the chart configuration
     */
    options;
    /**
     * Options for the tooltips on the chart
     */
    tooltip_options;
    /**
     * Options for the legend
     */
    legend_format;
    /**
     * Thresholds to be displayed in the chart
     */
    thresholds;
    /**
     * Styles for the points in the chart
     */
    point_styles;
    /**
     * The time range that the chart is displayed in.
     */
    time_range;
    /**
     * Height of the chart.
     */
    height = 'auto';
    /**
     * Color for axis tick labels on both axes. Useful for theme-reactive text color.
     */
    label_color;
    /**
     * Color for axis grid lines and borders on both axes. Useful for theme-reactive grid color.
     */
    grid_color;
    canvasEl;
    config;
    chart;
    /**
     * Colour palette to use for the chart. Preset options are provided ChartColourPalette:
     * 'categorical' : For charts with data that have distinct labels and no natural order
     * 'sequential' : For charts with data that is numeric or is naturally ordered.
     * 'alert' : For charts that relate to health state. Note that data requires a specific order.
     * 'custom' : Use colors defined in data. If none are provided, the ChartJS default will be used.
     */
    color_palette = AtChartColorPalette.CATEGORICAL;
    /**
     * Getter method for the chart's configuration object
     * @returns Configuration of the chart
     */
    async getConfig() {
        return this.config;
    }
    initChart() {
        Chart.register(LinearScale, BarController, CategoryScale, BarElement, TimeScale, LineController, LineElement, PointElement, Colors, Legend, Tooltip, Filler);
        const colors = getChartColors(this.color_palette);
        if (colors) {
            this.applyPresetPalette(colors);
        }
        if (this.point_styles) {
            this.pointStylesSetup();
        }
        this.config = {
            type: this.type,
            data: {
                labels: this.data.labels,
                datasets: [...this.data.datasets, ...this.formatThresholds()],
            },
            options: {
                devicePixelRatio: 2,
                maintainAspectRatio: false,
                scales: {
                    y: this.y_axis_format !== undefined
                        ? {
                            ...(this.y_axis_format || {}),
                            ticks: {
                                ...this.y_axis_format?.ticks,
                                ...(this.label_color
                                    ? { color: this.label_color }
                                    : {}),
                            },
                            grid: {
                                ...this.y_axis_format?.grid,
                                ...(this.grid_color
                                    ? { color: this.grid_color }
                                    : {}),
                            },
                            border: {
                                ...this.y_axis_format?.border,
                                ...(this.grid_color
                                    ? { color: this.grid_color }
                                    : {}),
                            },
                        }
                        : {
                            beginAtZero: true,
                            type: 'linear',
                            min: 0,
                            ...(this.label_color
                                ? { ticks: { color: this.label_color } }
                                : {}),
                            ...(this.grid_color
                                ? {
                                    grid: { color: this.grid_color },
                                    border: { color: this.grid_color },
                                }
                                : {}),
                        },
                    x: this.x_axis_format !== undefined
                        ? {
                            ...(this.x_axis_format || {}),
                            ticks: {
                                ...this.x_axis_format?.ticks,
                                ...(this.label_color
                                    ? { color: this.label_color }
                                    : {}),
                            },
                            grid: {
                                ...this.x_axis_format?.grid,
                                ...(this.grid_color
                                    ? { color: this.grid_color }
                                    : {}),
                            },
                            border: {
                                ...this.x_axis_format?.border,
                                ...(this.grid_color
                                    ? { color: this.grid_color }
                                    : {}),
                            },
                        }
                        : {
                            type: 'time',
                            time: {
                                displayFormats: {
                                    day: 'ddd',
                                    minute: 'MMM D H:mm',
                                    hour: 'MMM D H:mm',
                                },
                            },
                            ticks: {
                                font: { size: 11 },
                                autoSkip: true,
                                align: 'center',
                                maxRotation: 0,
                                minRotation: 0,
                                ...(this.label_color
                                    ? { color: this.label_color }
                                    : {}),
                            },
                            ...(this.grid_color
                                ? {
                                    grid: { color: this.grid_color },
                                    border: { color: this.grid_color },
                                }
                                : {}),
                        },
                },
                ...this.options,
                plugins: {
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        position: 'nearest',
                        animation: { duration: 150 },
                        boxWidth: 10,
                        boxHeight: 10,
                        boxPadding: 4,
                        padding: { x: 10, y: 4 },
                        ...(this.tooltip_options || {}),
                        callbacks: {
                            labelColor: (ctx) => ({
                                borderColor: 'transparent',
                                backgroundColor: ctx.dataset
                                    .borderColor,
                                borderWidth: 0,
                                borderRadius: 2,
                            }),
                            ...(this.tooltip_options?.callbacks || {}),
                        },
                    },
                    legend: {
                        onHover: (event) => {
                            if (event.native) {
                                event.native.target.style.cursor = 'pointer';
                            }
                        },
                        display: true,
                        ...(this.legend_format || {}),
                        labels: {
                            boxWidth: 10,
                            boxHeight: 10,
                            fontSize: 10,
                            useBorderRadius: true,
                            borderRadius: 2,
                            generateLabels: (chart) => {
                                const original = Chart.defaults.plugins.legend.labels.generateLabels(chart);
                                return original.map((label) => ({
                                    ...label,
                                    lineWidth: 0,
                                }));
                            },
                            ...(this.legend_format?.labels || {}),
                        },
                    },
                },
                clip: false,
                elements: {
                    line: {
                        tension: 0,
                        borderWidth: 2,
                    },
                },
            },
        };
        if (this.time_range) {
            const dates = this.getMinMaxDateStrings(this.time_range);
            this.config.options.scales.x['min'] = dates.min;
            this.config.options.scales.x['max'] = dates.max;
        }
        if (this.chart) {
            this.chart.destroy();
        }
        this.chart = new Chart(this.canvasEl, this.config);
        this.canvasEl.style.width = '';
        this.canvasEl.style.height = '';
    }
    componentDidUpdate() {
        if (this.data && this.data.datasets.length) {
            this.initChart();
        }
    }
    /**
     * componentDidLoad will be run, but if the props haven't been passed to it yet,
     * it will throw an error. So we catch this, and wait for the props to be passed
     * to the component where it will run componentDidUpdtae.
     */
    componentDidLoad() {
        if (this.data && this.data.datasets.length) {
            this.initChart();
        }
    }
    pointStylesSetup() {
        this.data.datasets = this.data.datasets.map((dataset) => {
            return {
                ...dataset,
                ...this.point_styles,
            };
        });
    }
    applyPresetPalette(colors) {
        if (this.color_palette === AtChartColorPalette.CUSTOM) {
            return;
        }
        this.data.datasets = this.data.datasets.map((dataset, index) => {
            const color = colors[index % colors.length];
            return {
                ...dataset,
                backgroundColor: color,
                borderColor: color,
            };
        });
    }
    getMinMaxDateStrings(timeRange) {
        const timeWithUnit = timeRange.selected;
        const custom = timeRange.custom
            ? AtTimeDateUtil.getAbsoluteDateRange(timeRange.custom)
            : null;
        const { startDate, endDate } = AtTimeDateUtil.getDateRange(custom, timeWithUnit, null);
        return { min: startDate.toString(), max: endDate.toString() };
    }
    formatThresholds = () => {
        if (!this.thresholds) {
            return [];
        }
        const datasets = [];
        this.thresholds.forEach((threshold) => {
            datasets.push({
                type: 'line',
                label: threshold.label,
                borderColor: threshold.color,
                borderCapStyle: 'butt',
                backgroundColor: 'white',
                fill: false,
                data: threshold.data,
                pointRadius: 0,
                borderDash: threshold.dashLine ? [6, 3] : undefined,
                tension: 0,
                stepped: threshold.stepped,
                order: 1,
            });
        });
        return datasets;
    };
    /**
     * Manually trigger a chart resize to fit container dimensions.
     */
    async resize() {
        if (this.chart) {
            this.chart.resize();
        }
    }
    render() {
        return (h(Host, { key: '85bbd4ff0d90396ab81376c7f990fdd89626c61e', style: { height: '100%', width: '100%' } }, h("canvas", { key: '396432bb31dacb0450b4b3aa48716304d84a2827', ref: (el) => (this.canvasEl = el), class: `min-w-100 ${heightVariants[this.height]}` })));
    }
    static get is() { return "at-chart-bar-line"; }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'bar' | 'line'",
                    "resolved": "\"bar\" | \"line\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Type of the chart"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "type"
            },
            "data": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "{\n        labels: string[];\n        datasets: ChartDataset[];\n    }",
                    "resolved": "{ labels: string[]; datasets: ChartDataset[]; }",
                    "references": {
                        "ChartDataset": {
                            "location": "import",
                            "path": "chart.js",
                            "id": "../node_modules/chart.js/dist/types.d.ts::ChartDataset",
                            "referenceLocation": "ChartDataset"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Data to go in the chart. ChartDataset properties found\n[here for line](https://www.chartjs.org/docs/latest/charts/line.html),\nand [here for bar](https://www.chartjs.org/docs/latest/charts/bar.html)"
                },
                "getter": false,
                "setter": false
            },
            "x_axis_format": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "object",
                    "resolved": "object",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "X axis formatting to be applied to the chart.\nIf you would like the default formatting provided by chart.js, set this to an empty object."
                },
                "getter": false,
                "setter": false
            },
            "y_axis_format": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "object",
                    "resolved": "object",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Y axis formatting to be applied to the chart."
                },
                "getter": false,
                "setter": false
            },
            "options": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "object",
                    "resolved": "object",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Additional options to go into the 'options' seciont of the chart configuration"
                },
                "getter": false,
                "setter": false
            },
            "tooltip_options": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "object",
                    "resolved": "object",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Options for the tooltips on the chart"
                },
                "getter": false,
                "setter": false
            },
            "legend_format": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "object",
                    "resolved": "object",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Options for the legend"
                },
                "getter": false,
                "setter": false
            },
            "thresholds": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AtIThreshold[]",
                    "resolved": "AtIThreshold[]",
                    "references": {
                        "AtIThreshold": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-chart-bar-line/at-chart-bar-line.tsx",
                            "id": "src/components/at-chart-bar-line/at-chart-bar-line.tsx::AtIThreshold"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Thresholds to be displayed in the chart"
                },
                "getter": false,
                "setter": false
            },
            "point_styles": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AtIPointStyles",
                    "resolved": "AtIPointStyles",
                    "references": {
                        "AtIPointStyles": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-chart-bar-line/at-chart-bar-line.tsx",
                            "id": "src/components/at-chart-bar-line/at-chart-bar-line.tsx::AtIPointStyles"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Styles for the points in the chart"
                },
                "getter": false,
                "setter": false
            },
            "time_range": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AtSelectedTimeRangeExtended",
                    "resolved": "AtISelectedTimeRange | { selected: TimeRangeDisplay.ALL; custom?: undefined; }",
                    "references": {
                        "AtSelectedTimeRangeExtended": {
                            "location": "import",
                            "path": "../../models/at-time-range.models",
                            "id": "src/models/at-time-range.models.ts::AtSelectedTimeRangeExtended",
                            "referenceLocation": "AtSelectedTimeRangeExtended"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The time range that the chart is displayed in."
                },
                "getter": false,
                "setter": false
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
                            "path": "../at-chart-donut/at-chart-donut",
                            "id": "src/components/at-chart-donut/at-chart-donut.tsx::AtChartHeight",
                            "referenceLocation": "AtChartHeight"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Height of the chart."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "height",
                "defaultValue": "'auto'"
            },
            "label_color": {
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
                    "text": "Color for axis tick labels on both axes. Useful for theme-reactive text color."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label_color"
            },
            "grid_color": {
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
                    "text": "Color for axis grid lines and borders on both axes. Useful for theme-reactive grid color."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "grid_color"
            },
            "color_palette": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AtChartColorPalette",
                    "resolved": "AtChartColorPalette.ALERT | AtChartColorPalette.CATEGORICAL | AtChartColorPalette.CUSTOM | AtChartColorPalette.SEQUENTIAL",
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
                    "text": "Colour palette to use for the chart. Preset options are provided ChartColourPalette:\n'categorical' : For charts with data that have distinct labels and no natural order\n'sequential' : For charts with data that is numeric or is naturally ordered.\n'alert' : For charts that relate to health state. Note that data requires a specific order.\n'custom' : Use colors defined in data. If none are provided, the ChartJS default will be used."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "color_palette",
                "defaultValue": "AtChartColorPalette.CATEGORICAL"
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
                    "text": "Getter method for the chart's configuration object",
                    "tags": [{
                            "name": "returns",
                            "text": "Configuration of the chart"
                        }]
                }
            },
            "resize": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Manually trigger a chart resize to fit container dimensions.",
                    "tags": []
                }
            }
        };
    }
}
