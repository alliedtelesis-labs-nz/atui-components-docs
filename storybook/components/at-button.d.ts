import type { Components, JSX } from "../types/components";

interface AtButton extends Components.AtButton, HTMLElement {}
export const AtButton: {
    prototype: AtButton;
    new (): AtButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
