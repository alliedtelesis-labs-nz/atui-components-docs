import type { Components, JSX } from "../types/components";

interface AtChipList extends Components.AtChipList, HTMLElement {}
export const AtChipList: {
    prototype: AtChipList;
    new (): AtChipList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
