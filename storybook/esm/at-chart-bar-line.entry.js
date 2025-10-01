import { r as registerInstance, h, H as Host } from './index-B5bw8iR3.js';
import { C as ChartColorPalette, a as Chart, L as LinearScale, B as BarController, b as CategoryScale, c as BarElement, T as TimeScale, d as LineController, e as LineElement, P as PointElement, p as plugin_colors, f as plugin_legend, g as plugin_tooltip, i as index, h as getChartColors } from './chart-color--d9I1YXP.js';
import { T as TimeDateUtil } from './time-date.util-DLaek6ce.js';
import './moment-BMuAbjcg.js';

const heightVariants = {
    xs: 'h-[70px]',
    sm: 'h-[160px]',
    md: 'h-[235px]',
    lg: 'h-[330px]',
    xl: 'h-[440px]',
    auto: 'h-full',
};
const AtChartBarLine = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
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
    height = 'md';
    canvasEl;
    config;
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
    render() {
        return (h(Host, { key: 'bb7bf7c9e71cee7f92f6f24a38546d66f9004415', style: { height: '100%', width: '100%' } }, h("section", { key: '1609d4caf4e79a64b594019849adb10c1a2c7e02', class: `min-w-100 ${heightVariants[this.height]}` }, h("canvas", { key: '1f172edcb98e0af504039af00d96255dea8b0534', ref: (el) => (this.canvasEl = el) }))));
    }
};

export { AtChartBarLine as at_chart_bar_line };
//# sourceMappingURL=at-chart-bar-line.entry.js.map
