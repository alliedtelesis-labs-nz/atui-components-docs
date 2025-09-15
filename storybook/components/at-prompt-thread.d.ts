import type { Components, JSX } from "../types/components";

interface AtPromptThread extends Components.AtPromptThread, HTMLElement {}
export const AtPromptThread: {
    prototype: AtPromptThread;
    new (): AtPromptThread;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
