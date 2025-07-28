import type { Components, JSX } from "../types/components";

interface AtuiCheckboxGroup extends Components.AtuiCheckboxGroup, HTMLElement {}
export const AtuiCheckboxGroup: {
    prototype: AtuiCheckboxGroup;
    new (): AtuiCheckboxGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
