import type { Components, JSX } from "../types/components";

interface AtuiDialog extends Components.AtuiDialog, HTMLElement {}
export const AtuiDialog: {
    prototype: AtuiDialog;
    new (): AtuiDialog;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
