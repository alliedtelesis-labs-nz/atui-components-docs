import type { Components, JSX } from "../types/components";

interface AtResizablePanel extends Components.AtResizablePanel, HTMLElement {}
export const AtResizablePanel: {
    prototype: AtResizablePanel;
    new (): AtResizablePanel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
