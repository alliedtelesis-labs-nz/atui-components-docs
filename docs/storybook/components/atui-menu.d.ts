import type { Components, JSX } from "../types/components";

interface AtuiMenu extends Components.AtuiMenu, HTMLElement {}
export const AtuiMenu: {
    prototype: AtuiMenu;
    new (): AtuiMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
