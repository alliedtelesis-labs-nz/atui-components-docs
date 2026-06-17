import type { Components, JSX } from "../types/components";

interface AtRelativeTime extends Components.AtRelativeTime, HTMLElement {}
export const AtRelativeTime: {
    prototype: AtRelativeTime;
    new (): AtRelativeTime;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
