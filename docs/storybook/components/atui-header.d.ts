import type { Components, JSX } from "../types/components";

interface AtuiHeader extends Components.AtuiHeader, HTMLElement {}
export const AtuiHeader: {
    prototype: AtuiHeader;
    new (): AtuiHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
