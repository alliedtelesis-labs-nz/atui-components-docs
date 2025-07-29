import type { Components, JSX } from "../types/components";

interface AtuiLoading extends Components.AtuiLoading, HTMLElement {}
export const AtuiLoading: {
    prototype: AtuiLoading;
    new (): AtuiLoading;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
