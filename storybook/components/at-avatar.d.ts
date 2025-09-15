import type { Components, JSX } from "../types/components";

interface AtAvatar extends Components.AtAvatar, HTMLElement {}
export const AtAvatar: {
    prototype: AtAvatar;
    new (): AtAvatar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
