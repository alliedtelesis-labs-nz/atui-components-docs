import type { Components, JSX } from "../types/components";

interface AtSelectGroup extends Components.AtSelectGroup, HTMLElement {}
export const AtSelectGroup: {
    prototype: AtSelectGroup;
    new (): AtSelectGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
