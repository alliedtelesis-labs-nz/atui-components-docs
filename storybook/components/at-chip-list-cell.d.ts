import type { Components, JSX } from "../types/components";

interface AtChipListCell extends Components.AtChipListCell, HTMLElement {}
export const AtChipListCell: {
    prototype: AtChipListCell;
    new (): AtChipListCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
