import type { Components, JSX } from "../types/components";

interface AtSidebarSubmenu extends Components.AtSidebarSubmenu, HTMLElement {}
export const AtSidebarSubmenu: {
    prototype: AtSidebarSubmenu;
    new (): AtSidebarSubmenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
