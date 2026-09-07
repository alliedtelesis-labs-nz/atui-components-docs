import type { Components, JSX } from "../types/components";

interface AtRadioCell extends Components.AtRadioCell, HTMLElement {}
export const AtRadioCell: {
    prototype: AtRadioCell;
    new (): AtRadioCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
