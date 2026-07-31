import type { Components, JSX } from "../types/components";

interface AtProgressBarCell extends Components.AtProgressBarCell, HTMLElement {}
export const AtProgressBarCell: {
    prototype: AtProgressBarCell;
    new (): AtProgressBarCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
