import { h, Host } from "@stencil/core";
import { ArcElement, Chart, DoughnutController, Filler, Legend, Tooltip, } from "chart.js";
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
 * @description A donut chart component for visualizing proportional data with customizable colors and legends. Built on Chart.js with responsive design and interactive hover effects.
 */
export class AtChartDonut {
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
        Chart.register(DoughnutController, ArcElement, Legend, Tooltip, Filler);
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
    static get is() { return "at-chart-donut"; }
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
                "required": false,
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
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-chart-donut/at-chart-donut.tsx",
                            "id": "src/components/at-chart-donut/at-chart-donut.tsx::AtChartHeight"
                        }
                    }
                },
                "required": false,
                "optional": true,
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
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-chart-donut/at-chart-donut.tsx",
                            "id": "src/components/at-chart-donut/at-chart-donut.tsx::AtLegendPosition"
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
                    "text": "Options merged into the legend plugin config. ATUI defaults are preserved unless\nexplicitly overridden."
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
                    "text": "Optional value text to display in the center of the donut chart.\nIf set to 'auto', the value will be the sum of the currently visible\ndataset values, and will update automatically when a legend item is\ntoggled."
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
                    "text": "Optional heading text to display in the center of the donut chart"
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
                    "text": "Controls the thickness of the donut ring. Value between 0 and 100.\n0 means no cutout (solid circle), 100 means maximum cutout (thin ring).\nDefault is 70."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "cutout",
                "defaultValue": "70"
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
    static get states() {
        return {
            "computedCenterValue": {}
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
                    "text": "Manually trigger a chart resize to fit container dimensions",
                    "tags": []
                }
            },
            "getCenterValue": {
                "complexType": {
                    "signature": "() => Promise<string>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<string>"
                },
                "docs": {
                    "text": "Returns the value currently displayed in the center of the donut.\nWhen center_value is 'auto' this is the computed sum of currently\nvisible dataset values; otherwise it mirrors the center_value prop.",
                    "tags": []
                }
            },
            "toggleLegendItem": {
                "complexType": {
                    "signature": "(index: number) => Promise<void>",
                    "parameters": [{
                            "name": "index",
                            "type": "number",
                            "docs": ""
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
                    "text": "Toggles the visibility of the dataset segment at the given index,\nmirroring a click on the corresponding legend item.",
                    "tags": []
                }
            }
        };
    }
}
