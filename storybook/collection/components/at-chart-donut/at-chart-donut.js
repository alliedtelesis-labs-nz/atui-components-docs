import { h, Host } from "@stencil/core";
import { ArcElement, Chart, DoughnutController, Filler, Legend, Tooltip, } from "chart.js";
import "chartjs-adapter-moment";
import { ChartColorPalette } from "../../types/chart-color";
import { getChartColors } from "../../utils/chart-color";
const TOKEN_TEXT_DARK = '#0f172a';
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
 * @description A donut chart component for visualizing proportional data with customizable colors and legends. Built on Chart.js with responsive design and interactive hover effects.
 */
export class AtChartDonut {
    /**
     * Data to be shown in the chart. ChartDataset properties can be found
     * [here](https://www.chartjs.org/docs/latest/charts/doughnut.html#dataset-properties)
     */
    data;
    /**
     * Additional options to be added to the chart configuration
     */
    options;
    /**
     * Height of the chart
     */
    height = 'md';
    /**
     * Additional options for formatting the legend
     */
    legend_format = {
        labels: {
            boxWidth: 10,
            boxHeight: 10,
            fontSize: 11,
        },
        onHover: (event) => {
            if (event.native) {
                event.native.target.style.cursor = 'pointer';
            }
        },
        display: true,
    };
    /**
     * Additional options for the tooltip
     */
    tooltip_options = {
        mode: 'index',
        intersect: false,
        position: 'nearest',
    };
    /**
     * Additional plugin options
     */
    plugins;
    /**
     * Animations added to the chart configuration
     */
    animations;
    /**
     * Colour palette to use for the chart. Preset options are provided ChartColourPalette:
     * 'categorical' : For charts with data that have distinct labels and no natural order
     * 'sequential' : For charts with data that is numeric or is naturally ordered.
     * 'alert' : For charts that relate to health state. Note that data requires a specific order.
     * 'custom' : Use colors defined in data. If none are provided, the ChartJS default will be used.
     */
    color_palette = ChartColorPalette.CATEGORICAL;
    /**
     * Optional value text to display in the center of the donut chart
     */
    center_value;
    /**
     * Optional heading text to display in the center of the donut chart
     */
    center_text;
    /**
     * Controls the thickness of the donut ring. Value between 0 and 100.
     * 0 means no cutout (solid circle), 100 means maximum cutout (thin ring).
     * Default is 70.
     */
    cutout = 70;
    canvasEl;
    config;
    /**
     * Getter method for the chart's configuration object
     * @returns Configuration of the chart
     */
    async getConfig() {
        return this.config;
    }
    defaultPieTooltipOptions = {
        mode: 'index',
        intersect: true,
        position: 'nearest',
        animation: {
            duration: 150,
        },
    };
    getDrawCenterTextPlugin() {
        return {
            id: 'DrawCenterTextPlugin',
            afterDatasetDraw: (chart) => {
                const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
                const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
                const ctx = chart.ctx;
                if (!ctx) {
                    return;
                }
                ctx.restore();
                const height = chart.chartArea.bottom - chart.chartArea.top;
                const textFontSize = (height / 250).toFixed(2) + 'em sans-serif';
                const valueFontSize = (height / 180).toFixed(2) + 'em sans-serif';
                ctx.fillStyle = TOKEN_TEXT_DARK;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.font = '500 ' + valueFontSize;
                const addText = (fontSize, text, x, y, position) => {
                    ctx.font = '500 ' + fontSize;
                    const textMetrics = ctx.measureText(text);
                    const textHeight = textMetrics.actualBoundingBoxAscent +
                        textMetrics.actualBoundingBoxDescent;
                    if (position != 'middle') {
                        y =
                            position === 'top'
                                ? y - textHeight
                                : y + textHeight;
                    }
                    ctx.fillText(text, x, y);
                };
                if (this.center_value) {
                    addText(valueFontSize, this.center_value, centerX, centerY, 'top');
                    addText(textFontSize, this.center_text, centerX, centerY, 'bottom');
                }
                else if (this.center_text) {
                    addText(textFontSize, this.center_text, centerX, centerY, 'middle');
                }
                ctx.save();
            },
        };
    }
    initChart() {
        Chart.register(DoughnutController, ArcElement, Legend, Tooltip, Filler);
        const colors = getChartColors(this.color_palette);
        if (colors) {
            this.applyPresetPalette(colors);
        }
        const plugins = this.plugins ? [...this.plugins] : [];
        if (this.center_text || this.center_value) {
            plugins.push(this.getDrawCenterTextPlugin());
        }
        this.config = {
            type: 'doughnut',
            data: {
                ...this.data,
                datasets: this.data.datasets.map((dataset) => ({
                    ...dataset,
                    cutout: `${this.cutout}%`,
                })),
            },
            options: {
                animation: this.animations,
                ...this.options,
                maintainAspectRatio: true,
                aspectRatio: 1,
                layout: {
                    padding: 16,
                },
                plugins: {
                    legend: this.legend_format,
                    tooltip: this.tooltip_options || this.defaultPieTooltipOptions,
                },
            },
            plugins: plugins,
        };
        new Chart(this.canvasEl, this.config);
        this.canvasEl.style.width = '100%';
        this.canvasEl.style.height = '100%';
    }
    applyPresetPalette(colors) {
        if (this.color_palette === ChartColorPalette.CUSTOM) {
            return;
        }
        this.data.datasets = this.data.datasets.map((dataset) => {
            const color = dataset.data.map((_, index) => colors[index % colors.length]);
            return {
                ...dataset,
                backgroundColor: color,
                hoverBackgroundColor: color,
                borderColor: color,
                hoverBorderColor: color,
            };
        });
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
    render() {
        return (h(Host, { key: 'cbe988a52d5dd19351ef22e9cee716d8fe624969', role: "region", class: `relative flex w-full flex-col items-center justify-center ${heightVariants[this.height]}` }, h("canvas", { key: 'f85a6a9f304f91c316d91e2f852828961fc06a86', ref: (el) => (this.canvasEl = el), style: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                maxWidth: '100%',
                maxHeight: '100%',
            } })));
    }
    static get is() { return "at-chart-donut"; }
    static get properties() {
        return {
            "data": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{\n        labels: string[];\n        datasets: ChartDataset[];\n    }",
                    "resolved": "{ labels: string[]; datasets: ChartDataset[]; }",
                    "references": {
                        "ChartDataset": {
                            "location": "import",
                            "path": "chart.js",
                            "id": "../node_modules/chart.js/dist/types.d.ts::ChartDataset"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Data to be shown in the chart. ChartDataset properties can be found\n[here](https://www.chartjs.org/docs/latest/charts/doughnut.html#dataset-properties)"
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
                    "text": "Additional options to be added to the chart configuration"
                },
                "getter": false,
                "setter": false
            },
            "height": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Height",
                    "resolved": "\"auto\" | \"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\"",
                    "references": {
                        "Height": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-chart-donut/at-chart-donut.tsx",
                            "id": "src/components/at-chart-donut/at-chart-donut.tsx::Height"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Height of the chart"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "height",
                "defaultValue": "'md'"
            },
            "legend_format": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "object",
                    "resolved": "object",
                    "references": {
                        "HTMLElement": {
                            "location": "global",
                            "id": "global::HTMLElement"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Additional options for formatting the legend"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "{\n        labels: {\n            boxWidth: 10,\n            boxHeight: 10,\n            fontSize: 11,\n        },\n        onHover: (event): void => {\n            if (event.native) {\n                (event.native.target as HTMLElement).style.cursor = 'pointer';\n            }\n        },\n        display: true,\n    }"
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
                    "text": "Additional options for the tooltip"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "{\n        mode: 'index',\n        intersect: false,\n        position: 'nearest',\n    }"
            },
            "plugins": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Plugin[]",
                    "resolved": "Plugin<keyof ChartTypeRegistry, AnyObject>[]",
                    "references": {
                        "Plugin": {
                            "location": "import",
                            "path": "chart.js",
                            "id": "../node_modules/chart.js/dist/types.d.ts::Plugin"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Additional plugin options"
                },
                "getter": false,
                "setter": false
            },
            "animations": {
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
                    "text": "Animations added to the chart configuration"
                },
                "getter": false,
                "setter": false
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
                            "id": "src/types/chart-color.ts::ChartColorPalette"
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
            },
            "center_value": {
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
                    "text": "Optional value text to display in the center of the donut chart"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "center_value"
            },
            "center_text": {
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
                    "text": "Optional heading text to display in the center of the donut chart"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "center_text"
            },
            "cutout": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Controls the thickness of the donut ring. Value between 0 and 100.\n0 means no cutout (solid circle), 100 means maximum cutout (thin ring).\nDefault is 70."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "cutout",
                "defaultValue": "70"
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
            }
        };
    }
}
//# sourceMappingURL=at-chart-donut.js.map
