import { EventEmitter } from '../../../stencil-public-runtime';
import { SelectOption } from '../../../types/select';
/**
 * @category Data Tables
 * @description Optional component for use with ```<atui-table>```.
 * Provides controls for pagination if you would like to
 * have control of the table's pagination.
 */
export declare class AtuiTablePagination {
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
     * Emits event with ```event.detail``` as the new page number
     */
    atuiChange: EventEmitter<number>;
    /**
     * Emits event with ```event.detail``` as the new page size
     */
    atuiPageSizeChange: EventEmitter<number>;
    render(): any;
}
