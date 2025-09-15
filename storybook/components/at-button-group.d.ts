import type { Components, JSX } from "../types/components";

interface AtButtonGroup extends Components.AtButtonGroup, HTMLElement {}
export const AtButtonGroup: {
    prototype: AtButtonGroup;
    new (): AtButtonGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
