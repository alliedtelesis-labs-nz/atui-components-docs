import type { Components, JSX } from "../types/components";

interface AtuiCustomTimeRange extends Components.AtuiCustomTimeRange, HTMLElement {}
export const AtuiCustomTimeRange: {
    prototype: AtuiCustomTimeRange;
    new (): AtuiCustomTimeRange;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
