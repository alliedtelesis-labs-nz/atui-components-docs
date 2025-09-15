import type { Components, JSX } from "../types/components";

interface AtCheckboxCell extends Components.AtCheckboxCell, HTMLElement {}
export const AtCheckboxCell: {
    prototype: AtCheckboxCell;
    new (): AtCheckboxCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
