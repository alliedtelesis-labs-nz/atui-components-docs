import type { Components, JSX } from "../types/components";

interface AtAccordion extends Components.AtAccordion, HTMLElement {}
export const AtAccordion: {
    prototype: AtAccordion;
    new (): AtAccordion;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
