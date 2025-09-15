import type { Components, JSX } from "../types/components";

interface AtCheckboxHeader extends Components.AtCheckboxHeader, HTMLElement {}
export const AtCheckboxHeader: {
    prototype: AtCheckboxHeader;
    new (): AtCheckboxHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
