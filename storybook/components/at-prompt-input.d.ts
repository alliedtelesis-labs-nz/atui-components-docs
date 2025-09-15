import type { Components, JSX } from "../types/components";

interface AtPromptInput extends Components.AtPromptInput, HTMLElement {}
export const AtPromptInput: {
    prototype: AtPromptInput;
    new (): AtPromptInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
