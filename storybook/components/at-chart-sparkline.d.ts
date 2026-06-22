import type { Components, JSX } from "../types/components";

interface AtChartSparkline extends Components.AtChartSparkline, HTMLElement {}
export const AtChartSparkline: {
    prototype: AtChartSparkline;
    new (): AtChartSparkline;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
