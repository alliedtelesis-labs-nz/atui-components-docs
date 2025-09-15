import type { Components, JSX } from "../types/components";

interface AtTree extends Components.AtTree, HTMLElement {}
export const AtTree: {
    prototype: AtTree;
    new (): AtTree;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
