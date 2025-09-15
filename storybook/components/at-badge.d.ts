import type { Components, JSX } from "../types/components";

interface AtBadge extends Components.AtBadge, HTMLElement {}
export const AtBadge: {
    prototype: AtBadge;
    new (): AtBadge;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
