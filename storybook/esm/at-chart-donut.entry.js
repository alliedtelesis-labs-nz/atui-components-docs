import { r as registerInstance, h, H as Host } from './index-C3PSGxNR.js';
import { C as ChartColorPalette, a as Chart, D as DoughnutController, A as ArcElement, f as plugin_legend, g as plugin_tooltip, i as index, h as getChartColors } from './chart-color--d9I1YXP.js';
import './moment-BMuAbjcg.js';

const TOKEN_TEXT_DARK = '#0f172a';
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
        /**
         * Height of the chart
         */
        this.height = 'md';
        /**
         * Additional options for formatting the legend
         */
        this.legend_format = {
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
        this.tooltip_options = {
            mode: 'index',
            intersect: false,
            position: 'nearest',
        };
        /**
         * Colour palette to use for the chart. Preset options are provided ChartColourPalette:
         * 'categorical' : For charts with data that have distinct labels and no natural order
         * 'sequential' : For charts with data that is numeric or is naturally ordered.
         * 'alert' : For charts that relate to health state. Note that data requires a specific order.
         * 'custom' : Use colors defined in data. If none are provided, the ChartJS default will be used.
         */
        this.color_palette = ChartColorPalette.CATEGORICAL;
        /**
         * Controls the thickness of the donut ring. Value between 0 and 100.
         * 0 means no cutout (solid circle), 100 means maximum cutout (thin ring).
         * Default is 70.
         */
        this.cutout = 70;
        this.defaultPieTooltipOptions = {
            mode: 'index',
            intersect: true,
            position: 'nearest',
            animation: {
                duration: 150,
            },
        };
    }
    /**
     * Getter method for the chart's configuration object
     * @returns Configuration of the chart
     */
    async getConfig() {
        return this.config;
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
        Chart.register(DoughnutController, ArcElement, plugin_legend, plugin_tooltip, index);
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
            data: Object.assign(Object.assign({}, this.data), { datasets: this.data.datasets.map((dataset) => (Object.assign(Object.assign({}, dataset), { cutout: `${this.cutout}%` }))) }),
            options: Object.assign(Object.assign({ animation: this.animations }, this.options), { maintainAspectRatio: true, aspectRatio: 1, layout: {
                    padding: 16,
                }, plugins: {
                    legend: this.legend_format,
                    tooltip: this.tooltip_options || this.defaultPieTooltipOptions,
                } }),
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
            return Object.assign(Object.assign({}, dataset), { backgroundColor: color, hoverBackgroundColor: color, borderColor: color, hoverBorderColor: color });
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
};

export { AtChartDonut as at_chart_donut };
//# sourceMappingURL=at-chart-donut.entry.js.map
