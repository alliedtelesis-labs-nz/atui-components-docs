import type { Components, JSX } from "../types/components";

interface AtTimeRange extends Components.AtTimeRange, HTMLElement {}
export const AtTimeRange: {
    prototype: AtTimeRange;
    new (): AtTimeRange;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
