import type { Components, JSX } from "../types/components";

interface AtuiSelect extends Components.AtuiSelect, HTMLElement {}
export const AtuiSelect: {
    prototype: AtuiSelect;
    new (): AtuiSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
