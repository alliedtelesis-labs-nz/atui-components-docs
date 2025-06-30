import type { Components, JSX } from "../types/components";

interface AtuiTree extends Components.AtuiTree, HTMLElement {}
export const AtuiTree: {
    prototype: AtuiTree;
    new (): AtuiTree;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
