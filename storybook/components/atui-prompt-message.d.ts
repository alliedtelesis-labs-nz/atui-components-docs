import type { Components, JSX } from "../types/components";

interface AtuiPromptMessage extends Components.AtuiPromptMessage, HTMLElement {}
export const AtuiPromptMessage: {
    prototype: AtuiPromptMessage;
    new (): AtuiPromptMessage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
