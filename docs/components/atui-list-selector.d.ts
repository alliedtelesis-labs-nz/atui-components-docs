import type { Components, JSX } from "../types/components";

interface AtuiListSelector extends Components.AtuiListSelector, HTMLElement {}
export const AtuiListSelector: {
    prototype: AtuiListSelector;
    new (): AtuiListSelector;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
