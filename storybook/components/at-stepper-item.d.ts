import type { Components, JSX } from "../types/components";

interface AtStepperItem extends Components.AtStepperItem, HTMLElement {}
export const AtStepperItem: {
    prototype: AtStepperItem;
    new (): AtStepperItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
