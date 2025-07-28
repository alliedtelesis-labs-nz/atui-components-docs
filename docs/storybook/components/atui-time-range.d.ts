import type { Components, JSX } from "../types/components";

interface AtuiTimeRange extends Components.AtuiTimeRange, HTMLElement {}
export const AtuiTimeRange: {
    prototype: AtuiTimeRange;
    new (): AtuiTimeRange;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
