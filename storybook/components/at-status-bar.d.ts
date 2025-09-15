import type { Components, JSX } from "../types/components";

interface AtStatusBar extends Components.AtStatusBar, HTMLElement {}
export const AtStatusBar: {
    prototype: AtStatusBar;
    new (): AtStatusBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
