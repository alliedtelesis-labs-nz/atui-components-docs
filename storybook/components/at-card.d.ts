import type { Components, JSX } from "../types/components";

interface AtCard extends Components.AtCard, HTMLElement {}
export const AtCard: {
    prototype: AtCard;
    new (): AtCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
