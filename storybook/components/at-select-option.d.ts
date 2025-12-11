import type { Components, JSX } from "../types/components";

interface AtSelectOption extends Components.AtSelectOption, HTMLElement {}
export const AtSelectOption: {
    prototype: AtSelectOption;
    new (): AtSelectOption;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
