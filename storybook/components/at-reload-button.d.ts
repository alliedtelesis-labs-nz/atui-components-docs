import type { Components, JSX } from "../types/components";

interface AtReloadButton extends Components.AtReloadButton, HTMLElement {}
export const AtReloadButton: {
    prototype: AtReloadButton;
    new (): AtReloadButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
