import type { Components, JSX } from "../types/components";

interface AtuiCheckboxHeader extends Components.AtuiCheckboxHeader, HTMLElement {}
export const AtuiCheckboxHeader: {
    prototype: AtuiCheckboxHeader;
    new (): AtuiCheckboxHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
