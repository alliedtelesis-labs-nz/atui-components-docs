import type { Components, JSX } from "../types/components";

interface AtSelect extends Components.AtSelect, HTMLElement {}
export const AtSelect: {
    prototype: AtSelect;
    new (): AtSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
