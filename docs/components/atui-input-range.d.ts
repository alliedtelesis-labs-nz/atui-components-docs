import type { Components, JSX } from "../types/components";

interface AtuiInputRange extends Components.AtuiInputRange, HTMLElement {}
export const AtuiInputRange: {
    prototype: AtuiInputRange;
    new (): AtuiInputRange;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
