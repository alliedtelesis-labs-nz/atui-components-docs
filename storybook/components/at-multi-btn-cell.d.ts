import type { Components, JSX } from "../types/components";

interface AtMultiBtnCell extends Components.AtMultiBtnCell, HTMLElement {}
export const AtMultiBtnCell: {
    prototype: AtMultiBtnCell;
    new (): AtMultiBtnCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
