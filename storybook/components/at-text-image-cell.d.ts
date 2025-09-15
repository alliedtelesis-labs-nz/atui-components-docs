import type { Components, JSX } from "../types/components";

interface AtTextImageCell extends Components.AtTextImageCell, HTMLElement {}
export const AtTextImageCell: {
    prototype: AtTextImageCell;
    new (): AtTextImageCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
