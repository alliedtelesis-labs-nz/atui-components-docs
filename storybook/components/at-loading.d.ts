import type { Components, JSX } from "../types/components";

interface AtLoading extends Components.AtLoading, HTMLElement {}
export const AtLoading: {
    prototype: AtLoading;
    new (): AtLoading;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
