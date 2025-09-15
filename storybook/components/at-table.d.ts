import type { Components, JSX } from "../types/components";

interface AtTable extends Components.AtTable, HTMLElement {}
export const AtTable: {
    prototype: AtTable;
    new (): AtTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
