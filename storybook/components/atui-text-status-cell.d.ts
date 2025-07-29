import type { Components, JSX } from "../types/components";

interface AtuiTextStatusCell extends Components.AtuiTextStatusCell, HTMLElement {}
export const AtuiTextStatusCell: {
    prototype: AtuiTextStatusCell;
    new (): AtuiTextStatusCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
