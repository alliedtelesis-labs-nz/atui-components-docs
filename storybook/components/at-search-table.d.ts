import type { Components, JSX } from "../types/components";

interface AtSearchTable extends Components.AtSearchTable, HTMLElement {}
export const AtSearchTable: {
    prototype: AtSearchTable;
    new (): AtSearchTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
