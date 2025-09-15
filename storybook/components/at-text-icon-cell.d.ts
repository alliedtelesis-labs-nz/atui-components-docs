import type { Components, JSX } from "../types/components";

interface AtTextIconCell extends Components.AtTextIconCell, HTMLElement {}
export const AtTextIconCell: {
    prototype: AtTextIconCell;
    new (): AtTextIconCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
