import type { Components, JSX } from "../types/components";

interface AtuiInputNumeric extends Components.AtuiInputNumeric, HTMLElement {}
export const AtuiInputNumeric: {
    prototype: AtuiInputNumeric;
    new (): AtuiInputNumeric;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
