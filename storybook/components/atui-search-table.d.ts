import type { Components, JSX } from "../types/components";

interface AtuiSearchTable extends Components.AtuiSearchTable, HTMLElement {}
export const AtuiSearchTable: {
    prototype: AtuiSearchTable;
    new (): AtuiSearchTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
