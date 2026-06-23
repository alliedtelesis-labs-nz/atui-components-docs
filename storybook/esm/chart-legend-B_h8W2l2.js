import { C as Chart } from './chart-color-Dxo-bU-I.js';
import { r as readChartTextColors } from './chart-color-DTlEjff-.js';

const SIDE_LEGEND_CHAR_RATIO = 0.046;
const HORIZONTAL_LEGEND_CHAR_RATIO = 0.032;
const MIN_LEGEND_CHAR_COUNT = 8;
function generateLegendLabels(chart, textColor, isSideLegend, defaultGenerateLabels, customGenerateLabels) {
    const maxChars = getLegendLabelMaxChars(chart, isSideLegend);
    const baseLabels = customGenerateLabels
        ? customGenerateLabels(chart)
        : defaultGenerateLabels(chart).map((label) => ({
            ...label,
            lineWidth: 0,
            fontColor: textColor,
        }));
    const truncated = baseLabels.map((label) => {
        const originalText = String(label.text ?? '');
        return {
            ...label,
            originalText,
            isTruncated: originalText.length > maxChars,
            text: truncateLegendText(originalText, maxChars),
        };
    });
    return applyLegendOverflow(chart, truncated, isSideLegend, textColor);
}
/**
 * Constrains the legend to a single line of items and collapses any overflow
 * into a trailing "and {n} more" item (rendered without a colour swatch).
 *
 * - Side legends (left/right) are limited by the chart height and rendered as
 *   a single vertical column.
 * - Top/bottom legends are limited by the chart width and rendered as a single
 *   horizontal row.
 *
 * The underlying chart still renders every data series; only the legend list is
 * trimmed. Resizing the widget reveals more items.
 */
function applyLegendOverflow(chart, labels, isSideLegend, textColor) {
    if (labels.length <= 1) {
        return labels;
    }
    const legendLabels = (chart.options?.plugins?.legend?.labels ??
        {});
    const fontSize = legendLabels.font?.size ?? Chart.defaults.font.size;
    const fontFamily = legendLabels.font?.family ?? Chart.defaults.font.family;
    const boxWidth = legendLabels.boxWidth ?? fontSize;
    const boxHeight = legendLabels.boxHeight ?? fontSize;
    const padding = legendLabels.padding ?? 10;
    // The overflow item has transparent box fill/stroke, so no colour swatch is
    // shown — only the "and N more" text.
    const withOverflow = (keep) => [
        ...labels.slice(0, keep),
        {
            text: `and ${labels.length - keep} more`,
            isOverflow: true,
            fillStyle: 'transparent',
            strokeStyle: 'transparent',
            fontColor: textColor,
        },
    ];
    if (isSideLegend) {
        // Chart.js stacks a side legend into columns, wrapping once a column's
        // height exceeds the allotted height. Replicate its math so we keep
        // only what fits in a single column. `legend.maxHeight` is set before
        // generateLabels runs, so it reflects the real space for this pass.
        const heightLimit = chart.legend?.maxHeight ?? chart.height;
        const itemHeight = Math.max(fontSize, boxHeight);
        const maxRows = Math.max(1, Math.floor((heightLimit - padding) / (itemHeight + padding)));
        return maxRows >= labels.length ? labels : withOverflow(maxRows - 1);
    }
    // Top/bottom legend: Chart.js wraps to a new row once the row width exceeds
    // the allotted width. Walk the items once, tracking how many fit on a single
    // row alongside the trailing overflow item. Matches Chart.js' _fitRows math.
    const widthLimit = chart.legend?.maxWidth ?? chart.width;
    const ctx = chart.ctx;
    ctx.save();
    ctx.font = `${fontSize}px ${fontFamily}`;
    const itemWidth = (text) => boxWidth + fontSize / 2 + ctx.measureText(text).width + padding;
    const overflowWidth = itemWidth(`and ${labels.length} more`);
    let line = 0;
    let keep = 0;
    for (let i = 0; i < labels.length; i++) {
        line += itemWidth(String(labels[i].text ?? ''));
        if (line + overflowWidth + padding <= widthLimit) {
            keep = i + 1;
        }
    }
    const allFit = line + padding <= widthLimit;
    ctx.restore();
    return allFit ? labels : withOverflow(keep);
}
function truncateLegendText(text, maxChars) {
    return text.length > maxChars ? `${text.slice(0, maxChars - 1)}…` : text;
}
function getLegendLabelMaxChars(chart, isSideLegend) {
    const charRatio = isSideLegend
        ? SIDE_LEGEND_CHAR_RATIO
        : HORIZONTAL_LEGEND_CHAR_RATIO;
    return Math.max(Math.floor(chart.width * charRatio), MIN_LEGEND_CHAR_COUNT);
}
function ensureLegendTooltipEl(canvasEl, current) {
    if (current) {
        return current;
    }
    const doc = canvasEl?.ownerDocument ?? document;
    const el = doc.createElement('div');
    el.className =
        'pointer-events-none z-50 max-w-xs rounded px-2 py-1 text-xs shadow-lg';
    el.style.position = 'fixed';
    el.style.display = 'none';
    doc.body.appendChild(el);
    return el;
}
function setLegendTooltip(tooltipEl, visible, text, event) {
    if (!tooltipEl) {
        return;
    }
    if (!visible || !text || !event) {
        tooltipEl.style.display = 'none';
        return;
    }
    const colors = readChartTextColors();
    tooltipEl.textContent = text;
    Object.assign(tooltipEl.style, {
        display: 'block',
        left: `${event.clientX + 12}px`,
        top: `${event.clientY - 32}px`,
        backgroundColor: colors.tooltipBg,
        color: colors.tooltipBody,
        padding: '2px 4px',
    });
}

export { ensureLegendTooltipEl as e, generateLegendLabels as g, setLegendTooltip as s };
