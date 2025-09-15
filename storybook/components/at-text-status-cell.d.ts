import type { Components, JSX } from "../types/components";

interface AtTextStatusCell extends Components.AtTextStatusCell, HTMLElement {}
export const AtTextStatusCell: {
    prototype: AtTextStatusCell;
    new (): AtTextStatusCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
