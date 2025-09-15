import type { Components, JSX } from "../types/components";

interface AtListItem extends Components.AtListItem, HTMLElement {}
export const AtListItem: {
    prototype: AtListItem;
    new (): AtListItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
