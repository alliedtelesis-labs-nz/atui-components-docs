import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-H8lgnoYZ.js';
import { C as Chart, D as DoughnutController, A as ArcElement, p as plugin_legend, a as plugin_tooltip, i as index, g as getChartColors } from './chart-color-Dxo-bU-I.js';
import { A as AtChartColorPalette, r as readChartTextColors } from './chart-color-DTlEjff-.js';

const heightVariants = {
    xs: 'h-[70px]',
    sm: 'h-[160px]',
    md: 'h-[235px]',
    lg: 'h-[330px]',
    xl: 'h-[440px]',
    auto: 'h-full',
};
const AtChartBreakdown = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiLegendToggle = createEvent(this, "atuiLegendToggle", 7);
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
     * Options merged into the legend plugin config. ATUI defaults are preserved
     * unless explicitly overridden.
     */
    legend_options;
    /**
     * Options merged into the tooltip plugin config. ATUI defaults are preserved
     * unless explicitly overridden.
     */
    tooltip_options;
    /**
     * Pass the active theme value here to trigger a chart redraw when the theme
     * changes. The value itself is not used — any change to this prop causes the
     * chart to reinitialise so colors and text are re-read from CSS variables.
     */
    refresh_theme;
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
     * Optional value text to display alongside the breakdown chart
     */
    center_value;
    /**
     * Optional heading text to display alongside the breakdown chart
     */
    center_text;
    /**
     * Controls the thickness of the ring. Value between 0 and 100.
     * 0 means no cutout (solid circle), 100 means maximum cutout (thin ring).
     * Default is 70.
     */
    cutout = 70;
    /**
     * Emitted when a legend item is toggled. The event detail contains the
     * zero-based `index` of the toggled segment and `visible` — true if the
     * segment is now visible, false if it was hidden.
     */
    atuiLegendToggle;
    get el() { return getElement(this); }
    /** Tracks the canvas height set by Chart.js so the side-text div can be positioned next to it. */
    compactOffset = 0;
    /**
     * Prevents initChart() from being re-called when only compactOffset changed
     * (i.e. the compact plugin updated the side-text position but the chart
     * config itself doesn't need rebuilding).
     */
    skipInitOnUpdate = false;
    /** Reference to the side-text div (center_value / center_text), used to
     *  detect overlap with the legend. */
    sideTextEl;
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
     * Manually trigger a chart resize to fit container dimensions.
     * The optional containerHeight parameter is accepted for API compatibility
     * but is no longer used — the chart self-sizes via its ResizeObserver.
     */
    async resize(containerHeight) {
        if (this.chart) {
            this.chart.resize();
        }
    }
    /**
     * Toggles the visibility of the dataset segment at the given index,
     * mirroring a click on the corresponding legend item. Emits
     * `atuiLegendToggle` with the new visibility state.
     */
    async toggleLegendItem(index) {
        if (this.chart) {
            this.toggleItemVisibility(this.chart, index);
        }
    }
    toggleItemVisibility(chart, idx) {
        chart.toggleDataVisibility(idx);
        const anyVisible = chart.data.labels?.some((_, i) => chart.getDataVisibility(i));
        if (chart.options.plugins?.tooltip) {
            chart.options.plugins.tooltip.enabled = !!anyVisible;
        }
        chart.update();
        this.atuiLegendToggle.emit({
            index: idx,
            visible: chart.getDataVisibility(idx),
        });
    }
    /**
     * When only center_value changes (e.g. because a legend item was toggled and
     * Angular recomputed the visible sum), we don't need to tear down and recreate
     * the whole chart — that would reset Chart.js's internal visibility state.
     * Instead, skip the next componentDidUpdate re-init and just re-render the
     * canvas so the side-text div picks up the new value.
     */
    onCenterValueChanged() {
        if (this.chart) {
            this.skipInitOnUpdate = true;
            this.chart.render();
        }
    }
    /**
     * Custom plugin that positions the doughnut flush to the left edge of the
     * canvas and draws the legend manually starting immediately to its right.
     * This replaces the built-in legend (which just centers the donut in the
     * remaining space and can leave large gaps).
     *
     * Supports the same toggle-visibility interaction as the built-in legend:
     * clicking an item hides/shows the corresponding slice (with strikethrough
     * and dimming), and hovering shows a pointer cursor.
     */
    getLeftAlignPlugin() {
        const hitRegions = [];
        let clickHandler = null;
        let mouseMoveHandler = null;
        return {
            id: 'leftAlignDonut',
            afterInit: (chart) => {
                clickHandler = (e) => {
                    const rect = chart.canvas.getBoundingClientRect();
                    // chartArea coordinates are in CSS-pixel space (Chart.js applies
                    // ctx.scale(dpr, dpr) so drawing commands use CSS pixels).
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    // Ignore clicks inside the donut area.
                    if (x < chart.chartArea.right)
                        return;
                    for (const region of hitRegions) {
                        if (y >= region.top && y <= region.bottom) {
                            this.toggleItemVisibility(chart, region.index);
                            break;
                        }
                    }
                };
                mouseMoveHandler = (e) => {
                    const rect = chart.canvas.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    if (x < chart.chartArea.right) {
                        chart.canvas.style.cursor = '';
                        return;
                    }
                    const hit = hitRegions.some((region) => y >= region.top && y <= region.bottom);
                    chart.canvas.style.cursor = hit ? 'pointer' : '';
                };
                chart.canvas.addEventListener('click', clickHandler);
                chart.canvas.addEventListener('mousemove', mouseMoveHandler);
            },
            beforeDestroy: (chart) => {
                if (clickHandler) {
                    chart.canvas.removeEventListener('click', clickHandler);
                    clickHandler = null;
                }
                if (mouseMoveHandler) {
                    chart.canvas.removeEventListener('mousemove', mouseMoveHandler);
                    mouseMoveHandler = null;
                }
                chart.canvas.style.cursor = '';
            },
            afterLayout: (chart) => {
                const { chartArea } = chart;
                const availableHeight = chartArea.bottom - chartArea.top;
                // Shrink the chart area to a square on the left edge.
                // The DoughnutController reads chartArea to compute its center
                // and radius, so this pushes the donut hard-left.
                chartArea.right = chartArea.left + availableHeight;
            },
            afterDraw: (chart) => {
                const { chartArea, ctx, data } = chart;
                const legendY = chartArea.top;
                const lineHeight = 22;
                const swatchSize = 10;
                const swatchGap = 6;
                // Rebuild hit regions each draw so they stay in sync with layout.
                hitRegions.length = 0;
                ctx.save();
                const legendFontPx = this.legend_options?.labels?.font?.size ?? 12;
                const legendFontFamily = this.legend_options?.labels?.font?.family ??
                    'sans-serif';
                ctx.font = `${legendFontPx}px ${legendFontFamily}`;
                ctx.textAlign = 'left';
                ctx.textBaseline = 'middle';
                const widestLabel = Math.max(...(data.labels?.map((label) => ctx.measureText(String(label)).width) ?? [0]));
                const legendWidth = swatchSize + swatchGap + widestLabel;
                // The legend is drawn immediately to the right of the donut,
                // using whatever space remains on the canvas.
                const availableLegendWidth = Math.max(chart.width - chartArea.right, 0);
                const legendX = chartArea.right +
                    Math.max((availableLegendWidth - legendWidth) / 1.25, 0);
                const legendRight = legendX + legendWidth;
                // Hide entirely if the legend is too wide to fit.
                if (legendWidth > availableLegendWidth) {
                    hitRegions.length = 0;
                    ctx.restore();
                    return;
                }
                // Only hide the legend for overlapping the side-text div
                // (center_value / center_text) if it actually overlaps it,
                // measured against the div's real rendered position.
                if (this.sideTextEl) {
                    const canvasRect = chart.canvas.getBoundingClientRect();
                    const textRect = this.sideTextEl.getBoundingClientRect();
                    const textLeft = textRect.left - canvasRect.left;
                    const textRight = textRect.right - canvasRect.left;
                    const overlaps = legendX < textRight && legendRight > textLeft;
                    if (overlaps) {
                        hitRegions.length = 0;
                        ctx.restore();
                        return;
                    }
                }
                // Collapse items that don't fit vertically into "and N more",
                // matching the overflow behaviour of applyLegendOverflow.
                const availableLegendHeight = chartArea.bottom - chartArea.top;
                const totalItems = data.labels?.length ?? 0;
                const maxItems = Math.max(1, Math.floor(availableLegendHeight / lineHeight));
                const hasOverflow = totalItems > maxItems;
                const itemsToShow = hasOverflow ? maxItems - 1 : totalItems;
                const overflowCount = totalItems - itemsToShow;
                (data.labels ?? [])
                    .slice(0, itemsToShow)
                    .forEach((label, i) => {
                    const dataset = data.datasets[0];
                    const bgColors = dataset.backgroundColor;
                    const color = bgColors?.[i] ?? '#ccc';
                    const centerY = legendY + i * lineHeight + lineHeight / 2;
                    const isHidden = !chart.getDataVisibility(i);
                    // Register clickable area for this item.
                    hitRegions.push({
                        top: legendY + i * lineHeight,
                        bottom: legendY + (i + 1) * lineHeight,
                        index: i,
                    });
                    // Dim hidden items to match built-in legend behaviour.
                    ctx.globalAlpha = isHidden ? 0.4 : 1;
                    // Colour swatch
                    ctx.fillStyle = color;
                    ctx.fillRect(legendX, centerY - swatchSize / 2, swatchSize, swatchSize);
                    // Label text
                    const labelStr = label;
                    const textX = legendX + swatchSize + swatchGap;
                    ctx.fillStyle = readChartTextColors().label;
                    ctx.fillText(labelStr, textX, centerY);
                    // Strikethrough for hidden items.
                    if (isHidden) {
                        const textWidth = ctx.measureText(labelStr).width;
                        ctx.fillRect(textX, centerY, textWidth, 1);
                    }
                    ctx.globalAlpha = 1;
                });
                // "and N more" overflow indicator — no swatch, not clickable.
                if (hasOverflow) {
                    const overflowText = `and ${overflowCount} more`;
                    // Guard: the overflow text may be wider than any data label,
                    // so check its width against the available column before drawing.
                    const overflowTextWidth = swatchSize +
                        swatchGap +
                        ctx.measureText(overflowText).width;
                    if (overflowTextWidth > availableLegendWidth) {
                        hitRegions.length = 0;
                        ctx.restore();
                        return;
                    }
                    const overflowY = legendY + itemsToShow * lineHeight + lineHeight / 2;
                    ctx.globalAlpha = 1;
                    ctx.fillStyle = readChartTextColors().label;
                    ctx.fillText(overflowText, legendX + swatchSize + swatchGap, overflowY);
                }
                ctx.restore();
            },
        };
    }
    /**
     * Chart.js plugin that fires whenever Chart.js finishes resizing the canvas
     * (both on initial construction via its internal ResizeObserver, and on
     * explicit chart.resize() calls). Used to keep compactOffset in sync with
     * the actual canvas height so the side-text div is positioned correctly.
     */
    getCompactOffsetPlugin() {
        return {
            id: 'compactOffsetTracker',
            resize: (chart) => {
                const h = parseFloat(chart.canvas.style.height) ||
                    chart.canvas.getBoundingClientRect().height;
                if (h <= 0)
                    return;
                if (h !== this.compactOffset) {
                    this.skipInitOnUpdate = true;
                    this.compactOffset = h;
                }
            },
        };
    }
    /**
     * Plugin that hides the built-in Chart.js legend before layout whenever the
     * canvas is too narrow or too short to display it in full. Runs on every
     * layout cycle so it responds to resize automatically.
     */
    getLegendOverflowPlugin() {
        return {
            id: 'legendOverflowGuard',
            beforeLayout: (chart) => {
                // Skip when the left-align plugin is active (built-in legend
                // is already disabled in that mode).
                const isLeftAlignMode = this.legend_position === 'right';
                if (isLeftAlignMode) {
                    return;
                }
                const userDisplay = this.legend_options?.display ?? true;
                const labelCount = chart.data.labels?.length ?? 0;
                if (!userDisplay || labelCount === 0) {
                    return;
                }
                const legendFontPx = this.legend_options?.labels?.font?.size ?? 12;
                const legendFontFamily = this.legend_options?.labels?.font?.family ??
                    'sans-serif';
                const itemHeight = legendFontPx + 8;
                const swatchSize = 10;
                const swatchGap = 6;
                const ctx = chart.ctx;
                ctx.save();
                ctx.font = `${legendFontPx}px ${legendFontFamily}`;
                const widestLabel = Math.max(...(chart.data.labels?.map((l) => ctx.measureText(String(l)).width) ?? [0]));
                ctx.restore();
                // 16px accounts for internal padding Chart.js adds around legend items.
                const requiredWidth = swatchSize + swatchGap + widestLabel + 16;
                const requiredHeight = labelCount * itemHeight + 8;
                const pos = this.legend_position;
                let fits;
                if (pos === 'right' || pos === 'left') {
                    // Legend sits on the side — needs vertical room for all items
                    // and enough horizontal room beside the chart.
                    fits =
                        chart.height >= requiredHeight &&
                            chart.width >= requiredWidth + 60;
                }
                else {
                    // Legend sits on top/bottom — needs horizontal room for all
                    // items and enough total height to leave room for the chart.
                    fits =
                        chart.width >= requiredWidth &&
                            chart.height >= requiredHeight + 60;
                }
                chart.options.plugins.legend.display = fits;
            },
        };
    }
    initChart() {
        Chart.register(DoughnutController, ArcElement, plugin_legend, plugin_tooltip, index);
        const dpr = window.devicePixelRatio || 1;
        const colors = getChartColors(this.color_palette);
        const textColors = readChartTextColors();
        if (colors) {
            this.applyPresetPalette(colors);
        }
        // The breakdown chart always renders in its compact layout: the donut
        // is pushed to the left edge and, when the legend sits on the right,
        // a custom legend is drawn alongside it.
        const useLeftAlign = this.legend_position === 'right';
        const plugins = this.plugins ? [...this.plugins] : [];
        if (useLeftAlign) {
            plugins.push(this.getLeftAlignPlugin());
        }
        plugins.push(this.getCompactOffsetPlugin());
        plugins.push(this.getLegendOverflowPlugin());
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
                layout: { padding: 5 },
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
                        onHover: (event) => {
                            if (event.native) {
                                event.native.target.style.cursor = 'pointer';
                            }
                        },
                        ...(this.legend_options || {}),
                        labels: {
                            boxWidth: 10,
                            boxHeight: 10,
                            fontSize: 11,
                            useBorderRadius: true,
                            borderRadius: 2,
                            color: textColors.label,
                            generateLabels: (chart) => {
                                const original = Chart.overrides.doughnut.plugins.legend.labels.generateLabels(chart);
                                return original.map((label) => ({
                                    ...label,
                                    lineWidth: 0,
                                    fontColor: textColors.label,
                                }));
                            },
                            ...(this.legend_options?.labels || {}),
                        },
                        onClick: (_evt, legendItem, legend) => {
                            const idx = legendItem.index;
                            if (idx === undefined)
                                return;
                            this.toggleItemVisibility(legend.chart, idx);
                        },
                        position: this.legend_position,
                        fullSize: true,
                        // Built-in legend is replaced by the custom plugin when
                        // left-align mode is active.
                        display: useLeftAlign
                            ? false
                            : (this.legend_options?.display ?? true),
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
        // Chart.js leaves inline width/height styles on the canvas when it is
        // destroyed. Inline styles beat CSS classes, so clear them so the CSS
        // classes (managed by Stencil) determine the initial size for the new chart.
        this.canvasEl.style.width = '';
        this.canvasEl.style.height = '';
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
        if (this.skipInitOnUpdate) {
            this.skipInitOnUpdate = false;
            // Re-render so the custom legend picks up any DOM position changes
            // (e.g. sideTextEl shift after a compactOffset update) without
            // tearing down and rebuilding the Chart.js instance.
            this.chart?.render();
            return;
        }
        if (this.data && this.data.datasets.length) {
            this.initChart();
        }
    }
    /**
     * componentDidLoad will be run, but if the props haven't been passed to it yet,
     * it will throw an error. So we catch this, and wait for the props to be passed
     * to the component where it will run componentDidUpdate.
     */
    componentDidLoad() {
        if (this.data && this.data.datasets.length) {
            this.initChart();
        }
    }
    render() {
        const showSideText = this.center_value || this.center_text;
        return (h(Host, { key: '4208ea776a7455a05712380ff0c85cfd4abe0ca1', style: {
                height: '100%',
                width: '100%',
                minHeight: '65px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
            } }, h("canvas", { key: '304e2d39bddd96509cdbddf7f309365eb4325f6c', class: heightVariants[this.height], style: {
                aspectRatio: '1 / 1',
                flexShrink: '0',
            }, ref: (el) => {
                if (el) {
                    this.canvasEl = el;
                }
            } }), showSideText && (h("div", { key: '494d664892fa157f047e5282f44dd471f6311318', class: "flex flex-col justify-center ps-8", style: {
                position: 'absolute',
                left: `${this.compactOffset}px`,
            }, ref: (el) => {
                this.sideTextEl = el ?? undefined;
            } }, this.center_value && (h("span", { key: 'd95ebaeeadd4c59eab312d40e4266fffac764b1e', style: {
                fontSize: '3rem',
                fontWeight: '700',
                lineHeight: '1.1',
                color: 'var(--token-text-primary)',
            } }, this.center_value)), this.center_text && (h("span", { key: '930f965d182b81233b37643252a3d3368ac278f7', style: {
                fontSize: '1rem',
                color: 'var(--token-text-secondary)',
            } }, this.center_text))))));
    }
    static get watchers() { return {
        "center_value": [{
                "onCenterValueChanged": 0
            }]
    }; }
};

export { AtChartBreakdown as at_chart_breakdown };
