import { ColDef, GridApi, IRowNode } from 'ag-grid-community';
type RowUpdateOptions = {
    flash: boolean;
    forceRefresh: boolean;
};
type RowUpdate<T> = {
    index: number;
    update: T;
};
/**
 * @category Data Tables
 * @description A searchable data table component that combines table functionality with integrated search capabilities. Provides real-time filtering and search result highlighting.
 * @slot actions - Used to place actions related to table content
 * @slot multi-select-actions - Used to place actions related to row selection
 */
export declare class AtSearchTable {
    /**
     * Table data passed to at-table component.
     */
    table_data: {
        items: any[];
        total: number;
    };
    /**
     * Label for the table, appears above the search input.
     */
    label: string;
    /**
     * Label for the search input.
     */
    search_label: string;
    /**
     * Hint text displayed below the search label.
     */
    search_hint: string;
    /**
     * Info text displayed in the search info tooltip.
     */
    search_info_tooltip: string;
    /**
     * Column definitions passed to at-table component.
     */
    col_defs: ColDef[];
    /**
     * Default page size of the table
     */
    page_size?: number;
    /**
     * If true the table dropdown filters will not be added
     */
    hide_dropdown_filters?: boolean;
    /**
     * If true the column manager will not be added
     */
    hide_column_manager?: boolean;
    /**
     * If true the table export menu will not be added
     */
    hide_export_menu?: boolean;
    /**
     * If true, disables pagination on the table and shows all data at once.
     * Useful for server-side pagination where you want to control pagination externally.
     */
    use_custom_pagination?: boolean;
    /**
     * If true, enables automatic column resizing to fit available space.
     * Columns will be sized proportionally based on their content and constraints. Fixed widths in column defs will be respected.
     */
    auto_size_columns: boolean;
    el: HTMLElement;
    translations: any;
    agGrid: GridApi;
    tableCreated: boolean;
    activeFilters: {
        [key: string]: string;
    };
    selectedFilters: {
        id: string;
        value: string;
    }[];
    menuSelectedIds: string[];
    searchValue: string;
    tableEl: HTMLAtTableElement;
    handleSelectedFiltersChange(newValue: {
        id: string;
        value: string;
    }[]): void;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): Promise<void>;
    componentDidUpdate(): Promise<void>;
    /**
     * Updates the data of rows in the AG Grid based on their displayed row index.
     *
     * Use this method when you need to programmatically update one or more specific rows in the grid,
     * identified by their current displayed index. This is particularly useful when you want to perform
     * partial updates (such as in-place cell editing, real-time updates, or upon receiving new data from a
     * server), and want to reflect these changes immediately in the UI with optional visual feedback.
     *
     * @template T - The data type of the row's underlying data structure.
     * @param {RowUpdate<T>[]} rowUpdates - An array of objects specifying the row indices and the data updates to apply.
     *   - `index`: The displayed index of the row to update.
     *   - `update`: An object containing the updated data for the row.
     * @param {RowUpdateOptions} [options] - Optional settings for the update operation.
     *   - `flash`: Whether to visually flash the updated rows after the data change (improves user visibility).
     *   - `forceRefresh`: Whether to force refresh the row cells after updating (useful for advanced rendering scenarios).
     *
     * @example
     * // Update row at displayed index 2 with new values and flash the change
     * updateRowByIndex([{ index: 2, update: { status: 'Processed' }}], { flash: true });
     *
     * @remarks
     * - This function works with currently rendered rows; if rows are virtualized or paged out, ensure
     *   the specified indices match the grid's current rendering context.
     * - Recommended for cases where quick, UI-driven row data mutations are required (such as action buttons,
     *   websocket pushes, or UI triggers).
     */
    updateRowByIndex<T>(rowUpdates: RowUpdate<T>[], options?: RowUpdateOptions): Promise<void>;
    /**
     * Returns the **currently displayed row nodes** from the ag-Grid instance.
     *
     * This asynchronous method retrieves an array of row nodes representing the rows currently visible
     * (rendered) in the grid, after filtering, sorting, and other view-based operations.
     *
     * @template T The data type contained in each row node.
     * @returns {Promise<IRowNode<T>[]>} Promise resolving to an array of displayed row nodes.
     */
    getDisplayedRows<T>(): Promise<IRowNode<T>[]>;
    private initGrid;
    private setupExternalFilters;
    handleColumnChange(event: CustomEvent): void;
    handleFilterChange(event: CustomEvent): void;
    private handleMenuFilterChange;
    private handleFilterListChange;
    private updateActiveFilters;
    handleSearchChange(event: CustomEvent): void;
    render(): any;
}
export {};
