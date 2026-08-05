import type { Components, JSX } from "../types/components";

interface AtFilterForm extends Components.AtFilterForm, HTMLElement {}
export const AtFilterForm: {
    prototype: AtFilterForm;
    new (): AtFilterForm;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
