import { h, Host } from "@stencil/core";
import { BarController, BarElement, CategoryScale, Chart, LinearScale, LineController, LineElement, TimeScale, Legend, Tooltip, PointElement, Filler, Colors, } from "chart.js";
import "chartjs-adapter-moment";
import { TimeDateUtil } from "../../utils/time-date.util";
import { ChartColorPalette } from "../../types/chart-color";
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
    color_palette = ChartColorPalette.CATEGORICAL;
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
                    y: this.y_axis_format || {
                        beginAtZero: true,
                        type: 'linear',
                        min: 0,
                    },
                    x: this.x_axis_format || {
                        type: 'time',
                        time: {
                            displayFormats: {
                                day: 'ddd',
                                minute: 'MMM D H:mm',
                                hour: 'MMM D H:mm',
                            },
                        },
                        ticks: {
                            font: {
                                size: 11,
                            },
                            autoSkip: true,
                            align: 'center',
                            maxRotation: 0,
                            minRotation: 0,
                        },
                    },
                },
                ...this.options,
                plugins: {
                    tooltip: this.tooltip_options || {
                        mode: 'index',
                        intersect: false,
                        position: 'nearest',
                        animation: {
                            duration: 150,
                        },
                    },
                    legend: this.legend_format || {
                        labels: {
                            boxWidth: 8,
                            boxHeight: 8,
                            fontSize: 10,
                            borderRadius: 2,
                        },
                        onHover: (event) => {
                            if (event.native) {
                                event.native.target.style.cursor = 'pointer';
                            }
                        },
                        display: true,
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
        new Chart(this.canvasEl, this.config);
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
        if (this.color_palette === ChartColorPalette.CUSTOM) {
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
            ? TimeDateUtil.getAbsoluteDateRange(timeRange.custom)
            : null;
        const { startDate, endDate } = TimeDateUtil.getDateRange(custom, timeWithUnit, null);
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
        return (h(Host, { key: '78f14e69947076c3eef5e892a655bf0c213f410c', style: { height: '100%', width: '100%' } }, h("canvas", { key: 'd30a5b70718116072e48831fee3b1fa95edee7bf', ref: (el) => (this.canvasEl = el), class: `min-w-100 ${heightVariants[this.height]}` })));
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
                    "original": "Threshold[]",
                    "resolved": "Threshold[]",
                    "references": {
                        "Threshold": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-chart-bar-line/at-chart-bar-line.tsx",
                            "id": "src/components/at-chart-bar-line/at-chart-bar-line.tsx::Threshold"
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
                    "original": "PointStyles",
                    "resolved": "PointStyles",
                    "references": {
                        "PointStyles": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-chart-bar-line/at-chart-bar-line.tsx",
                            "id": "src/components/at-chart-bar-line/at-chart-bar-line.tsx::PointStyles"
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
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "SelectedTimeRangeExtended",
                    "resolved": "SelectedTimeRangeExtended",
                    "references": {
                        "SelectedTimeRangeExtended": {
                            "location": "global",
                            "id": "global::SelectedTimeRangeExtended"
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
                "setter": false,
                "reflect": false,
                "attribute": "time_range"
            },
            "height": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Height",
                    "resolved": "\"auto\" | \"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\"",
                    "references": {
                        "Height": {
                            "location": "import",
                            "path": "../at-chart-donut/at-chart-donut",
                            "id": "src/components/at-chart-donut/at-chart-donut.tsx::Height",
                            "referenceLocation": "Height"
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
            "color_palette": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ChartColorPalette",
                    "resolved": "ChartColorPalette.ALERT | ChartColorPalette.CATEGORICAL | ChartColorPalette.CUSTOM | ChartColorPalette.SEQUENTIAL",
                    "references": {
                        "ChartColorPalette": {
                            "location": "import",
                            "path": "../../types/chart-color",
                            "id": "src/types/chart-color.ts::ChartColorPalette",
                            "referenceLocation": "ChartColorPalette"
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
                "defaultValue": "ChartColorPalette.CATEGORICAL"
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
