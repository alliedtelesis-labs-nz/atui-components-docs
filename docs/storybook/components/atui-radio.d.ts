import type { Components, JSX } from "../types/components";

interface AtuiRadio extends Components.AtuiRadio, HTMLElement {}
export const AtuiRadio: {
    prototype: AtuiRadio;
    new (): AtuiRadio;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
