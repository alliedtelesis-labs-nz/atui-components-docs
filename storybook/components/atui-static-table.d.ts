import type { Components, JSX } from "../types/components";

interface AtuiStaticTable extends Components.AtuiStaticTable, HTMLElement {}
export const AtuiStaticTable: {
    prototype: AtuiStaticTable;
    new (): AtuiStaticTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
