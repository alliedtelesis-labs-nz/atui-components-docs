import type { Components, JSX } from "../types/components";

interface AtBreadcrumbItem extends Components.AtBreadcrumbItem, HTMLElement {}
export const AtBreadcrumbItem: {
    prototype: AtBreadcrumbItem;
    new (): AtBreadcrumbItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
