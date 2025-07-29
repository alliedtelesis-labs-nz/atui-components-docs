import type { Components, JSX } from "../types/components";

interface AtuiSidebarSubmenu extends Components.AtuiSidebarSubmenu, HTMLElement {}
export const AtuiSidebarSubmenu: {
    prototype: AtuiSidebarSubmenu;
    new (): AtuiSidebarSubmenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
