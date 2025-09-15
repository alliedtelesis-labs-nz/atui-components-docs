import type { Components, JSX } from "../types/components";

interface AtDialog extends Components.AtDialog, HTMLElement {}
export const AtDialog: {
    prototype: AtDialog;
    new (): AtDialog;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
