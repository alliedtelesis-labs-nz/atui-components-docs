import type { Components, JSX } from "../types/components";

interface AtTextBadgeCell extends Components.AtTextBadgeCell, HTMLElement {}
export const AtTextBadgeCell: {
    prototype: AtTextBadgeCell;
    new (): AtTextBadgeCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
