import type { Components, JSX } from "../types/components";

interface AtLayout extends Components.AtLayout, HTMLElement {}
export const AtLayout: {
    prototype: AtLayout;
    new (): AtLayout;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
