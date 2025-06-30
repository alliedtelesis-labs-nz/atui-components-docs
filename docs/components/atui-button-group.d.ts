import type { Components, JSX } from "../types/components";

interface AtuiButtonGroup extends Components.AtuiButtonGroup, HTMLElement {}
export const AtuiButtonGroup: {
    prototype: AtuiButtonGroup;
    new (): AtuiButtonGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
