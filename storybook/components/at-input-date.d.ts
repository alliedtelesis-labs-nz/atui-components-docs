import type { Components, JSX } from "../types/components";

interface AtInputDate extends Components.AtInputDate, HTMLElement {}
export const AtInputDate: {
    prototype: AtInputDate;
    new (): AtInputDate;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
