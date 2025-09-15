import type { Components, JSX } from "../types/components";

interface AtTableFilterMenu extends Components.AtTableFilterMenu, HTMLElement {}
export const AtTableFilterMenu: {
    prototype: AtTableFilterMenu;
    new (): AtTableFilterMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
