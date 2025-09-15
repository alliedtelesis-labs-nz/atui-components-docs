import type { Components, JSX } from "../types/components";

interface AtSrcDest extends Components.AtSrcDest, HTMLElement {}
export const AtSrcDest: {
    prototype: AtSrcDest;
    new (): AtSrcDest;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
