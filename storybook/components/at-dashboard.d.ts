import type { Components, JSX } from "../types/components";

interface AtDashboard extends Components.AtDashboard, HTMLElement {}
export const AtDashboard: {
    prototype: AtDashboard;
    new (): AtDashboard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
