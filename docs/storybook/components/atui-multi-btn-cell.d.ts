import type { Components, JSX } from "../types/components";

interface AtuiMultiBtnCell extends Components.AtuiMultiBtnCell, HTMLElement {}
export const AtuiMultiBtnCell: {
    prototype: AtuiMultiBtnCell;
    new (): AtuiMultiBtnCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
