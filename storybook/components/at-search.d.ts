import type { Components, JSX } from "../types/components";

interface AtSearch extends Components.AtSearch, HTMLElement {}
export const AtSearch: {
    prototype: AtSearch;
    new (): AtSearch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
