import type { Components, JSX } from "../types/components";

interface AtuiTab extends Components.AtuiTab, HTMLElement {}
export const AtuiTab: {
    prototype: AtuiTab;
    new (): AtuiTab;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
