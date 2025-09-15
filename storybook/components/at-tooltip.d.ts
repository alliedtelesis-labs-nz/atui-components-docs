import type { Components, JSX } from "../types/components";

interface AtTooltip extends Components.AtTooltip, HTMLElement {}
export const AtTooltip: {
    prototype: AtTooltip;
    new (): AtTooltip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
