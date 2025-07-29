import type { Components, JSX } from "../types/components";

interface AtuiCheckbox extends Components.AtuiCheckbox, HTMLElement {}
export const AtuiCheckbox: {
    prototype: AtuiCheckbox;
    new (): AtuiCheckbox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
