import type { Components, JSX } from "../types/components";

interface AtInputNumeric extends Components.AtInputNumeric, HTMLElement {}
export const AtInputNumeric: {
    prototype: AtInputNumeric;
    new (): AtInputNumeric;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
