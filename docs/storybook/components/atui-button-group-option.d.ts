import type { Components, JSX } from "../types/components";

interface AtuiButtonGroupOption extends Components.AtuiButtonGroupOption, HTMLElement {}
export const AtuiButtonGroupOption: {
    prototype: AtuiButtonGroupOption;
    new (): AtuiButtonGroupOption;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
