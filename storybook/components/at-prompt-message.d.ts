import type { Components, JSX } from "../types/components";

interface AtPromptMessage extends Components.AtPromptMessage, HTMLElement {}
export const AtPromptMessage: {
    prototype: AtPromptMessage;
    new (): AtPromptMessage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
