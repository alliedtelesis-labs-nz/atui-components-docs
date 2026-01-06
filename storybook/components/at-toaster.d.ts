import type { Components, JSX } from "../types/components";

interface AtToaster extends Components.AtToaster, HTMLElement {}
export const AtToaster: {
    prototype: AtToaster;
    new (): AtToaster;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
