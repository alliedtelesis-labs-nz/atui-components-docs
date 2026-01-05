import type { Components, JSX } from "../types/components";

interface AtProgressBar extends Components.AtProgressBar, HTMLElement {}
export const AtProgressBar: {
    prototype: AtProgressBar;
    new (): AtProgressBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
