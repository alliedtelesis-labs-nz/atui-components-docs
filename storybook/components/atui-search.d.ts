import type { Components, JSX } from "../types/components";

interface AtuiSearch extends Components.AtuiSearch, HTMLElement {}
export const AtuiSearch: {
    prototype: AtuiSearch;
    new (): AtuiSearch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
