import type { Components, JSX } from "../types/components";

interface AtuiFormLabel extends Components.AtuiFormLabel, HTMLElement {}
export const AtuiFormLabel: {
    prototype: AtuiFormLabel;
    new (): AtuiFormLabel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
