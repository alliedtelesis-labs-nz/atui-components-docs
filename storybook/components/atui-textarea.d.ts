import type { Components, JSX } from "../types/components";

interface AtuiTextarea extends Components.AtuiTextarea, HTMLElement {}
export const AtuiTextarea: {
    prototype: AtuiTextarea;
    new (): AtuiTextarea;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
