import type { Components, JSX } from "../types/components";

interface AtChartBreakdown extends Components.AtChartBreakdown, HTMLElement {}
export const AtChartBreakdown: {
    prototype: AtChartBreakdown;
    new (): AtChartBreakdown;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
