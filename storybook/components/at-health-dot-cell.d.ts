import type { Components, JSX } from "../types/components";

interface AtHealthDotCell extends Components.AtHealthDotCell, HTMLElement {}
export const AtHealthDotCell: {
    prototype: AtHealthDotCell;
    new (): AtHealthDotCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
