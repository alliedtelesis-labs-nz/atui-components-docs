'use strict';

var index = require('./index-BAt2i-T2.js');
var chartColor = require('./chart-color-G_dDk1sq.js');
var timeDate_util = require('./time-date.util-CvNz3hWU.js');
require('./moment-w2EYXu2o.js');
require('./moment-DRlRqWvO.js');

const heightVariants = {
    xs: 'h-[70px]',
    sm: 'h-[160px]',
    md: 'h-[235px]',
    lg: 'h-[330px]',
    xl: 'h-[440px]',
    auto: 'h-full',
};
const AtuiChartBarLine = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        this.color_palette = chartColor.ChartColorPalette.CATEGORICAL;
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
        chartColor.Chart.register(chartColor.LinearScale, chartColor.BarController, chartColor.CategoryScale, chartColor.BarElement, chartColor.TimeScale, chartColor.LineController, chartColor.LineElement, chartColor.PointElement, chartColor.plugin_colors, chartColor.plugin_legend, chartColor.plugin_tooltip, chartColor.index);
        const colors = chartColor.getChartColors(this.color_palette);
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
        new chartColor.Chart(this.canvasEl, this.config);
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
        if (this.color_palette === chartColor.ChartColorPalette.CUSTOM) {
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
            ? timeDate_util.TimeDateUtil.getAbsoluteDateRange(timeRange.custom)
            : null;
        const { startDate, endDate } = timeDate_util.TimeDateUtil.getDateRange(custom, timeWithUnit, null);
        return { min: startDate.toString(), max: endDate.toString() };
    }
    render() {
        return (index.h(index.Host, { key: '898778662cb387a3847e4bb65816d7c44a5b708e', style: { height: '100%', width: '100%' } }, index.h("section", { key: 'bada335acbdea9975e4f1b5a7f977ea64b8282e9', class: `min-w-100 ${heightVariants[this.height]}` }, index.h("canvas", { key: '2efe1b250a941f2cf17101815f8a69c47cba33e9', ref: (el) => (this.canvasEl = el) }))));
    }
};

exports.atui_chart_bar_line = AtuiChartBarLine;
//# sourceMappingURL=atui-chart-bar-line.entry.cjs.js.map

//# sourceMappingURL=atui-chart-bar-line.cjs.entry.js.map