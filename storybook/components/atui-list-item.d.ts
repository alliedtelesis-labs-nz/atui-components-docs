import type { Components, JSX } from "../types/components";

interface AtuiListItem extends Components.AtuiListItem, HTMLElement {}
export const AtuiListItem: {
    prototype: AtuiListItem;
    new (): AtuiListItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
