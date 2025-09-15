import type { Components, JSX } from "../types/components";

interface AtInputRange extends Components.AtInputRange, HTMLElement {}
export const AtInputRange: {
    prototype: AtInputRange;
    new (): AtInputRange;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
