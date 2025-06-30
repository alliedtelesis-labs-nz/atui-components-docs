import type { Components, JSX } from "../types/components";

interface AtuiTreeItem extends Components.AtuiTreeItem, HTMLElement {}
export const AtuiTreeItem: {
    prototype: AtuiTreeItem;
    new (): AtuiTreeItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
