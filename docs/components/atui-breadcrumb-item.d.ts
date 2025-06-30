import type { Components, JSX } from "../types/components";

interface AtuiBreadcrumbItem extends Components.AtuiBreadcrumbItem, HTMLElement {}
export const AtuiBreadcrumbItem: {
    prototype: AtuiBreadcrumbItem;
    new (): AtuiBreadcrumbItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
