import type { Components, JSX } from "../types/components";

interface AtHealthDot extends Components.AtHealthDot, HTMLElement {}
export const AtHealthDot: {
    prototype: AtHealthDot;
    new (): AtHealthDot;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
