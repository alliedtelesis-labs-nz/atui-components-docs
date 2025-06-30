import type { Components, JSX } from "../types/components";

interface AtuiTitleSubtitleCell extends Components.AtuiTitleSubtitleCell, HTMLElement {}
export const AtuiTitleSubtitleCell: {
    prototype: AtuiTitleSubtitleCell;
    new (): AtuiTitleSubtitleCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
