import type { Components, JSX } from "../types/components";

interface AtuiTableFilters extends Components.AtuiTableFilters, HTMLElement {}
export const AtuiTableFilters: {
    prototype: AtuiTableFilters;
    new (): AtuiTableFilters;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
