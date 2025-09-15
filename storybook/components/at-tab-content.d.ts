import type { Components, JSX } from "../types/components";

interface AtTabContent extends Components.AtTabContent, HTMLElement {}
export const AtTabContent: {
    prototype: AtTabContent;
    new (): AtTabContent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
