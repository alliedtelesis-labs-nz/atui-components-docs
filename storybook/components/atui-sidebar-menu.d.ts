import type { Components, JSX } from "../types/components";

interface AtuiSidebarMenu extends Components.AtuiSidebarMenu, HTMLElement {}
export const AtuiSidebarMenu: {
    prototype: AtuiSidebarMenu;
    new (): AtuiSidebarMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
