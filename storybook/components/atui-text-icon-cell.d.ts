import type { Components, JSX } from "../types/components";

interface AtuiTextIconCell extends Components.AtuiTextIconCell, HTMLElement {}
export const AtuiTextIconCell: {
    prototype: AtuiTextIconCell;
    new (): AtuiTextIconCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
