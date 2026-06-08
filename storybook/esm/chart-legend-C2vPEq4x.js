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
    return baseLabels.map((label) => {
        const originalText = String(label.text ?? '');
        return {
            ...label,
            originalText,
            isTruncated: originalText.length > maxChars,
            text: truncateLegendText(originalText, maxChars),
        };
    });
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
