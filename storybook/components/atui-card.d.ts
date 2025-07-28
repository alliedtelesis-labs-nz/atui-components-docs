import type { Components, JSX } from "../types/components";

interface AtuiCard extends Components.AtuiCard, HTMLElement {}
export const AtuiCard: {
    prototype: AtuiCard;
    new (): AtuiCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
