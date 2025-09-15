import type { Components, JSX } from "../types/components";

interface AtTreeItem extends Components.AtTreeItem, HTMLElement {}
export const AtTreeItem: {
    prototype: AtTreeItem;
    new (): AtTreeItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
