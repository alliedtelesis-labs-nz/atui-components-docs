import type { Components, JSX } from "../types/components";

interface AtMessage extends Components.AtMessage, HTMLElement {}
export const AtMessage: {
    prototype: AtMessage;
    new (): AtMessage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
