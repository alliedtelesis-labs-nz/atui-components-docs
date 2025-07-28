import type { Components, JSX } from "../types/components";

interface AtuiBreadcrumb extends Components.AtuiBreadcrumb, HTMLElement {}
export const AtuiBreadcrumb: {
    prototype: AtuiBreadcrumb;
    new (): AtuiBreadcrumb;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
