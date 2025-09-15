import type { Components, JSX } from "../types/components";

interface AtTabSelector extends Components.AtTabSelector, HTMLElement {}
export const AtTabSelector: {
    prototype: AtTabSelector;
    new (): AtTabSelector;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
