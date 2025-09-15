import type { Components, JSX } from "../types/components";

interface AtMenuCell extends Components.AtMenuCell, HTMLElement {}
export const AtMenuCell: {
    prototype: AtMenuCell;
    new (): AtMenuCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
