import type { Components, JSX } from "../types/components";

interface AtuiSidebar extends Components.AtuiSidebar, HTMLElement {}
export const AtuiSidebar: {
    prototype: AtuiSidebar;
    new (): AtuiSidebar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
