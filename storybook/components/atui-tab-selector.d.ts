import type { Components, JSX } from "../types/components";

interface AtuiTabSelector extends Components.AtuiTabSelector, HTMLElement {}
export const AtuiTabSelector: {
    prototype: AtuiTabSelector;
    new (): AtuiTabSelector;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
