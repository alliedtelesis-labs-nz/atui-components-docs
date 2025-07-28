import type { Components, JSX } from "../types/components";

interface AtuiSrcDest extends Components.AtuiSrcDest, HTMLElement {}
export const AtuiSrcDest: {
    prototype: AtuiSrcDest;
    new (): AtuiSrcDest;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
