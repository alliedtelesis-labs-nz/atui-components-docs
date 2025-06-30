import type { Components, JSX } from "../types/components";

interface AtuiTableActions extends Components.AtuiTableActions, HTMLElement {}
export const AtuiTableActions: {
    prototype: AtuiTableActions;
    new (): AtuiTableActions;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
