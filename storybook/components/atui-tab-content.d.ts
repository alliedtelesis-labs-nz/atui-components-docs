import type { Components, JSX } from "../types/components";

interface AtuiTabContent extends Components.AtuiTabContent, HTMLElement {}
export const AtuiTabContent: {
    prototype: AtuiTabContent;
    new (): AtuiTabContent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
