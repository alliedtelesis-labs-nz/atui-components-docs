import type { Components, JSX } from "../types/components";

interface AtuiTextImageCell extends Components.AtuiTextImageCell, HTMLElement {}
export const AtuiTextImageCell: {
    prototype: AtuiTextImageCell;
    new (): AtuiTextImageCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
