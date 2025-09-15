import type { Components, JSX } from "../types/components";

interface AtChartDonut extends Components.AtChartDonut, HTMLElement {}
export const AtChartDonut: {
    prototype: AtChartDonut;
    new (): AtChartDonut;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
