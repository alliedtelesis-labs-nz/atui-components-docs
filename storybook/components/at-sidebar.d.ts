import type { Components, JSX } from "../types/components";

interface AtSidebar extends Components.AtSidebar, HTMLElement {}
export const AtSidebar: {
    prototype: AtSidebar;
    new (): AtSidebar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
