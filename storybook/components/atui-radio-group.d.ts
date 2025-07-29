import type { Components, JSX } from "../types/components";

interface AtuiRadioGroup extends Components.AtuiRadioGroup, HTMLElement {}
export const AtuiRadioGroup: {
    prototype: AtuiRadioGroup;
    new (): AtuiRadioGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
