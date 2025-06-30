import type { Components, JSX } from "../types/components";

interface AtuiAvatar extends Components.AtuiAvatar, HTMLElement {}
export const AtuiAvatar: {
    prototype: AtuiAvatar;
    new (): AtuiAvatar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
