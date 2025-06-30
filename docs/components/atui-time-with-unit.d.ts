import type { Components, JSX } from "../types/components";

interface AtuiTimeWithUnit extends Components.AtuiTimeWithUnit, HTMLElement {}
export const AtuiTimeWithUnit: {
    prototype: AtuiTimeWithUnit;
    new (): AtuiTimeWithUnit;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
