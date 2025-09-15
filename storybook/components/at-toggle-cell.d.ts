import type { Components, JSX } from "../types/components";

interface AtToggleCell extends Components.AtToggleCell, HTMLElement {}
export const AtToggleCell: {
    prototype: AtToggleCell;
    new (): AtToggleCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
