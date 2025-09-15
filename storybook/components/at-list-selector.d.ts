import type { Components, JSX } from "../types/components";

interface AtListSelector extends Components.AtListSelector, HTMLElement {}
export const AtListSelector: {
    prototype: AtListSelector;
    new (): AtListSelector;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
