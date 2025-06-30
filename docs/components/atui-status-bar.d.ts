import type { Components, JSX } from "../types/components";

interface AtuiStatusBar extends Components.AtuiStatusBar, HTMLElement {}
export const AtuiStatusBar: {
    prototype: AtuiStatusBar;
    new (): AtuiStatusBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
