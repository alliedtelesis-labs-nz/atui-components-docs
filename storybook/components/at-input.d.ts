import type { Components, JSX } from "../types/components";

interface AtInput extends Components.AtInput, HTMLElement {}
export const AtInput: {
    prototype: AtInput;
    new (): AtInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
