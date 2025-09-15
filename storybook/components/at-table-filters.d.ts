import type { Components, JSX } from "../types/components";

interface AtTableFilters extends Components.AtTableFilters, HTMLElement {}
export const AtTableFilters: {
    prototype: AtTableFilters;
    new (): AtTableFilters;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
