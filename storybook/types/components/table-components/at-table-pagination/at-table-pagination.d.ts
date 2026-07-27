import { EventEmitter } from '../../../stencil-public-runtime';
import { AtISelectOption } from '../../../types/select';
/**
 * @category Data Tables
 * @description Optional component for use with ```<at-table>```.
 * Provides controls for pagination if you would like to
 * have control of the table's pagination.
 */
export declare class AtTablePagination {
    /**
     * Current page number
     */
    current_page: number;
    /**
     * Total number of pages
     */
    num_pages: number;
    /**
     * Options provided in dropdown for page sizes. When omitted a standard set
     * is used.
     */
    page_size_options?: AtISelectOption[];
    /**
     * The number of table rows displayed per page
     */
    page_size: number;
    /**
     * The options actually rendered in the selector: the provided (or default)
     * options, with the active `page_size` guaranteed to be present so the
     * selected value always matches the number of rows loaded — even when it
     * isn't one of the listed steps.
     */
    private get resolvedPageSizeOptions();
    /**
     * Emits event with ```event.detail``` as the new page number
     */
    atChange: EventEmitter<number>;
    /**
     * Emits event with ```event.detail``` as the new page size
     */
    atPageSizeChange: EventEmitter<number>;
    render(): any;
}
