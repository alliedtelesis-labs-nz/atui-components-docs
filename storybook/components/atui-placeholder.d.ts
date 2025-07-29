import type { Components, JSX } from "../types/components";

interface AtuiPlaceholder extends Components.AtuiPlaceholder, HTMLElement {}
export const AtuiPlaceholder: {
    prototype: AtuiPlaceholder;
    new (): AtuiPlaceholder;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
