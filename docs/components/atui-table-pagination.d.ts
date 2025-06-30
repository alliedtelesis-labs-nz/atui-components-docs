import type { Components, JSX } from "../types/components";

interface AtuiTablePagination extends Components.AtuiTablePagination, HTMLElement {}
export const AtuiTablePagination: {
    prototype: AtuiTablePagination;
    new (): AtuiTablePagination;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
