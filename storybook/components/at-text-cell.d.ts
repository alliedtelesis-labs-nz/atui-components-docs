import type { Components, JSX } from "../types/components";

interface AtTextCell extends Components.AtTextCell, HTMLElement {}
export const AtTextCell: {
    prototype: AtTextCell;
    new (): AtTextCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
