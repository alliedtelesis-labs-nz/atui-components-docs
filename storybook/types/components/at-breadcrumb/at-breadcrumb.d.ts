import { EventEmitter } from '../../stencil-public-runtime';
/**
 * A navigation breadcrumb component showing the user's current location in a hierarchical structure.
 * Provides clickable path navigation with customizable separators and accessibility features.
 *
 * @category Navigation
 * @slot - Can be used to place atui-breadcrumb-item(s) and atui-breadcrumb-separator(s) when `values` prop is not set
 */
export declare class AtBreadcrumbComponent {
    /**
     * Function to get the prefix for breadcrumbs.
     */
    get_prefix: (idx: number) => string;
    /**
     * Delimiter between the prefix and the prefix.
     */
    prefix_delimiter: string;
    /**
     * Used to place atui-breadcrumb-item(s) and atui-breadcrumb-separator(s) automatically with the string values given
     */
    values: string[];
    el: any;
    /**
     * Emits when one of the breadcrumb-items is clicked, `event.detail` is the 0-based index of the breadcrumb-item
     */
    atuiClick: EventEmitter<number>;
    handleClick(event: Event): void;
    render(): any;
}
