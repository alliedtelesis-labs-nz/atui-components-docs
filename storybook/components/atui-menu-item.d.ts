import type { Components, JSX } from "../types/components";

interface AtuiMenuItem extends Components.AtuiMenuItem, HTMLElement {}
export const AtuiMenuItem: {
    prototype: AtuiMenuItem;
    new (): AtuiMenuItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
