import type { Components, JSX } from "../types/components";

interface AtuiMultiSelect extends Components.AtuiMultiSelect, HTMLElement {}
export const AtuiMultiSelect: {
    prototype: AtuiMultiSelect;
    new (): AtuiMultiSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
