import type { Components, JSX } from "../types/components";

interface AtuiToggleSwitch extends Components.AtuiToggleSwitch, HTMLElement {}
export const AtuiToggleSwitch: {
    prototype: AtuiToggleSwitch;
    new (): AtuiToggleSwitch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
