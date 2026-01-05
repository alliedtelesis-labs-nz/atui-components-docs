import type { Components, JSX } from "../types/components";

interface AtInputTime extends Components.AtInputTime, HTMLElement {}
export const AtInputTime: {
    prototype: AtInputTime;
    new (): AtInputTime;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
