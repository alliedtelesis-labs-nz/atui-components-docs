import type { Components, JSX } from "../types/components";

interface AtuiBadge extends Components.AtuiBadge, HTMLElement {}
export const AtuiBadge: {
    prototype: AtuiBadge;
    new (): AtuiBadge;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
