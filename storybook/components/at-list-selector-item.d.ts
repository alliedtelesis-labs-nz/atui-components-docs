import type { Components, JSX } from "../types/components";

interface AtListSelectorItem extends Components.AtListSelectorItem, HTMLElement {}
export const AtListSelectorItem: {
    prototype: AtListSelectorItem;
    new (): AtListSelectorItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
