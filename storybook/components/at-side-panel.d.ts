import type { Components, JSX } from "../types/components";

interface AtSidePanel extends Components.AtSidePanel, HTMLElement {}
export const AtSidePanel: {
    prototype: AtSidePanel;
    new (): AtSidePanel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
