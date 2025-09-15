import type { Components, JSX } from "../types/components";

interface AtTableActions extends Components.AtTableActions, HTMLElement {}
export const AtTableActions: {
    prototype: AtTableActions;
    new (): AtTableActions;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
