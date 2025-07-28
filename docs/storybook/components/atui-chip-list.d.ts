import type { Components, JSX } from "../types/components";

interface AtuiChipList extends Components.AtuiChipList, HTMLElement {}
export const AtuiChipList: {
    prototype: AtuiChipList;
    new (): AtuiChipList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
