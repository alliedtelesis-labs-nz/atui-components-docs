import type { Components, JSX } from "../types/components";

interface AtuiPromptInput extends Components.AtuiPromptInput, HTMLElement {}
export const AtuiPromptInput: {
    prototype: AtuiPromptInput;
    new (): AtuiPromptInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
