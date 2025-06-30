import type { Components, JSX } from "../types/components";

interface AtuiToggleCell extends Components.AtuiToggleCell, HTMLElement {}
export const AtuiToggleCell: {
    prototype: AtuiToggleCell;
    new (): AtuiToggleCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
