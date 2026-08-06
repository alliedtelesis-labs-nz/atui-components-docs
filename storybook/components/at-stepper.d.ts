import type { Components, JSX } from "../types/components";

interface AtStepper extends Components.AtStepper, HTMLElement {}
export const AtStepper: {
    prototype: AtStepper;
    new (): AtStepper;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
