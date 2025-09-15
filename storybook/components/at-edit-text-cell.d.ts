import type { Components, JSX } from "../types/components";

interface AtEditTextCell extends Components.AtEditTextCell, HTMLElement {}
export const AtEditTextCell: {
    prototype: AtEditTextCell;
    new (): AtEditTextCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
