import type { Components, JSX } from "../types/components";

interface AtControlGroup extends Components.AtControlGroup, HTMLElement {}
export const AtControlGroup: {
    prototype: AtControlGroup;
    new (): AtControlGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
