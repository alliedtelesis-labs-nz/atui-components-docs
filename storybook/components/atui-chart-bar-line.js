import { p as proxyCustomElement, H, h, c as Host } from './p-CIJrXZgf.js';
import { C as ChartColorPalette, a as Chart, L as LinearScale, B as BarController, b as CategoryScale, c as BarElement, T as TimeScale, d as LineController, e as LineElement, P as PointElement, p as plugin_colors, f as plugin_legend, g as plugin_tooltip, i as index, h as getChartColors } from './p-Dpe9AFEu.js';
import { T as TimeDateUtil } from './p-BP6gV1HR.js';

const heightVariants = {
    xs: 'h-[70px]',
    sm: 'h-[160px]',
    md: 'h-[235px]',
    lg: 'h-[330px]',
    xl: 'h-[440px]',
    auto: 'h-full',
};
const AtuiChartBarLine$1 = /*@__PURE__*/ proxyCustomElement(class AtuiChartBarLine extends H {
    constructor() {
        super();
        this.__registerHost();
        /**
         * Height of the chart.
         */
        this.height = 'md';
        /**
         * Colour palette to use for the chart. Preset options are provided ChartColourPalette:
         * 'categorical' : For charts with data that have distinct labels and no natural order
         * 'sequential' : For charts with data that is numeric or is naturally ordered.
         * 'alert' : For charts that relate to health state. Note that data requires a specific order.
         * 'custom' : Use colors defined in data. If none are provided, the ChartJS default will be used.
         */
        this.color_palette = ChartColorPalette.CATEGORICAL;
        this.formatThresholds = () => {
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
    }
    /**
     * Getter method for the chart's configuration object
     * @returns Configuration of the chart
     */
    async getConfig() {
        return this.config;
    }
    initChart() {
        Chart.register(LinearScale, BarController, CategoryScale, BarElement, TimeScale, LineController, LineElement, PointElement, plugin_colors, plugin_legend, plugin_tooltip, index);
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
            options: Object.assign(Object.assign({ devicePixelRatio: 2, maintainAspectRatio: false, scales: {
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
                } }, this.options), { plugins: {
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
                }, clip: false, elements: {
                    line: {
                        tension: 0,
                        borderWidth: 2,
                    },
                } }),
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
            return Object.assign(Object.assign({}, dataset), this.point_styles);
        });
    }
    applyPresetPalette(colors) {
        if (this.color_palette === ChartColorPalette.CUSTOM) {
            return;
        }
        this.data.datasets = this.data.datasets.map((dataset, index) => {
            const color = colors[index % colors.length];
            return Object.assign(Object.assign({}, dataset), { backgroundColor: color, borderColor: color });
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
    render() {
        return (h(Host, { key: 'fabb29f2822c45e1530ceacbfc83d881a947f72b', style: { height: '100%', width: '100%' } }, h("section", { key: '21787abd38db8cc618b5c5c0f292de6597b3ce16', class: `min-w-100 ${heightVariants[this.height]}` }, h("canvas", { key: '33d8164c93fd969197f88a14818548f68514e612', ref: (el) => (this.canvasEl = el) }))));
    }
}, [256, "atui-chart-bar-line", {
        "type": [1],
        "data": [1040],
        "x_axis_format": [16],
        "y_axis_format": [16],
        "options": [16],
        "tooltip_options": [16],
        "legend_format": [16],
        "thresholds": [16],
        "point_styles": [16],
        "time_range": [8],
        "height": [1],
        "color_palette": [1],
        "getConfig": [64]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-chart-bar-line"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-chart-bar-line":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiChartBarLine$1);
            }
            break;
    } });
}

const AtuiChartBarLine = AtuiChartBarLine$1;
const defineCustomElement = defineCustomElement$1;

export { AtuiChartBarLine, defineCustomElement };
//# sourceMappingURL=atui-chart-bar-line.js.map

//# sourceMappingURL=atui-chart-bar-line.js.map