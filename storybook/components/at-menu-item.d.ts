import type { Components, JSX } from "../types/components";

interface AtMenuItem extends Components.AtMenuItem, HTMLElement {}
export const AtMenuItem: {
    prototype: AtMenuItem;
    new (): AtMenuItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
