import type { Components, JSX } from "../types/components";

interface AtColumnManager extends Components.AtColumnManager, HTMLElement {}
export const AtColumnManager: {
    prototype: AtColumnManager;
    new (): AtColumnManager;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
