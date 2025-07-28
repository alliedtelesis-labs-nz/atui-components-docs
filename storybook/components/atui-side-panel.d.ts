import type { Components, JSX } from "../types/components";

interface AtuiSidePanel extends Components.AtuiSidePanel, HTMLElement {}
export const AtuiSidePanel: {
    prototype: AtuiSidePanel;
    new (): AtuiSidePanel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
