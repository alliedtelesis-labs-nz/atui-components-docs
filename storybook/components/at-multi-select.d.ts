import type { Components, JSX } from "../types/components";

interface AtMultiSelect extends Components.AtMultiSelect, HTMLElement {}
export const AtMultiSelect: {
    prototype: AtMultiSelect;
    new (): AtMultiSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
