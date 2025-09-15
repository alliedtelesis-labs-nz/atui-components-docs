import type { Components, JSX } from "../types/components";

interface AtBreadcrumb extends Components.AtBreadcrumb, HTMLElement {}
export const AtBreadcrumb: {
    prototype: AtBreadcrumb;
    new (): AtBreadcrumb;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
