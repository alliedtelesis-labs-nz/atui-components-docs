import type { Components, JSX } from "../types/components";

interface AtRadio extends Components.AtRadio, HTMLElement {}
export const AtRadio: {
    prototype: AtRadio;
    new (): AtRadio;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
