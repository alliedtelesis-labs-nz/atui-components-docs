import { r as registerInstance, h, H as Host } from './index-B2z78KBX.js';
import { g as getChartColors, c as color, C as Chart, D as DoughnutController, A as ArcElement, a as plugin_tooltip, i as index } from './chart-color-BSsHS4sa.js';
import { A as AtChartColorPalette, b as readChartFontFamily, r as readChartTextColors, a as readChartTypography } from './chart-color-BeJCqIOU.js';

const heightVariants = {
    xs: 'h-[80px]',
    sm: 'h-[120px]',
    md: 'h-[160px]',
    lg: 'h-[220px]',
    xl: 'h-[300px]',
    auto: 'h-full',
};
const statusPaletteIndex = {
    good: 0,
    warning: 1,
    bad: 2,
    unreachable: 3,
};
// Display text for each status, used as the tooltip's title line. The prop
// values are lowercase identifiers; these are the user-facing equivalents.
const statusLabels = {
    good: 'Good',
    warning: 'Warning',
    bad: 'Bad',
    unreachable: 'Unreachable',
};
// Relative ring thicknesses: the value arc is the thick inner ring, the
// threshold arc a thin band (half the value ring's width) on the outer rim.
const VALUE_WEIGHT = 4;
const THRESHOLD_WEIGHT = 0.5;
// Alpha applied to the status colour to draw the unfilled value-arc track.
const TRACK_ALPHA = 0.15;
// Opacity applied to the threshold-zone colours.
const THRESHOLD_ALPHA = 0.5;
// Transparent border (px) on each ring — separates the coloured segments
// within a ring (e.g. the threshold zones) with a hairline.
const RING_GAP = 0.6;
// Weight of a transparent spacer ring inserted between the value and threshold
// rings, creating a clean uniform radial gap (relative to the ring weights).
const GAP_WEIGHT = 0.5;
// Sizing for the `unit` suffix next to the centre value — mirrors
// at-chart-trend's inline value/unit split (0.65em, weight 500).
const CENTER_UNIT_SCALE = 0.65;
const CENTER_UNIT_WEIGHT = 500;
const AtChartGauge = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * The metric value to display, plotted against `min` and `max`. Values
     * outside the range are clamped.
     */
    value = 0;
    /**
     * Start of the gauge scale.
     */
    min = 0;
    /**
     * End of the gauge scale.
     */
    max = 100;
    /**
     * Threshold boundary stops within the scale, e.g. `[60, 85]` splits the
     * range into three zones (min–60, 60–85, 85–max). Zones are drawn as a thin
     * outer ring and coloured from the alert palette by index. When omitted, no
     * threshold ring is drawn.
     */
    thresholds;
    /**
     * Health colour mode for the value arc. When set, the arc colour is taken
     * from the device-status palette for the given state (good / warning / bad /
     * unreachable), and the state is shown as the hover tooltip's title. When
     * unset, the first colour of `color_palette` is used and the tooltip has no
     * title.
     */
    status;
    /**
     * Optional value text shown in the centre of the gauge, e.g. `"72"`.
     */
    center_value;
    /**
     * Unit appended to `center_value`, rendered at a smaller size (e.g.
     * `%`). Not appended to `center_value` directly — include it via this
     * prop to get the smaller styling; otherwise bake it into `center_value`
     * for equal-size rendering.
     */
    unit;
    /**
     * Optional label shown beneath the centre value.
     */
    center_text;
    /**
     * Controls the thickness of the donut ring. Value between 0 and 100.
     * 0 means no cutout (solid circle), 100 means maximum cutout (thin ring).
     * Default is 70.
     */
    cutout = 70;
    /**
     * Palette for the gauge — one of two roles:
     * - `ALERT` (default): use when the gauge has `thresholds`. The threshold
     *   zones always use the alert palette, and the value arc falls back to the
     *   alert palette's first colour when no `status` is set.
     * - `CATEGORICAL`: use when the gauge has no `thresholds`. The value arc
     *   falls back to the categorical palette's first colour when no `status` is
     *   set.
     *
     * `status`, when set, always colours the value arc from the device-status
     * palette and takes precedence over this palette. Colours resolve from theme
     * CSS variables.
     */
    color_palette = AtChartColorPalette.ALERT;
    /**
     * Height of the gauge.
     */
    height = 'md';
    /**
     * Label shown in the hover tooltip, before the value — typically the title
     * of the widget the gauge sits in, e.g. `"CPU Usage"` renders
     * `CPU Usage: 72%`. Falls back to `center_text` when unset; when neither is
     * set, only the value (and `unit`) is shown. The tooltip's title line is
     * the `status`, when one is set.
     */
    tooltip_label;
    /**
     * Options merged into the tooltip plugin config. ATUI defaults are preserved
     * unless explicitly overridden.
     */
    tooltip_options;
    /**
     * Additional options merged into the chart configuration.
     */
    options;
    /**
     * Pass the active theme value here to trigger a chart redraw when the theme
     * changes. The value itself is not used — any change to this prop causes the
     * chart to reinitialise so colours and text are re-read from the current CSS
     * variables.
     */
    refresh_theme;
    canvasEl;
    config;
    chart;
    /**
     * Getter method for the chart's configuration object.
     * @returns Configuration of the chart
     */
    async getConfig() {
        return this.config;
    }
    /**
     * Manually trigger a chart resize to fit container dimensions.
     */
    async resize() {
        if (this.chart) {
            this.chart.resize();
        }
    }
    /**
     * Resolve the value-arc colour. A `status` selects a device-status palette
     * slot; otherwise the first colour of `color_palette` is used.
     */
    resolveValueColor() {
        if (this.status) {
            const colors = getChartColors(AtChartColorPalette.DEVICE_STATUS) || [];
            return colors[statusPaletteIndex[this.status]];
        }
        const colors = getChartColors(this.color_palette);
        return colors && colors.length ? colors[0] : undefined;
    }
    /**
     * The thick inner value arc: a filled portion (value) plus a muted track
     * for the remainder of the scale.
     */
    valueDataset(span, total) {
        const base = this.resolveValueColor();
        const track = base !== undefined
            ? color(base).alpha(TRACK_ALPHA).rgbString()
            : 'transparent';
        const fills = [base ?? 'transparent', track];
        return {
            data: [span, Math.max(total - span, 0)],
            backgroundColor: fills,
            // Hover colours mirror the base colours so the arc doesn't shift
            // tone when the tooltip is triggered — the tooltip is the only
            // hover affordance.
            hoverBackgroundColor: fills,
            // Transparent border opens up the gap to the outer threshold ring.
            borderColor: 'transparent',
            hoverBorderColor: 'transparent',
            borderWidth: RING_GAP,
            hoverBorderWidth: RING_GAP,
            hoverOffset: 0,
            weight: VALUE_WEIGHT,
        };
    }
    /**
     * The thin outer threshold ring: one segment per zone, coloured from the
     * palette by index.
     */
    thresholdDataset() {
        if (!this.thresholds || !this.thresholds.length) {
            return null;
        }
        const bounds = [this.min, ...this.thresholds, this.max];
        const spans = [];
        for (let i = 0; i < bounds.length - 1; i++) {
            spans.push(Math.max(bounds[i + 1] - bounds[i], 0));
        }
        // Threshold zones are always the alert palette (health bands).
        const colors = getChartColors(AtChartColorPalette.ALERT) || [];
        const tint = (c) => c ? color(c).alpha(THRESHOLD_ALPHA).rgbString() : 'transparent';
        const fills = spans.map((_, i) => tint(colors[i % (colors.length || 1)]));
        return {
            data: spans,
            backgroundColor: fills,
            // The threshold ring is passive — no tooltip, no hover restyling.
            hoverBackgroundColor: fills,
            // Hairline between adjacent zone segments.
            borderColor: 'transparent',
            hoverBorderColor: 'transparent',
            borderWidth: RING_GAP,
            hoverBorderWidth: RING_GAP,
            hoverOffset: 0,
            weight: THRESHOLD_WEIGHT,
        };
    }
    /**
     * A transparent ring that occupies radial space between the value and
     * threshold rings, producing a clean uniform gap between them.
     */
    spacerDataset(total) {
        return {
            data: [total],
            backgroundColor: ['transparent'],
            hoverBackgroundColor: ['transparent'],
            borderWidth: 0,
            hoverBorderWidth: 0,
            hoverOffset: 0,
            weight: GAP_WEIGHT,
        };
    }
    /**
     * Draws the centre value and label stacked at the base of the dial (the
     * semicircle's diameter), growing upward. Sizing, weight, font family and
     * line-height match at-chart-donut's center text exactly — only the
     * bottom-anchored (rather than vertically centered) stacking differs,
     * since a semicircle's usable space sits above its flat base.
     */
    getDrawCenterTextPlugin(typography) {
        return {
            id: 'DrawGaugeCenterTextPlugin',
            afterDatasetsDraw: (chart) => {
                const ctx = chart.ctx;
                const meta = chart.getDatasetMeta(chart.data.datasets.length - 1);
                const arc = meta?.data?.[0];
                if (!ctx || !arc) {
                    return;
                }
                ctx.restore();
                const innerRadius = arc.innerRadius;
                const fontFamily = readChartFontFamily();
                const { remPx } = typography;
                const setFont = (px, weight = typography.weightLight) => {
                    return (ctx.font = `${weight} ${(px / remPx).toFixed(2)}em ${fontFamily}`);
                };
                // Width of the horizontal chord `offset` px above the dial's
                // flat base (arc.y). Unlike a full donut, the gauge is only
                // the top half of a circle, so the space available to text
                // narrows the further it sits above the base — using a
                // single diameter-wide maxWidth for every line let text
                // overflow the dial once it climbed high enough to be
                // clipped by the curve.
                const chordWidth = (offset) => {
                    const clamped = Math.min(Math.abs(offset), innerRadius);
                    return (Math.sqrt(innerRadius ** 2 - clamped ** 2) * 2 * 0.82);
                };
                // Largest size up to `base` that keeps `text` within maxWidth.
                const fit = (text, base, maxWidth, weight = typography.weightLight) => {
                    setFont(base, weight);
                    const w = ctx.measureText(text).width;
                    return w > maxWidth && w > 0 ? base * (maxWidth / w) : base;
                };
                // Sized from --token-font-size-base/-xl, capped to the dial
                // so text can't overflow vertically on smaller gauges.
                const baseLabelPx = Math.min(remPx * typography.textRem, innerRadius * 0.36);
                const baseValuePx = Math.min(remPx * typography.valueRem, innerRadius * 0.6);
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
                ctx.fillStyle = readChartTextColors().title;
                // Stack upward from the dial's flat base: label first (where
                // the chord is widest), then the value above it. Each line is
                // width-fit against the chord at its own vertical offset —
                // estimated from its un-fit size, so a line that ends up
                // shrinking only ever sits within a *wider* chord than assumed.
                let offset = 0;
                let prevPx = 0;
                // Gap between stacked lines — a fraction of the value line's
                // font size, matching at-chart-donut's line gap exactly.
                const lineGap = () => prevPx > 0 ? baseValuePx * 0.2 : 0;
                const draw = (text, basePx, weight, lineHeight) => {
                    const gap = lineGap();
                    const baselineOffset = offset + gap;
                    const px = fit(text, basePx, chordWidth(baselineOffset + basePx * lineHeight), weight);
                    setFont(px, weight);
                    ctx.fillText(text, arc.x, arc.y - baselineOffset);
                    offset = baselineOffset + px * lineHeight;
                    prevPx = px;
                };
                // As `draw`, but appends `unitText` immediately after `text`
                // at CENTER_UNIT_SCALE of the (possibly shrunk) value size,
                // both centred together on the chord.
                const drawValueWithUnit = (text, unitText, basePx, weight, lineHeight) => {
                    const gap = lineGap();
                    const baselineOffset = offset + gap;
                    const maxWidth = chordWidth(baselineOffset + basePx * lineHeight);
                    setFont(basePx, weight);
                    const valueWidth = ctx.measureText(text).width;
                    setFont(basePx * CENTER_UNIT_SCALE, CENTER_UNIT_WEIGHT);
                    const unitWidth = ctx.measureText(unitText).width;
                    const totalWidth = valueWidth + unitWidth;
                    const px = totalWidth > maxWidth && totalWidth > 0
                        ? basePx * (maxWidth / totalWidth)
                        : basePx;
                    const scale = px / basePx;
                    // Draw on the shared alphabetic baseline rather than
                    // `bottom` — with `bottom`, the smaller unit's shallower
                    // descender space would sit its glyphs lower than the
                    // value's, so the two would look misaligned.
                    ctx.textAlign = 'left';
                    ctx.textBaseline = 'alphabetic';
                    const startX = arc.x - (valueWidth + unitWidth) * scale * 0.5;
                    const baselineY = arc.y - baselineOffset;
                    setFont(px, weight);
                    ctx.fillText(text, startX, baselineY);
                    setFont(px * CENTER_UNIT_SCALE, CENTER_UNIT_WEIGHT);
                    ctx.fillText(unitText, startX + valueWidth * scale, baselineY);
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';
                    offset = baselineOffset + px * lineHeight;
                    prevPx = px;
                };
                if (this.center_text) {
                    draw(this.center_text, baseLabelPx, typography.weightLight, 1);
                }
                if (this.center_value) {
                    if (this.unit) {
                        drawValueWithUnit(this.center_value, this.unit, baseValuePx, typography.weightBold, 0.85);
                    }
                    else {
                        draw(this.center_value, baseValuePx, typography.weightBold, 0.85);
                    }
                }
                ctx.save();
            },
        };
    }
    /**
     * The value the arc actually renders, after clamping `value` to
     * [min, max]. Shared by `initChart` (arc span) and `tooltipText` (fallback
     * label) so the tooltip never shows a raw value the dial can't display.
     */
    clampedValue() {
        return Math.min(Math.max(this.value, this.min), this.max);
    }
    /**
     * The tooltip's title line: the health status of the value arc, e.g.
     * `Warning`. Empty when no `status` is set, in which case Chart.js draws
     * the tooltip with the value line alone.
     */
    tooltipTitle() {
        return this.status ? statusLabels[this.status] : '';
    }
    /**
     * The tooltip's body line: the widget/metric label, then the value and its
     * unit — e.g. `CPU Usage: 72%`. Mirrors Chart.js's doughnut label format
     * (`label: value`) so the gauge reads the same as at-chart-donut and
     * at-chart-breakdown. `center_value` is preferred over the raw `value` prop
     * so the tooltip shows exactly what the dial shows.
     */
    tooltipText() {
        const label = this.tooltip_label ?? this.center_text;
        const value = `${this.center_value ?? this.clampedValue()}${this.unit ?? ''}`;
        return label ? `${label}: ${value}` : value;
    }
    /**
     * Chart.js decides whether to show the tooltip from the hovered elements,
     * not from the items that survive `filter`. Hovering the track, the spacer
     * or a threshold zone therefore still opened a tooltip, with every body
     * line filtered away and only the status title left.
     *
     * Dropping those elements from the tooltip's active set (rather than
     * cancelling the draw) leaves Chart.js in its normal "nothing hovered"
     * state, so the opacity animation fades the box out instead of clipping
     * it. The draw guard remains as a backstop for the first frames, before
     * any content has ever been built.
     */
    getTooltipGuardPlugin(valueDatasetIndex) {
        const isValueArc = (el) => el.datasetIndex === valueDatasetIndex && el.index === 0;
        return {
            id: 'atuiGaugeTooltipGuard',
            afterEvent: (chart, args) => {
                const tooltip = chart.tooltip;
                if (!tooltip) {
                    return;
                }
                const active = tooltip.getActiveElements();
                if (active.length && !active.some(isValueArc)) {
                    tooltip.setActiveElements([], { x: 0, y: 0 });
                    args.changed = true;
                }
            },
            beforeTooltipDraw: (_chart, args) => args.tooltip.dataPoints.length > 0,
        };
    }
    initChart() {
        Chart.register(DoughnutController, ArcElement, plugin_tooltip, index);
        const total = Math.max(this.max - this.min, 0);
        const span = this.clampedValue() - this.min;
        // Chart.js draws the first doughnut dataset as the outermost ring and
        // the last as the innermost. The thin threshold ring goes first (outer
        // rim), then a transparent spacer for the gap, then the thick value
        // ring last (inner).
        const datasets = [];
        const threshold = this.thresholdDataset();
        if (threshold) {
            datasets.push(threshold);
            datasets.push(this.spacerDataset(total));
        }
        datasets.push(this.valueDataset(span, total));
        // The value ring is pushed last, so it is always the final dataset.
        const valueDatasetIndex = datasets.length - 1;
        const textColors = readChartTextColors();
        const plugins = [
            this.getTooltipGuardPlugin(valueDatasetIndex),
        ];
        if (this.center_value || this.center_text) {
            plugins.push(this.getDrawCenterTextPlugin(readChartTypography(this.canvasEl)));
        }
        // `rotation`/`circumference` are doughnut-only options; cast through
        // `unknown` so the generic ChartConfiguration literal accepts them.
        this.config = {
            type: 'doughnut',
            data: { datasets },
            options: {
                devicePixelRatio: window.devicePixelRatio || 1,
                responsive: true,
                maintainAspectRatio: false,
                // Arcs draw instantly, but the animation config stays an object
                // rather than `false`: Chart.js resolves tooltip animations to
                // nothing when `options.animation` is falsy, which would kill
                // the tooltip fade below. Override via `options` if desired.
                animation: { duration: 0 },
                rotation: -90,
                circumference: 180,
                cutout: `${this.cutout}%`,
                layout: { padding: 8 },
                // Only trigger on the arc actually under the pointer, so the
                // filter below can keep the tooltip to the value segment.
                interaction: { mode: 'nearest', intersect: true },
                plugins: {
                    legend: { display: false },
                    // Styling matches at-chart-donut / at-chart-breakdown so the
                    // tooltip is identical across the chart set.
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
                            title: () => this.tooltipTitle(),
                            label: () => this.tooltipText(),
                            labelColor: () => ({
                                borderColor: 'transparent',
                                backgroundColor: this.resolveValueColor() ?? 'transparent',
                                borderWidth: 0,
                                borderRadius: 2,
                            }),
                            ...(this.tooltip_options?.callbacks || {}),
                        },
                        // Only the filled portion of the value ring is
                        // interactive — the unfilled track, the transparent
                        // spacer and the threshold zones stay silent.
                        filter: (ctx) => ctx.datasetIndex === valueDatasetIndex &&
                            ctx.dataIndex === 0,
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
    disconnectedCallback() {
        this.chart?.destroy();
        this.chart = null;
    }
    componentDidUpdate() {
        if (this.max > this.min) {
            this.initChart();
        }
    }
    /**
     * componentDidLoad runs once the element is in the DOM. If the scale isn't
     * usable yet, the chart initialises later via componentDidUpdate.
     */
    componentDidLoad() {
        if (this.max > this.min) {
            this.initChart();
        }
    }
    render() {
        return (h(Host, { key: '545850991a58f6e7765508a05de052b7eda95714', style: { height: '100%', width: '100%' } }, h("canvas", { key: 'e172af692af8417005b8959cd74c0b4f5a79e18c', ref: (el) => (this.canvasEl = el), class: `w-full ${heightVariants[this.height]}`, "data-name": "gauge-canvas" })));
    }
};

export { AtChartGauge as at_chart_gauge };
