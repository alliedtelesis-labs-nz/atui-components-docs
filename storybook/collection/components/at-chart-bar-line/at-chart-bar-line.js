import "chartjs-adapter-date-fns";
import { h, Host } from "@stencil/core";
import { BarController, BarElement, CategoryScale, Chart, LinearScale, LineController, LineElement, TimeScale, Legend, Tooltip, PointElement, Filler, Colors, } from "chart.js";
import { AtTimeDateUtil } from "../../utils/at-time-date.util";
import { AtChartColorPalette, readChartTextColors, } from "../../types/chart-color";
import { getChartColors } from "../../utils/chart-color";
import { ensureLegendTooltipEl, generateLegendLabels, setLegendTooltip, } from "../../utils/chart-legend";
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
     * X axis formatting merged over ATUI defaults. Use to configure time display formats,
     * tick options, or switch axis type. Pass an empty object to keep all defaults.
     */
    x_axis_format;
    /**
     * Y axis formatting merged over ATUI defaults. Use to configure tick format, labels,
     * or stacking. Pass an empty object to keep all defaults.
     */
    y_axis_format;
    /**
     * Additional options merged into the Chart.js options object. Use to configure axes,
     * time display, and other chart behaviour. User values are spread over ATUI defaults
     * so defaults are preserved unless explicitly overridden.
     */
    options;
    /**
     * Options merged into the tooltip plugin config. ATUI defaults are preserved unless
     * explicitly overridden.
     */
    tooltip_options;
    /**
     * Options merged into the legend plugin config. ATUI defaults are preserved unless
     * explicitly overridden.
     */
    legend_options;
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
     * Colour palette to use for the chart. Preset options are provided ChartColourPalette:
     * 'categorical' : For charts with data that have distinct labels and no natural order
     * 'sequential' : For charts with data that is numeric or is naturally ordered.
     * 'alert' : For charts that relate to health state. Note that data requires a specific order.
     * 'custom' : Use colors defined in data. If none are provided, the ChartJS default will be used.
     */
    color_palette = AtChartColorPalette.CATEGORICAL;
    /**
     * Pass the active theme value here to trigger a chart redraw when the theme changes.
     * The value itself is not used — any change to this prop causes the chart to reinitialise
     * so colors and text are re-read from the current CSS variables.
     */
    refresh_theme;
    /**
     * Getter method for the chart's configuration object
     * @returns Configuration of the chart
     */
    async getConfig() {
        return this.config;
    }
    /**
     * Returns the legend items currently displayed by the chart.
     * Each item reflects the truncated label text as rendered in the legend.
     * @returns Array of legend items
     */
    async getLegendItems() {
        return this.chart?.legend?.legendItems ?? [];
    }
    canvasEl;
    legendTooltipEl = null;
    config;
    chart;
    ensureTooltipEl() {
        this.legendTooltipEl = ensureLegendTooltipEl(this.canvasEl, this.legendTooltipEl);
    }
    setLegendTooltip(visible, text, event) {
        setLegendTooltip(this.legendTooltipEl, visible, text, event);
    }
    generateLegendLabels(chart, textColor, customGenerateLabels) {
        const legendPosition = this.legend_options?.position ??
            this.options?.plugins?.legend?.position ??
            'top';
        const isSideLegend = legendPosition === 'left' || legendPosition === 'right';
        return generateLegendLabels(chart, textColor, isSideLegend, (c) => Chart.defaults.plugins.legend.labels.generateLabels(c), customGenerateLabels);
    }
    initChart() {
        this.setLegendTooltip(false);
        Chart.register(LinearScale, BarController, CategoryScale, BarElement, TimeScale, LineController, LineElement, PointElement, Colors, Legend, Tooltip, Filler);
        const colors = getChartColors(this.color_palette);
        if (colors) {
            this.applyPresetPalette(colors);
        }
        if (this.point_styles) {
            this.pointStylesSetup();
        }
        const textColors = readChartTextColors();
        const defaultAxisConfig = {
            ticks: { color: textColors.label },
            title: { color: textColors.title },
            grid: { color: textColors.axisLine },
            border: { color: textColors.axisLine },
        };
        const defaultXConfig = {
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
                autoSkipPadding: 8,
                align: 'center',
                maxRotation: 0,
                minRotation: 0,
                color: textColors.label,
            },
            title: { color: textColors.title },
            grid: { color: textColors.axisLine },
            border: { color: textColors.axisLine },
        };
        const defaultYConfig = {
            beginAtZero: true,
            type: 'linear',
            min: 0,
            ...defaultAxisConfig,
        };
        this.config = {
            type: this.type,
            data: {
                labels: this.data.labels,
                datasets: [...this.data.datasets, ...this.formatThresholds()],
            },
            options: {
                devicePixelRatio: 2,
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        ...defaultXConfig,
                        ...(this.x_axis_format || {}),
                        ticks: {
                            ...defaultXConfig.ticks,
                            ...(this.x_axis_format?.ticks || {}),
                        },
                        title: {
                            ...defaultXConfig.title,
                            ...(this.x_axis_format?.title || {}),
                        },
                        grid: {
                            ...defaultXConfig.grid,
                            ...(this.x_axis_format?.grid || {}),
                        },
                        border: {
                            ...defaultXConfig.border,
                            ...(this.x_axis_format?.border || {}),
                        },
                    },
                    y: {
                        ...defaultYConfig,
                        ...(this.y_axis_format || {}),
                        ticks: {
                            ...defaultAxisConfig.ticks,
                            ...(this.y_axis_format?.ticks || {}),
                        },
                        title: {
                            ...defaultAxisConfig.title,
                            ...(this.y_axis_format?.title || {}),
                        },
                        grid: {
                            ...defaultAxisConfig.grid,
                            ...(this.y_axis_format?.grid || {}),
                        },
                        border: {
                            ...defaultAxisConfig.border,
                            ...(this.y_axis_format?.border || {}),
                        },
                    },
                },
                ...(this.options || {}),
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
                        backgroundColor: textColors.tooltipBg,
                        borderColor: textColors.tooltipBg,
                        titleColor: textColors.tooltipTitle,
                        bodyColor: textColors.tooltipBody,
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
                        onHover: (event, legendItem) => {
                            const nativeEvent = event.native;
                            if (!nativeEvent) {
                                return;
                            }
                            const item = legendItem;
                            nativeEvent.target.style.cursor =
                                item.isOverflow ? 'default' : 'pointer';
                            this.setLegendTooltip(!!item.isTruncated, item.originalText, nativeEvent);
                        },
                        onLeave: () => {
                            this.setLegendTooltip(false);
                        },
                        onClick: (evt, legendItem, legend) => {
                            if (legendItem.isOverflow) {
                                return;
                            }
                            Chart.defaults.plugins.legend.onClick.call(legend, evt, legendItem, legend);
                        },
                        display: true,
                        ...(this.legend_options || {}),
                        labels: {
                            boxWidth: 10,
                            boxHeight: 10,
                            fontSize: 10,
                            useBorderRadius: true,
                            borderRadius: 2,
                            color: textColors.label,
                            ...(() => {
                                const customGenerateLabels = this.legend_options?.labels?.generateLabels;
                                const { generateLabels: _, ...restLabelOptions } = this.legend_options?.labels ?? {};
                                return {
                                    ...restLabelOptions,
                                    generateLabels: (chart) => this.generateLegendLabels(chart, textColors.label, customGenerateLabels),
                                };
                            })(),
                        },
                    },
                    ...(this.options?.plugins || {}),
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
    disconnectedCallback() {
        this.legendTooltipEl?.remove();
        this.legendTooltipEl = null;
        this.chart?.destroy();
        this.chart = null;
    }
    connectedCallback() {
        // Fires on every DOM reconnection (e.g. after a GridStack widget move).
        // disconnectedCallback() already destroyed this.chart; this.data is
        // preserved on the element. Re-init via rAF so the grid layout has
        // settled before Chart.js reads the canvas dimensions.
        // On the very first connection Angular has not yet bound the data prop,
        // so this.data will be falsy — the condition guards that case.
        if (this.data?.datasets?.length && !this.chart) {
            requestAnimationFrame(() => {
                if (!this.canvasEl?.isConnected)
                    return;
                if (!this.chart && this.data?.datasets?.length) {
                    this.initChart();
                }
            });
        }
    }
    componentDidUpdate() {
        this.ensureTooltipEl();
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
        this.ensureTooltipEl();
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
        return (h(Host, { key: 'f216823d65dbcea80674fa4f5943ed9adcfc503d', style: { height: '100%', width: '100%' } }, h("canvas", { key: '54c9c4c4411656e409dfc1408c9ff284e1892eae', ref: (el) => (this.canvasEl = el), class: `min-w-100 ${heightVariants[this.height]}` })));
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "X axis formatting merged over ATUI defaults. Use to configure time display formats,\ntick options, or switch axis type. Pass an empty object to keep all defaults."
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
                    "text": "Y axis formatting merged over ATUI defaults. Use to configure tick format, labels,\nor stacking. Pass an empty object to keep all defaults."
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
                    "text": "Additional options merged into the Chart.js options object. Use to configure axes,\ntime display, and other chart behaviour. User values are spread over ATUI defaults\nso defaults are preserved unless explicitly overridden."
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
                    "text": "Options merged into the tooltip plugin config. ATUI defaults are preserved unless\nexplicitly overridden."
                },
                "getter": false,
                "setter": false
            },
            "legend_options": {
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
                    "text": "Options merged into the legend plugin config. ATUI defaults are preserved unless\nexplicitly overridden."
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
                    "text": "Colour palette to use for the chart. Preset options are provided ChartColourPalette:\n'categorical' : For charts with data that have distinct labels and no natural order\n'sequential' : For charts with data that is numeric or is naturally ordered.\n'alert' : For charts that relate to health state. Note that data requires a specific order.\n'custom' : Use colors defined in data. If none are provided, the ChartJS default will be used."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "color_palette",
                "defaultValue": "AtChartColorPalette.CATEGORICAL"
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
                    "text": "Pass the active theme value here to trigger a chart redraw when the theme changes.\nThe value itself is not used \u2014 any change to this prop causes the chart to reinitialise\nso colors and text are re-read from the current CSS variables."
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
                    "text": "Getter method for the chart's configuration object",
                    "tags": [{
                            "name": "returns",
                            "text": "Configuration of the chart"
                        }]
                }
            },
            "getLegendItems": {
                "complexType": {
                    "signature": "() => Promise<TruncatedLegendItem[]>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "TruncatedLegendItem": {
                            "location": "import",
                            "path": "../../utils/chart-legend",
                            "id": "src/utils/chart-legend.ts::TruncatedLegendItem",
                            "referenceLocation": "TruncatedLegendItem"
                        }
                    },
                    "return": "Promise<TruncatedLegendItem[]>"
                },
                "docs": {
                    "text": "Returns the legend items currently displayed by the chart.\nEach item reflects the truncated label text as rendered in the legend.",
                    "tags": [{
                            "name": "returns",
                            "text": "Array of legend items"
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
