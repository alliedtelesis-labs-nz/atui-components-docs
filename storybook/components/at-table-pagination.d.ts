import type { Components, JSX } from "../types/components";

interface AtTablePagination extends Components.AtTablePagination, HTMLElement {}
export const AtTablePagination: {
    prototype: AtTablePagination;
    new (): AtTablePagination;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
