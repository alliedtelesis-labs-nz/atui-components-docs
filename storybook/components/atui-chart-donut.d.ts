import type { Components, JSX } from "../types/components";

interface AtuiChartDonut extends Components.AtuiChartDonut, HTMLElement {}
export const AtuiChartDonut: {
    prototype: AtuiChartDonut;
    new (): AtuiChartDonut;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
