import type { Components, JSX } from "../types/components";

interface AtMenu extends Components.AtMenu, HTMLElement {}
export const AtMenu: {
    prototype: AtMenu;
    new (): AtMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
