import type { Components, JSX } from "../types/components";

interface AtuiSidebarMenuSub extends Components.AtuiSidebarMenuSub, HTMLElement {}
export const AtuiSidebarMenuSub: {
    prototype: AtuiSidebarMenuSub;
    new (): AtuiSidebarMenuSub;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
