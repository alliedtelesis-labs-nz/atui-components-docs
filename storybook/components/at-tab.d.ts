import type { Components, JSX } from "../types/components";

interface AtTab extends Components.AtTab, HTMLElement {}
export const AtTab: {
    prototype: AtTab;
    new (): AtTab;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
