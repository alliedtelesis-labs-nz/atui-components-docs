import type { Components, JSX } from "../types/components";

interface AtButtonGroupOption extends Components.AtButtonGroupOption, HTMLElement {}
export const AtButtonGroupOption: {
    prototype: AtButtonGroupOption;
    new (): AtButtonGroupOption;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
