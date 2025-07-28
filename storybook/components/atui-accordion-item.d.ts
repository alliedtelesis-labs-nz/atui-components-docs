import type { Components, JSX } from "../types/components";

interface AtuiAccordionItem extends Components.AtuiAccordionItem, HTMLElement {}
export const AtuiAccordionItem: {
    prototype: AtuiAccordionItem;
    new (): AtuiAccordionItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
