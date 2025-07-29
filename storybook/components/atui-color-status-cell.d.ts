import type { Components, JSX } from "../types/components";

interface AtuiColorStatusCell extends Components.AtuiColorStatusCell, HTMLElement {}
export const AtuiColorStatusCell: {
    prototype: AtuiColorStatusCell;
    new (): AtuiColorStatusCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
