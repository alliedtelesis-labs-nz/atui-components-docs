import type { Components, JSX } from "../types/components";

interface AtSidebarMenuitem extends Components.AtSidebarMenuitem, HTMLElement {}
export const AtSidebarMenuitem: {
    prototype: AtSidebarMenuitem;
    new (): AtSidebarMenuitem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
