import type { Components, JSX } from "../types/components";

interface AtResizableGroup extends Components.AtResizableGroup, HTMLElement {}
export const AtResizableGroup: {
    prototype: AtResizableGroup;
    new (): AtResizableGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
