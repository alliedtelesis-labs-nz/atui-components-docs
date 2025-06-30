import type { Components, JSX } from "../types/components";

interface AtuiColumnManager extends Components.AtuiColumnManager, HTMLElement {}
export const AtuiColumnManager: {
    prototype: AtuiColumnManager;
    new (): AtuiColumnManager;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
