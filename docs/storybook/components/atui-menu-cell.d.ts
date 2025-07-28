import type { Components, JSX } from "../types/components";

interface AtuiMenuCell extends Components.AtuiMenuCell, HTMLElement {}
export const AtuiMenuCell: {
    prototype: AtuiMenuCell;
    new (): AtuiMenuCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
