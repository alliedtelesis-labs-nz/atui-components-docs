import type { Components, JSX } from "../types/components";

interface AtuiButton extends Components.AtuiButton, HTMLElement {}
export const AtuiButton: {
    prototype: AtuiButton;
    new (): AtuiButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
