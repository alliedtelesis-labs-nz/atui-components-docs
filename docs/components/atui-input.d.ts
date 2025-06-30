import type { Components, JSX } from "../types/components";

interface AtuiInput extends Components.AtuiInput, HTMLElement {}
export const AtuiInput: {
    prototype: AtuiInput;
    new (): AtuiInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
