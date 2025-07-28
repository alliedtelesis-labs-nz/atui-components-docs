import type { Components, JSX } from "../types/components";

interface AtuiTextCell extends Components.AtuiTextCell, HTMLElement {}
export const AtuiTextCell: {
    prototype: AtuiTextCell;
    new (): AtuiTextCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
