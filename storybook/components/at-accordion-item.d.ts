import type { Components, JSX } from "../types/components";

interface AtAccordionItem extends Components.AtAccordionItem, HTMLElement {}
export const AtAccordionItem: {
    prototype: AtAccordionItem;
    new (): AtAccordionItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
