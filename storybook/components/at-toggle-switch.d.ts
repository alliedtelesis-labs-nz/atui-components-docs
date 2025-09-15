import type { Components, JSX } from "../types/components";

interface AtToggleSwitch extends Components.AtToggleSwitch, HTMLElement {}
export const AtToggleSwitch: {
    prototype: AtToggleSwitch;
    new (): AtToggleSwitch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
