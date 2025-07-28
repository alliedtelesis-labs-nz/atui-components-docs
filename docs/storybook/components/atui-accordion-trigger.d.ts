import type { Components, JSX } from "../types/components";

interface AtuiAccordionTrigger extends Components.AtuiAccordionTrigger, HTMLElement {}
export const AtuiAccordionTrigger: {
    prototype: AtuiAccordionTrigger;
    new (): AtuiAccordionTrigger;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
