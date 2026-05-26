import { h, Host, } from "@stencil/core";
import { ArcElement, Chart, DoughnutController, Filler, Legend, Tooltip, } from "chart.js";
import { AtChartColorPalette, readChartTextColors, } from "../../types/chart-color";
import { getChartColors } from "../../utils/chart-color";
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
 * @description A breakdown chart component for visualizing proportional distribution of categories with customizable colors and legends. Built on Chart.js with responsive design and interactive hover effects.
 */
export class AtChartBreakdown {
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
     * Optional value text to display in the center of the breakdown chart
     */
    center_value;
    /**
     * Optional heading text to display in the center of the breakdown chart
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
    el;
    /** Tracks whether the rendered height is below the compact threshold. */
    isSmall = false;
    /** Tracks the canvas height set by Chart.js so the side-text div can be positioned next to it. */
    compactOffset = 0;
    SMALL_HEIGHT_THRESHOLD = 300;
    /**
     * Prevents initChart() from being re-called when only compactOffset changed
     * (i.e. the compact plugin updated the side-text position but the chart
     * config itself doesn't need rebuilding).
     */
    skipInitOnUpdate = false;
    /** Mirrors isSmall at the point initChart() last ran, so componentDidUpdate
     *  can tell whether isSmall actually changed versus just compactOffset. */
    lastIsSmall = false;
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
     * @param containerHeight Optional pixel height of the widget container (e.g. from at-dashboard
     * after a GridStack drag/resize). When provided, compact mode is evaluated against this height
     * rather than the component's own (potentially feedback-inflated) height.
     */
    async resize(containerHeight) {
        if (containerHeight !== undefined && containerHeight > 0) {
            const nowSmall = containerHeight < this.SMALL_HEIGHT_THRESHOLD;
            this.isSmall = nowSmall;
        }
        if (this.chart) {
            this.chart.resize();
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
     * canvas so the DrawCenterTextPlugin picks up the new value.
     */
    onCenterValueChanged() {
        if (this.chart) {
            this.skipInitOnUpdate = true;
            this.chart.render();
        }
    }
    getDrawCenterTextPlugin() {
        return {
            id: 'DrawCenterTextPlugin',
            afterDatasetDraw: (chart) => {
                // In compact mode the text is rendered as HTML outside the canvas
                if (this.isSmall) {
                    return;
                }
                const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
                const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
                const ctx = chart.ctx;
                if (!ctx) {
                    return;
                }
                ctx.restore();
                const height = chart.chartArea.bottom - chart.chartArea.top;
                const fontFamily = this.legend_options?.labels?.font?.family ??
                    'sans-serif';
                const textFontSize = (height / 200).toFixed(2) + `em ${fontFamily}`;
                const valueFontSize = (height / 100).toFixed(2) + `em ${fontFamily}`;
                ctx.fillStyle = readChartTextColors().title;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.font = '700 ' + valueFontSize;
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
                    if (this.center_text) {
                        addText(textFontSize, this.center_text, centerX, centerY, 'bottom');
                    }
                }
                else if (this.center_text) {
                    addText(textFontSize, this.center_text, centerX, centerY, 'middle');
                }
                ctx.save();
            },
        };
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
                const availableLegendWidth = Math.max(chart.width - chartArea.right, 0);
                const legendX = chartArea.right +
                    Math.max((availableLegendWidth - legendWidth) / 1.25, 0);
                // Hide the entire legend if it cannot be fully contained within
                // the available space to the right of the donut, or if it is
                // taller than the chart area.
                const requiredLegendHeight = (data.labels?.length ?? 0) * lineHeight;
                const availableLegendHeight = chartArea.bottom - chartArea.top;
                if (legendWidth > availableLegendWidth ||
                    requiredLegendHeight > availableLegendHeight) {
                    hitRegions.length = 0;
                    ctx.restore();
                    return;
                }
                // Hide the legend if it would overlap the side-text HTML div
                // (center_value / center_text). That div is absolutely positioned
                // at left: compactOffset px. When the canvas transitions into
                // compact mode the aspectRatio: 1/1 constraint may not yet be
                // applied, so the canvas can be temporarily wider than tall —
                // legendX + legendWidth then extends past compactOffset. Fall
                // back to chart.height when compactOffset hasn't been measured.
                if (this.center_value || this.center_text) {
                    const sideTextX = this.compactOffset > 0
                        ? this.compactOffset
                        : chart.height;
                    if (availableLegendWidth - sideTextX < legendWidth) {
                        ctx.restore();
                        return;
                    }
                }
                data.labels?.forEach((label, i) => {
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
                ctx.restore();
            },
        };
    }
    /**
     * Chart.js plugin that fires whenever Chart.js finishes resizing the canvas
     * (both on initial construction via its internal ResizeObserver, and on
     * explicit chart.resize() calls). Used to keep compactOffset in sync with
     * the actual canvas height so the side-text div is positioned correctly.
     * Also self-corrects isSmall if a premature measurement put the component
     * into compact mode when it should be large.
     */
    getCompactOffsetPlugin() {
        return {
            id: 'compactOffsetTracker',
            resize: (chart) => {
                const h = parseFloat(chart.canvas.style.height) ||
                    chart.canvas.getBoundingClientRect().height;
                if (h <= 0)
                    return;
                // Self-correct if measurement was premature and height is now above threshold.
                if (h >= this.SMALL_HEIGHT_THRESHOLD) {
                    this.compactOffset = 0;
                    this.isSmall = false;
                    return;
                }
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
                const isLeftAlignMode = this.legend_position === 'right' && this.isSmall;
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
        Chart.register(DoughnutController, ArcElement, Legend, Tooltip, Filler);
        const dpr = window.devicePixelRatio || 1;
        const colors = getChartColors(this.color_palette);
        const textColors = readChartTextColors();
        if (colors) {
            this.applyPresetPalette(colors);
        }
        // Only use the custom left-align layout in compact mode when the
        // legend sits on the right. Larger layouts can keep the built-in
        // legend behavior.
        const useLeftAlign = this.legend_position === 'right' && this.isSmall;
        const plugins = this.plugins ? [...this.plugins] : [];
        if (this.center_text || this.center_value) {
            plugins.push(this.getDrawCenterTextPlugin());
        }
        if (useLeftAlign) {
            plugins.push(this.getLeftAlignPlugin());
        }
        if (this.isSmall) {
            plugins.push(this.getCompactOffsetPlugin());
        }
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
                layout: { padding: this.isSmall ? 5 : 16 },
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
        // destroyed. Inline styles beat CSS classes, so if the canvas previously
        // had e.g. height: 89px from compact mode, that would override the
        // large-mode CSS classes on the next render. Clear them so the CSS
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
        const isSmallChanged = this.lastIsSmall !== this.isSmall;
        if (this.skipInitOnUpdate && !isSmallChanged) {
            this.skipInitOnUpdate = false;
            return;
        }
        this.skipInitOnUpdate = false;
        this.lastIsSmall = this.isSmall;
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
        const showSideText = this.isSmall && (this.center_value || this.center_text);
        return (h(Host, { key: 'fb264d9243d6457979d882449e6e42967c70cfd3', style: {
                height: '100%',
                width: '100%',
                minHeight: '65px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'top',
            } }, h("canvas", { key: '7c29c4bdbfd13f7a552890e81f64eb83145071f4', class: this.isSmall
                ? 'h-full'
                : `w-full ${heightVariants[this.height ?? 'auto']}`, style: this.isSmall
                ? {
                    aspectRatio: '1 / 1',
                    flexShrink: '0',
                }
                : {}, ref: (el) => {
                if (el) {
                    this.canvasEl = el;
                }
            } }), showSideText && (h("div", { key: 'b19be63e9b1ffba95baf21062026fd752e4da861', class: "flex flex-col justify-center ps-8", style: {
                position: 'absolute',
                left: `${this.compactOffset}px`,
            } }, this.center_value && (h("span", { key: '96886593597610410744e1aa89f92d3ce8bcc68c', style: {
                fontSize: '3rem',
                fontWeight: '700',
                lineHeight: '1.1',
                color: 'var(--token-text-primary)',
            } }, this.center_value)), this.center_text && (h("span", { key: 'aecf7e12539d0725ac478ae4cea2eaee92ff2bd9', style: {
                fontSize: '1rem',
                color: 'var(--token-text-secondary)',
            } }, this.center_text))))));
    }
    static get is() { return "at-chart-breakdown"; }
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
                            "id": "../node_modules/chart.js/dist/types.d.ts::ChartDataset",
                            "referenceLocation": "ChartDataset"
                        }
                    }
                },
                "required": true,
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
                    "original": "AtChartHeight",
                    "resolved": "\"auto\" | \"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\"",
                    "references": {
                        "AtChartHeight": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-chart-breakdown/at-chart-breakdown.tsx",
                            "id": "src/components/at-chart-breakdown/at-chart-breakdown.tsx::AtChartHeight"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Height of the chart"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "height",
                "defaultValue": "'auto'"
            },
            "legend_position": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AtLegendPosition",
                    "resolved": "\"bottom\" | \"left\" | \"right\" | \"top\"",
                    "references": {
                        "AtLegendPosition": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-chart-breakdown/at-chart-breakdown.tsx",
                            "id": "src/components/at-chart-breakdown/at-chart-breakdown.tsx::AtLegendPosition"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Position of the legend"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "legend_position",
                "defaultValue": "'right'"
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
                    "text": "Options merged into the legend plugin config. ATUI defaults are preserved\nunless explicitly overridden."
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
                    "text": "Options merged into the tooltip plugin config. ATUI defaults are preserved\nunless explicitly overridden."
                },
                "getter": false,
                "setter": false
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
                    "text": "Pass the active theme value here to trigger a chart redraw when the theme\nchanges. The value itself is not used \u2014 any change to this prop causes the\nchart to reinitialise so colors and text are re-read from CSS variables."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "refresh_theme"
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
                            "id": "../node_modules/chart.js/dist/types.d.ts::Plugin",
                            "referenceLocation": "Plugin"
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
                    "text": "Optional value text to display in the center of the breakdown chart"
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
                    "text": "Optional heading text to display in the center of the breakdown chart"
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
                    "text": "Controls the thickness of the ring. Value between 0 and 100.\n0 means no cutout (solid circle), 100 means maximum cutout (thin ring).\nDefault is 70."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "cutout",
                "defaultValue": "70"
            }
        };
    }
    static get states() {
        return {
            "isSmall": {},
            "compactOffset": {}
        };
    }
    static get events() {
        return [{
                "method": "atuiLegendToggle",
                "name": "atuiLegendToggle",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when a legend item is toggled. The event detail contains the\nzero-based `index` of the toggled segment and `visible` \u2014 true if the\nsegment is now visible, false if it was hidden."
                },
                "complexType": {
                    "original": "{\n        index: number;\n        visible: boolean;\n    }",
                    "resolved": "{ index: number; visible: boolean; }",
                    "references": {}
                }
            }];
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
            "resize": {
                "complexType": {
                    "signature": "(containerHeight?: number) => Promise<void>",
                    "parameters": [{
                            "name": "containerHeight",
                            "type": "number",
                            "docs": "Optional pixel height of the widget container (e.g. from at-dashboard\nafter a GridStack drag/resize). When provided, compact mode is evaluated against this height\nrather than the component's own (potentially feedback-inflated) height."
                        }],
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
                    "tags": [{
                            "name": "param",
                            "text": "containerHeight Optional pixel height of the widget container (e.g. from at-dashboard\nafter a GridStack drag/resize). When provided, compact mode is evaluated against this height\nrather than the component's own (potentially feedback-inflated) height."
                        }]
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "center_value",
                "methodName": "onCenterValueChanged"
            }];
    }
}
