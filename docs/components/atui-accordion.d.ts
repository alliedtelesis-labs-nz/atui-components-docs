import type { Components, JSX } from "../types/components";

interface AtuiAccordion extends Components.AtuiAccordion, HTMLElement {}
export const AtuiAccordion: {
    prototype: AtuiAccordion;
    new (): AtuiAccordion;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
