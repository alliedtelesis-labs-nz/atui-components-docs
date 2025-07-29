import type { Components, JSX } from "../types/components";

interface AtuiLayout extends Components.AtuiLayout, HTMLElement {}
export const AtuiLayout: {
    prototype: AtuiLayout;
    new (): AtuiLayout;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
