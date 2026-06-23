'use strict';

var index = require('./index-BYFFxEOi.js');
var chartColor$1 = require('./chart-color-CxOzTTyI.js');
var chartColor = require('./chart-color-ChPOocG1.js');
var chartLegend = require('./chart-legend-BoaMJaDS.js');

const heightVariants = {
    xs: 'h-[70px]',
    sm: 'h-[160px]',
    md: 'h-[235px]',
    lg: 'h-[330px]',
    xl: 'h-[440px]',
    auto: 'h-full',
};
const AtChartDonut = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
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
    height = 'auto';
    /**
     * Position of the legend
     */
    legend_position = 'right';
    /**
     * Options merged into the legend plugin config. ATUI defaults are preserved unless
     * explicitly overridden.
     */
    legend_options;
    /**
     * Options merged into the tooltip plugin config. ATUI defaults are preserved unless
     * explicitly overridden.
     */
    tooltip_options;
    /**
     * Additional plugin options
     */
    plugins;
    /**
     * Colour palette to use for the chart. Preset options are provided ChartColourPalette:
     * 'categorical' : For charts with data that have distinct labels and no natural order
     * 'sequential' : For charts with data that is numeric or is naturally ordered.
     * 'alert' : For charts that relate to health state. Note that data requires a specific order.
     * 'custom' : Use colors defined in data. If none are provided, the ChartJS default will be used.
     */
    color_palette = chartColor.AtChartColorPalette.CATEGORICAL;
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
    /**
     * Pass the active theme value here to trigger a chart redraw when the theme changes.
     * The value itself is not used — any change to this prop causes the chart to reinitialise
     * so colors and text are re-read from the current CSS variables.
     */
    refresh_theme;
    canvasEl;
    legendTooltipEl = null;
    config;
    chart;
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
    /**
     * Manually trigger a chart resize to fit container dimensions
     */
    async resize() {
        if (this.chart) {
            this.chart.resize();
        }
    }
    generateLegendLabels(chart, textColor, customGenerateLabels) {
        const isSideLegend = this.legend_position === 'left' || this.legend_position === 'right';
        return chartLegend.generateLegendLabels(chart, textColor, isSideLegend, (c) => chartColor$1.Chart.overrides.doughnut.plugins.legend.labels.generateLabels(c), customGenerateLabels);
    }
    setLegendTooltip(visible, text, event) {
        chartLegend.setLegendTooltip(this.legendTooltipEl, visible, text, event);
    }
    ensureTooltipEl() {
        this.legendTooltipEl = chartLegend.ensureLegendTooltipEl(this.canvasEl, this.legendTooltipEl);
    }
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
                const textFontSize = (height / 200).toFixed(2) + 'em sans-serif';
                const valueFontSize = (height / 140).toFixed(2) + 'em sans-serif';
                ctx.fillStyle = chartColor.readChartTextColors().title;
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
        this.setLegendTooltip(false);
        chartColor$1.Chart.register(chartColor$1.DoughnutController, chartColor$1.ArcElement, chartColor$1.plugin_legend, chartColor$1.plugin_tooltip, chartColor$1.index);
        const dpr = window.devicePixelRatio || 1;
        const colors = chartColor$1.getChartColors(this.color_palette);
        const textColors = chartColor.readChartTextColors();
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
                devicePixelRatio: dpr,
                maintainAspectRatio: false,
                aspectRatio: 1,
                layout: { padding: 16 },
                interaction: { mode: 'nearest', intersect: true },
                datasets: {
                    doughnut: {
                        borderWidth: 0,
                        hoverBorderWidth: 0,
                        hoverOffset: 4,
                    },
                },
                plugins: {
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
                        onClick: (_evt, legendItem, legend) => {
                            const idx = legendItem.index;
                            if (legendItem
                                .isOverflow ||
                                idx === undefined) {
                                return;
                            }
                            const chart = legend.chart;
                            chart.toggleDataVisibility(idx);
                            const anyVisible = chart.data.labels?.some((_, i) => chart.getDataVisibility(i));
                            if (chart.options.plugins?.tooltip) {
                                chart.options.plugins.tooltip.enabled =
                                    !!anyVisible;
                            }
                            chart.update();
                        },
                        display: true,
                        ...(this.legend_options || {}),
                        labels: {
                            boxWidth: 10,
                            boxHeight: 10,
                            fontSize: 11,
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
                        position: this.legend_position,
                        fullSize: true,
                    },
                    tooltip: {
                        mode: 'nearest',
                        intersect: true,
                        position: 'nearest',
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
                            labelColor: (ctx) => {
                                const bg = ctx.dataset.backgroundColor;
                                const color = Array.isArray(bg)
                                    ? bg[ctx.dataIndex]
                                    : bg;
                                return {
                                    borderColor: 'transparent',
                                    backgroundColor: color,
                                    borderWidth: 0,
                                    borderRadius: 2,
                                };
                            },
                            ...(this.tooltip_options?.callbacks || {}),
                        },
                        filter: (ctx) => ctx.chart.getDataVisibility(ctx.dataIndex),
                        enabled: true,
                    },
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
    applyPresetPalette(colors) {
        if (this.color_palette === chartColor.AtChartColorPalette.CUSTOM) {
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
    disconnectedCallback() {
        this.legendTooltipEl?.remove();
        this.legendTooltipEl = null;
        this.chart?.destroy();
        this.chart = null;
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
    render() {
        return (index.h(index.Host, { key: '6dde414179c8b693a0489ac3aff75951753fedee', style: { height: '100%', width: '100%' } }, index.h("canvas", { key: '13f658e20ecef4cd0711d329d10752e153846d57', class: `w-full ${heightVariants[this.height]}`, ref: (el) => (this.canvasEl = el) })));
    }
};

exports.at_chart_donut = AtChartDonut;
