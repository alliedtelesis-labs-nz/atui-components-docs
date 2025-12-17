import type { Components, JSX } from "../types/components";

interface AtTabs extends Components.AtTabs, HTMLElement {}
export const AtTabs: {
    prototype: AtTabs;
    new (): AtTabs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
