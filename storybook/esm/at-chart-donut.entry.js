import { r as registerInstance, h, H as Host } from './index-BEGRcYEc.js';
import { C as Chart, D as DoughnutController, A as ArcElement, p as plugin_legend, a as plugin_tooltip, i as index, g as getChartColors } from './chart-color-Dxo-bU-I.js';
import { A as AtChartColorPalette, r as readChartTextColors } from './chart-color-DTlEjff-.js';
import { g as generateLegendLabels, s as setLegendTooltip, e as ensureLegendTooltipEl } from './chart-legend-B_h8W2l2.js';

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
    color_palette = AtChartColorPalette.CATEGORICAL;
    /**
     * Optional value text to display in the center of the donut chart.
     * If set to 'auto', the value will be the sum of the currently visible
     * dataset values, and will update automatically when a legend item is
     * toggled.
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
    /** Computed sum of currently-visible values when center_value is 'auto'. */
    computedCenterValue = '';
    /**
     * Prevents componentDidUpdate from re-initialising the chart when only
     * computedCenterValue changed (e.g. after a legend item was toggled) —
     * a full reinit would reset Chart.js's internal visibility state.
     */
    skipInitOnUpdate = false;
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
        return generateLegendLabels(chart, textColor, isSideLegend, (c) => Chart.overrides.doughnut.plugins.legend.labels.generateLabels(c), customGenerateLabels);
    }
    setLegendTooltip(visible, text, event) {
        setLegendTooltip(this.legendTooltipEl, visible, text, event);
    }
    ensureTooltipEl() {
        this.legendTooltipEl = ensureLegendTooltipEl(this.canvasEl, this.legendTooltipEl);
    }
    /**
     * Returns the value currently displayed in the center of the donut.
     * When center_value is 'auto' this is the computed sum of currently
     * visible dataset values; otherwise it mirrors the center_value prop.
     */
    async getCenterValue() {
        return this.center_value === 'auto'
            ? this.computedCenterValue
            : (this.center_value ?? '');
    }
    /**
     * Toggles the visibility of the dataset segment at the given index,
     * mirroring a click on the corresponding legend item.
     */
    async toggleLegendItem(index) {
        this.toggleDatasetVisibility(index);
    }
    /**
     * Returns a formatted sum of currently-visible dataset values.
     * Used when center_value is 'auto'.
     */
    computeAutoSum() {
        if (!this.data?.datasets?.[0]?.data || !this.chart)
            return '';
        const chart = this.chart;
        const values = this.data.datasets[0].data;
        const sum = values.reduce((acc, val, i) => acc +
            (chart.getDataVisibility(i)
                ? Number.isFinite(val)
                    ? val
                    : 0
                : 0), 0);
        return Number.isInteger(sum) ? String(sum) : sum.toFixed(2);
    }
    /**
     * Toggles the visibility of the dataset segment at the given index,
     * recomputing the 'auto' center value if needed. Shared by the legend's
     * onClick handler and the toggleLegendItem() method.
     */
    toggleDatasetVisibility(idx) {
        if (!this.chart)
            return;
        const chart = this.chart;
        chart.toggleDataVisibility(idx);
        const anyVisible = chart.data.labels?.some((_, i) => chart.getDataVisibility(i));
        if (chart.options.plugins?.tooltip) {
            chart.options.plugins.tooltip.enabled = !!anyVisible;
        }
        chart.update();
        if (this.center_value === 'auto') {
            const newSum = this.computeAutoSum();
            if (newSum !== this.computedCenterValue) {
                // Only set the flag when the value genuinely changes so Stencil
                // triggers an update and componentDidUpdate() can clear it.
                // If the sum is unchanged (e.g. toggling a zero-valued slice),
                // no state update fires and the flag would otherwise get stuck.
                this.skipInitOnUpdate = true;
                this.computedCenterValue = newSum;
            }
            chart.render();
        }
    }
    getDrawCenterTextPlugin() {
        return {
            id: 'DrawCenterTextPlugin',
            afterDatasetDraw: (chart) => {
                const ctx = chart.ctx;
                if (!ctx) {
                    return;
                }
                const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
                const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
                const height = chart.chartArea.bottom - chart.chartArea.top;
                ctx.restore();
                // Radius of the donut hole — the real space the text must fit in.
                const arc = chart.getDatasetMeta(0)?.data?.[0];
                const innerRadius = arc?.innerRadius ?? height / 2;
                // Usable width inside the hole, leaving a margin off the ring.
                const maxWidth = innerRadius * 2 * 0.82;
                const setFont = (px) => {
                    const baseFontPx = parseFloat(getComputedStyle(chart.canvas).fontSize) ||
                        16;
                    return (ctx.font = `500 ${(px / baseFontPx).toFixed(2)}em sans-serif`);
                };
                // Largest size up to `base` that keeps `text` within maxWidth.
                const fit = (text, base) => {
                    setFont(base);
                    const w = ctx.measureText(text).width;
                    return w > maxWidth && w > 0 ? base * (maxWidth / w) : base;
                };
                // Label lines: keep as one line, else split words across two
                // balanced lines, else shrink a single long word to fit.
                const wrapLabel = (text, base) => {
                    setFont(base);
                    const words = text.trim().split(/\s+/);
                    if (ctx.measureText(text).width <= maxWidth) {
                        return [{ text, px: base }];
                    }
                    if (words.length < 2) {
                        return [{ text, px: fit(text, base) }];
                    }
                    const mid = Math.ceil(words.length / 2);
                    const l1 = words.slice(0, mid).join(' ');
                    const l2 = words.slice(mid).join(' ');
                    const px = Math.min(fit(l1, base), fit(l2, base));
                    return [
                        { text: l1, px },
                        { text: l2, px },
                    ];
                };
                // Scale with height, but cap to the hole so it can't overflow.
                const valuePx = Math.min((height / 140) * 16, innerRadius * 0.6);
                const labelPx = Math.min((height / 200) * 16, innerRadius * 0.36);
                const value = this.center_value === 'auto'
                    ? this.computedCenterValue
                    : this.center_value;
                // Build the lines to render: value first, then the label.
                const lines = [
                    ...(value
                        ? [{ text: value, px: fit(value, valuePx) }]
                        : []),
                    ...(this.center_text
                        ? wrapLabel(this.center_text, labelPx)
                        : []),
                ];
                // Stack the lines, vertically centered on the donut center.
                ctx.fillStyle = readChartTextColors().title;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                const gap = (lines[0]?.px ?? 0) * 0.2;
                const totalHeight = lines.reduce((sum, line) => sum + line.px, 0) +
                    gap * Math.max(0, lines.length - 1);
                let y = centerY - totalHeight / 2;
                for (const line of lines) {
                    y += line.px / 2;
                    setFont(line.px);
                    ctx.fillText(line.text, centerX, y);
                    y += line.px / 2 + gap;
                }
                ctx.save();
            },
        };
    }
    initChart() {
        this.setLegendTooltip(false);
        Chart.register(DoughnutController, ArcElement, plugin_legend, plugin_tooltip, index);
        const dpr = window.devicePixelRatio || 1;
        const colors = getChartColors(this.color_palette);
        const textColors = readChartTextColors();
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
                        onClick: (_evt, legendItem) => {
                            const idx = legendItem.index;
                            if (legendItem
                                .isOverflow ||
                                idx === undefined) {
                                return;
                            }
                            this.toggleDatasetVisibility(idx);
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
        this.chart = new Chart(this.canvasEl, this.config);
        if (this.center_value === 'auto') {
            const newSum = this.computeAutoSum();
            if (newSum !== this.computedCenterValue) {
                this.skipInitOnUpdate = true;
                this.computedCenterValue = newSum;
            }
            this.chart.render();
        }
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
        if (this.skipInitOnUpdate) {
            this.skipInitOnUpdate = false;
            return;
        }
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
        return (h(Host, { key: '0e386af68b378a4e6388fed8e22a0b0c84aa85d9', style: { height: '100%', width: '100%' } }, h("canvas", { key: '5e8fafc5302487c59ffd123e02c1def12e2d058f', class: `w-full ${heightVariants[this.height]}`, ref: (el) => (this.canvasEl = el) })));
    }
};

export { AtChartDonut as at_chart_donut };
