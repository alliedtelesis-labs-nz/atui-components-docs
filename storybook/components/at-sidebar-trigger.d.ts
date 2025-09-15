import type { Components, JSX } from "../types/components";

interface AtSidebarTrigger extends Components.AtSidebarTrigger, HTMLElement {}
export const AtSidebarTrigger: {
    prototype: AtSidebarTrigger;
    new (): AtSidebarTrigger;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
