import type { Components, JSX } from "../types/components";

interface AtFormLabel extends Components.AtFormLabel, HTMLElement {}
export const AtFormLabel: {
    prototype: AtFormLabel;
    new (): AtFormLabel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
