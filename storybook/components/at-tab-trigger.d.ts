import type { Components, JSX } from "../types/components";

interface AtTabTrigger extends Components.AtTabTrigger, HTMLElement {}
export const AtTabTrigger: {
    prototype: AtTabTrigger;
    new (): AtTabTrigger;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
