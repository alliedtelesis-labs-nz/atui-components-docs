import type { Components, JSX } from "../types/components";

interface AtuiCheckboxCell extends Components.AtuiCheckboxCell, HTMLElement {}
export const AtuiCheckboxCell: {
    prototype: AtuiCheckboxCell;
    new (): AtuiCheckboxCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
