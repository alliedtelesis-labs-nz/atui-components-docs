import type { Components, JSX } from "../types/components";

interface AtIcon extends Components.AtIcon, HTMLElement {}
export const AtIcon: {
    prototype: AtIcon;
    new (): AtIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
