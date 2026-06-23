import { Chart, LegendItem } from 'chart.js';
export declare const SIDE_LEGEND_CHAR_RATIO = 0.046;
export declare const HORIZONTAL_LEGEND_CHAR_RATIO = 0.032;
export declare const MIN_LEGEND_CHAR_COUNT = 8;
export type TruncatedLegendItem = LegendItem & {
    originalText?: string;
    isTruncated?: boolean;
    isOverflow?: boolean;
};
export declare function generateLegendLabels(chart: Chart, textColor: string, isSideLegend: boolean, defaultGenerateLabels: (chart: Chart) => LegendItem[], customGenerateLabels?: (chart: Chart) => TruncatedLegendItem[]): TruncatedLegendItem[];
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
export declare function applyLegendOverflow(chart: Chart, labels: TruncatedLegendItem[], isSideLegend: boolean, textColor: string): TruncatedLegendItem[];
export declare function truncateLegendText(text: string, maxChars: number): string;
export declare function getLegendLabelMaxChars(chart: Chart, isSideLegend: boolean): number;
export declare function ensureLegendTooltipEl(canvasEl: HTMLCanvasElement | undefined, current: HTMLDivElement | null): HTMLDivElement;
export declare function setLegendTooltip(tooltipEl: HTMLDivElement | null, visible: boolean, text?: string, event?: MouseEvent): void;
