import type { Components, JSX } from "../types/components";

interface AtuiListSelectorItem extends Components.AtuiListSelectorItem, HTMLElement {}
export const AtuiListSelectorItem: {
    prototype: AtuiListSelectorItem;
    new (): AtuiListSelectorItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
