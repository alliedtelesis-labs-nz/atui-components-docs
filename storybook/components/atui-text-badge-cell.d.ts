import type { Components, JSX } from "../types/components";

interface AtuiTextBadgeCell extends Components.AtuiTextBadgeCell, HTMLElement {}
export const AtuiTextBadgeCell: {
    prototype: AtuiTextBadgeCell;
    new (): AtuiTextBadgeCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
