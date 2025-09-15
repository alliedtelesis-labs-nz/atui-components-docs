import type { Components, JSX } from "../types/components";

interface AtChartBarLine extends Components.AtChartBarLine, HTMLElement {}
export const AtChartBarLine: {
    prototype: AtChartBarLine;
    new (): AtChartBarLine;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
