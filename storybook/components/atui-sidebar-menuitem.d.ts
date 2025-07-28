import type { Components, JSX } from "../types/components";

interface AtuiSidebarMenuitem extends Components.AtuiSidebarMenuitem, HTMLElement {}
export const AtuiSidebarMenuitem: {
    prototype: AtuiSidebarMenuitem;
    new (): AtuiSidebarMenuitem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
