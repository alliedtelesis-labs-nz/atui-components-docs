import type { Components, JSX } from "../types/components";

interface AtuiChartBarLine extends Components.AtuiChartBarLine, HTMLElement {}
export const AtuiChartBarLine: {
    prototype: AtuiChartBarLine;
    new (): AtuiChartBarLine;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
