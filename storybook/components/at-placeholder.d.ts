import type { Components, JSX } from "../types/components";

interface AtPlaceholder extends Components.AtPlaceholder, HTMLElement {}
export const AtPlaceholder: {
    prototype: AtPlaceholder;
    new (): AtPlaceholder;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
