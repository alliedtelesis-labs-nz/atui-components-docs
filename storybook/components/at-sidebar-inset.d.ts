import type { Components, JSX } from "../types/components";

interface AtSidebarInset extends Components.AtSidebarInset, HTMLElement {}
export const AtSidebarInset: {
    prototype: AtSidebarInset;
    new (): AtSidebarInset;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
