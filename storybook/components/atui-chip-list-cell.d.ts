import type { Components, JSX } from "../types/components";

interface AtuiChipListCell extends Components.AtuiChipListCell, HTMLElement {}
export const AtuiChipListCell: {
    prototype: AtuiChipListCell;
    new (): AtuiChipListCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
