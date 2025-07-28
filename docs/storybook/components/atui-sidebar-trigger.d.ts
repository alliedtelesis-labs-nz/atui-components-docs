import type { Components, JSX } from "../types/components";

interface AtuiSidebarTrigger extends Components.AtuiSidebarTrigger, HTMLElement {}
export const AtuiSidebarTrigger: {
    prototype: AtuiSidebarTrigger;
    new (): AtuiSidebarTrigger;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
