import type { Components, JSX } from "../types/components";

interface AtColorStatusCell extends Components.AtColorStatusCell, HTMLElement {}
export const AtColorStatusCell: {
    prototype: AtColorStatusCell;
    new (): AtColorStatusCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
