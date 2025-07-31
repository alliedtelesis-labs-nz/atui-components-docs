import type { Components, JSX } from "../types/components";

interface AtuiPromptContainer extends Components.AtuiPromptContainer, HTMLElement {}
export const AtuiPromptContainer: {
    prototype: AtuiPromptContainer;
    new (): AtuiPromptContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
