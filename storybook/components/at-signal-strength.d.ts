import type { Components, JSX } from "../types/components";

interface AtSignalStrength extends Components.AtSignalStrength, HTMLElement {}
export const AtSignalStrength: {
    prototype: AtSignalStrength;
    new (): AtSignalStrength;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
