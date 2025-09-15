import type { Components, JSX } from "../types/components";

interface AtCheckboxGroup extends Components.AtCheckboxGroup, HTMLElement {}
export const AtCheckboxGroup: {
    prototype: AtCheckboxGroup;
    new (): AtCheckboxGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
