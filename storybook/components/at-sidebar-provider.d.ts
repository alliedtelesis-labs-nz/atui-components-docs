import type { Components, JSX } from "../types/components";

interface AtSidebarProvider extends Components.AtSidebarProvider, HTMLElement {}
export const AtSidebarProvider: {
    prototype: AtSidebarProvider;
    new (): AtSidebarProvider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
