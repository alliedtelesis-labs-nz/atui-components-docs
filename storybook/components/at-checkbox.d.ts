import type { Components, JSX } from "../types/components";

interface AtCheckbox extends Components.AtCheckbox, HTMLElement {}
export const AtCheckbox: {
    prototype: AtCheckbox;
    new (): AtCheckbox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
