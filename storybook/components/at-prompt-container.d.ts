import type { Components, JSX } from "../types/components";

interface AtPromptContainer extends Components.AtPromptContainer, HTMLElement {}
export const AtPromptContainer: {
    prototype: AtPromptContainer;
    new (): AtPromptContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
