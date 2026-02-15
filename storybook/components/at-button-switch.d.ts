import type { Components, JSX } from "../types/components";

interface AtButtonSwitch extends Components.AtButtonSwitch, HTMLElement {}
export const AtButtonSwitch: {
    prototype: AtButtonSwitch;
    new (): AtButtonSwitch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
