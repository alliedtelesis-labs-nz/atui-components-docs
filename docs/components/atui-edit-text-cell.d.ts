import type { Components, JSX } from "../types/components";

interface AtuiEditTextCell extends Components.AtuiEditTextCell, HTMLElement {}
export const AtuiEditTextCell: {
    prototype: AtuiEditTextCell;
    new (): AtuiEditTextCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
