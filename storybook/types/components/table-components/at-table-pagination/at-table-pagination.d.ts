import { EventEmitter } from '../../../stencil-public-runtime';
import { SelectOption } from '../../../types/select';
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
     * Options provided in dropdown for page sizes.
     */
    page_size_options: SelectOption[];
    /**
     * The number of table rows displayed per page
     */
    page_size: number;
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
