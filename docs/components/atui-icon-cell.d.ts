import type { Components, JSX } from "../types/components";

interface AtuiIconCell extends Components.AtuiIconCell, HTMLElement {}
export const AtuiIconCell: {
    prototype: AtuiIconCell;
    new (): AtuiIconCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
