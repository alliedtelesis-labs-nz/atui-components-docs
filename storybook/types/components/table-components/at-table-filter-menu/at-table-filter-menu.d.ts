import { EventEmitter } from '../../../stencil-public-runtime';
import { AtITableColumnDef } from '../../../models/searchTableModel';
import { AtIFilterGroup } from '../../../types';
/**
 * @category Data Tables
 * @description A menu component for filtering table data. Opens the at-filter-form builder so users can add field/operator/value conditions.
 * @dependency at-filter-form
 */
export declare class AtTableFilterMenu {
    /**
     * Column definitions used in your at-table
     */
    col_defs: AtITableColumnDef[];
    /**
     * Currently active filters, used to seed the form when the menu is opened
     */
    filters?: AtIFilterGroup;
    translations: any;
    el: HTMLAtTableFilterMenuElement;
    private menuEl?;
    /**
     * Emits the active filters when the user applies a search
     */
    atChange: EventEmitter<AtIFilterGroup>;
    /**
     * Opens the filter menu, showing the filter form seeded with the active filters.
     */
    openMenu(): Promise<void>;
    private get filterConfig();
    private isFilterableColumn;
    private convertDropdownKeysToSelectOptions;
    componentWillLoad(): Promise<void>;
    private handleSearch;
    private handleCancel;
    render(): any;
}
