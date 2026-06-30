import type { Components, JSX } from "../types/components";

interface AtChartGauge extends Components.AtChartGauge, HTMLElement {}
export const AtChartGauge: {
    prototype: AtChartGauge;
    new (): AtChartGauge;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
