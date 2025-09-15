import type { Components, JSX } from "../types/components";

interface AtStaticTable extends Components.AtStaticTable, HTMLElement {}
export const AtStaticTable: {
    prototype: AtStaticTable;
    new (): AtStaticTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
