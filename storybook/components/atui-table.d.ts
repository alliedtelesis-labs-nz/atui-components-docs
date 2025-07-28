import type { Components, JSX } from "../types/components";

interface AtuiTable extends Components.AtuiTable, HTMLElement {}
export const AtuiTable: {
    prototype: AtuiTable;
    new (): AtuiTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
