import type { Components, JSX } from "../types/components";

interface AtCustomTimeRange extends Components.AtCustomTimeRange, HTMLElement {}
export const AtCustomTimeRange: {
    prototype: AtCustomTimeRange;
    new (): AtCustomTimeRange;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
