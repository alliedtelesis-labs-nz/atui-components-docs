import { r as registerInstance, h, H as Host } from './index-BAAX2Der.js';
import { C as Chart, D as DoughnutController, A as ArcElement, p as plugin_legend, a as plugin_tooltip, i as index, g as getChartColors } from './chart-color-B8WQ6sRw.js';
import { A as AtChartColorPalette } from './chart-color-Ckr-udZ5.js';

const TOKEN_TEXT_FOREGROUND = '#0f172a';
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
        registerInstance(this, hostRef);
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
    legend_position = 'top';
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
        onClick: (_evt, legendItem, legend) => {
            const chart = legend.chart;
            const idx = legendItem.index;
            chart.toggleDataVisibility(idx);
            const anyVisible = chart.data.labels?.some((_, i) => chart.getDataVisibility(i));
            if (chart.options.plugins?.tooltip) {
                chart.options.plugins.tooltip.enabled = !!anyVisible;
            }
            chart.update();
        },
        display: true,
    };
    /**
     * Additional options for the tooltip
     */
    tooltip_options = {
        mode: 'nearest',
        intersect: true,
        position: 'nearest',
    };
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
    color_palette = AtChartColorPalette.CATEGORICAL;
    /**
     * Optional value text to display in the center of the donut chart
     */
    center_value;
    /**
     * Optional heading text to display in the center of the donut chart
     */
    center_text;
    /**
     * Color of the center text. Defaults to TOKEN_TEXT_FOREGROUND (#0f172a).
     * Override this on dark themes where the default text would be invisible.
     */
    center_text_color = TOKEN_TEXT_FOREGROUND;
    /**
     * Controls the thickness of the donut ring. Value between 0 and 100.
     * 0 means no cutout (solid circle), 100 means maximum cutout (thin ring).
     * Default is 70.
     */
    cutout = 70;
    canvasEl;
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
     * Manually trigger a chart resize to fit container dimensions
     */
    async resize() {
        if (this.chart) {
            this.chart.resize();
        }
    }
    defaultPieTooltipOptions = {
        mode: 'nearest',
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
                const textFontSize = (height / 200).toFixed(2) + 'em sans-serif';
                const valueFontSize = (height / 140).toFixed(2) + 'em sans-serif';
                ctx.fillStyle = this.center_text_color;
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
        Chart.register(DoughnutController, ArcElement, plugin_legend, plugin_tooltip, index);
        const dpr = window.devicePixelRatio || 1;
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
                devicePixelRatio: dpr,
                maintainAspectRatio: false,
                aspectRatio: 1,
                layout: { padding: 16 },
                interaction: { mode: 'nearest', intersect: true },
                plugins: {
                    legend: {
                        ...(this.legend_format || {}),
                        position: this.legend_position,
                        fullSize: true,
                    },
                    tooltip: {
                        ...(this.tooltip_options ||
                            this.defaultPieTooltipOptions),
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
        this.chart = new Chart(this.canvasEl, this.config);
    }
    applyPresetPalette(colors) {
        if (this.color_palette === AtChartColorPalette.CUSTOM) {
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
        return (h(Host, { key: '87538fb6829f005cde97f58b819821ab547ea907', style: { height: '100%', width: '100%' } }, h("canvas", { key: '82509d0fb1d84901c9bbe5498468c9e7bf498b4c', class: `w-full ${heightVariants[this.height]}`, ref: (el) => (this.canvasEl = el) })));
    }
};

export { AtChartDonut as at_chart_donut };
