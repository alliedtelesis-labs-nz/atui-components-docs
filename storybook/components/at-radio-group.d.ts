import type { Components, JSX } from "../types/components";

interface AtRadioGroup extends Components.AtRadioGroup, HTMLElement {}
export const AtRadioGroup: {
    prototype: AtRadioGroup;
    new (): AtRadioGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
