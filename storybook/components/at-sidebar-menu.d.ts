import type { Components, JSX } from "../types/components";

interface AtSidebarMenu extends Components.AtSidebarMenu, HTMLElement {}
export const AtSidebarMenu: {
    prototype: AtSidebarMenu;
    new (): AtSidebarMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
