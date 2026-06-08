import { Chart, LegendItem } from 'chart.js';
export declare const SIDE_LEGEND_CHAR_RATIO = 0.046;
export declare const HORIZONTAL_LEGEND_CHAR_RATIO = 0.032;
export declare const MIN_LEGEND_CHAR_COUNT = 8;
export type TruncatedLegendItem = LegendItem & {
    originalText?: string;
    isTruncated?: boolean;
};
export declare function generateLegendLabels(chart: Chart, textColor: string, isSideLegend: boolean, defaultGenerateLabels: (chart: Chart) => LegendItem[], customGenerateLabels?: (chart: Chart) => TruncatedLegendItem[]): TruncatedLegendItem[];
export declare function truncateLegendText(text: string, maxChars: number): string;
export declare function getLegendLabelMaxChars(chart: Chart, isSideLegend: boolean): number;
export declare function ensureLegendTooltipEl(canvasEl: HTMLCanvasElement | undefined, current: HTMLDivElement | null): HTMLDivElement;
export declare function setLegendTooltip(tooltipEl: HTMLDivElement | null, visible: boolean, text?: string, event?: MouseEvent): void;
