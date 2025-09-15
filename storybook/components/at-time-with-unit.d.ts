import type { Components, JSX } from "../types/components";

interface AtTimeWithUnit extends Components.AtTimeWithUnit, HTMLElement {}
export const AtTimeWithUnit: {
    prototype: AtTimeWithUnit;
    new (): AtTimeWithUnit;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
