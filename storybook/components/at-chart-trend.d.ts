import type { Components, JSX } from "../types/components";

interface AtChartTrend extends Components.AtChartTrend, HTMLElement {}
export const AtChartTrend: {
    prototype: AtChartTrend;
    new (): AtChartTrend;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
