import type { Components, JSX } from "../types/components";

interface AtHeader extends Components.AtHeader, HTMLElement {}
export const AtHeader: {
    prototype: AtHeader;
    new (): AtHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
