import type { Components, JSX } from "../types/components";

interface AtResizableHandle extends Components.AtResizableHandle, HTMLElement {}
export const AtResizableHandle: {
    prototype: AtResizableHandle;
    new (): AtResizableHandle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
