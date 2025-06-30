import type { Components, JSX } from "../types/components";

interface AtuiImageCell extends Components.AtuiImageCell, HTMLElement {}
export const AtuiImageCell: {
    prototype: AtuiImageCell;
    new (): AtuiImageCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
