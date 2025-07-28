import type { Components, JSX } from "../types/components";

interface AtuiMessage extends Components.AtuiMessage, HTMLElement {}
export const AtuiMessage: {
    prototype: AtuiMessage;
    new (): AtuiMessage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
