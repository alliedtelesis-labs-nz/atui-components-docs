import type { Components, JSX } from "../types/components";

interface AtAccordionTrigger extends Components.AtAccordionTrigger, HTMLElement {}
export const AtAccordionTrigger: {
    prototype: AtAccordionTrigger;
    new (): AtAccordionTrigger;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
