import type { Components, JSX } from "../types/components";

interface AtuiTooltip extends Components.AtuiTooltip, HTMLElement {}
export const AtuiTooltip: {
    prototype: AtuiTooltip;
    new (): AtuiTooltip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
