import type { Components, JSX } from "../types/components";

interface AtuiTableFilterMenu extends Components.AtuiTableFilterMenu, HTMLElement {}
export const AtuiTableFilterMenu: {
    prototype: AtuiTableFilterMenu;
    new (): AtuiTableFilterMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
