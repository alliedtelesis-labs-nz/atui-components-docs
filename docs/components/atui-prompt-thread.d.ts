import type { Components, JSX } from "../types/components";

interface AtuiPromptThread extends Components.AtuiPromptThread, HTMLElement {}
export const AtuiPromptThread: {
    prototype: AtuiPromptThread;
    new (): AtuiPromptThread;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
