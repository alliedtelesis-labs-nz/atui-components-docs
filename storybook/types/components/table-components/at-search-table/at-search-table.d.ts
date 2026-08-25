import { EventEmitter } from '../../../stencil-public-runtime';
import { GridApi, IRowNode } from 'ag-grid-community';
import { AtIColumnDetails, AtIPaginationParams, AtISearchTableParams, AtIFilterGroup } from '../../../types';
import { AtITableColumnDef } from '../../../models/searchTableModel';
import { AtISelectOption } from '../../../types/select';
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
 * @slot leading-actions - Used to place actions immediately left of the column manager
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
     * Info text displayed in a tooltip at the right of the search input. When omitted, a tooltip is
     * generated automatically listing any visible columns flagged with
     * `excludeFromGlobalSearch` in their column def; no icon is shown when
     * nothing is excluded. Under `server_side_mode` that flag does not filter -
     * the server matches whichever columns it chooses - so supply this text
     * yourself there rather than relying on the generated tooltip.
     */
    search_info_tooltip: string;
    /**
     * Column definitions passed to at-table component.
     */
    col_defs: AtITableColumnDef[];
    /**
     * External search filters applied to the table data.
     */
    search_filters?: AtIFilterGroup;
    /**
     * Default page size of the table
     */
    page_size?: number;
    /**
     * Options offered in the pagination page-size selector. When omitted a
     * standard set is used. The currently active page size is always included
     * so the selector reflects the number of rows actually being loaded.
     */
    page_size_options?: AtISelectOption[];
    /**
     * Adds the table filters. Off by default - structured column filters earn
     * their place on large data sets, where the search box alone stops being
     * enough to find a row.
     */
    show_table_filters?: boolean;
    /**
     * Adds the column manager. On by default.
     */
    show_column_manager?: boolean;
    /**
     * Adds the table reload button. Off by default - the reload button is
     * opt-in, so existing tables don't gain new UI just from upgrading the
     * library.
     */
    show_reload_button?: boolean;
    /**
     * Shows an indicator on the reload button when the underlying data has
     * changed since it was last loaded. This component does not detect
     * changes itself — set this to true once the consumer knows of an
     * update (e.g. from a websocket or poll) and back to false once the
     * user reloads.
     */
    has_updates?: boolean;
    /**
     * Adds the table export menu. On by default.
     */
    show_export_menu?: boolean;
    /**
     * Offers the CSV export option in the export menu. On by default.
     */
    show_csv_export?: boolean;
    /**
     * Offers the PDF export option in the export menu. On by default.
     */
    show_pdf_export?: boolean;
    /**
     * If true, disables pagination on the table and shows all data at once.
     *
     * This only applies for client-side filtering mode. When `server_side_mode` is enabled,
     * the component always loads the <at-table-pagination> UI for pagination, regardless of this setting.
     */
    use_custom_pagination?: boolean;
    /**
     * If true, enables automatic column resizing to fit available space.
     * Columns will be sized proportionally based on their content and constraints. Fixed widths in column defs will be respected.
     */
    auto_size_columns: boolean;
    /**
     * If true, columns hidden by the column manager are still matched by the search box.
     * Off by default, so hiding a column also stops its content matching, which is what AG
     * Grid's quick filter does on the at-table + at-table-actions path. Enable it to keep a
     * deliberately hidden column searchable.
     */
    search_hidden_columns?: boolean;
    /**
     * If true, enables server-side data loading mode where filtering,
     * searching, and pagination are handled externally
     */
    server_side_mode?: boolean;
    /**
     * If true, displays a loading placeholder and hides table content.
     * Used for server-side data fetching to indicate loading state.
     */
    is_loading: boolean;
    /**
     * Message shown in place of the rows when there is no data to display.
     * Defaults to a translated "No Data" message.
     */
    no_data_message?: string;
    /**
     * Event emitted when search params change in server-side mode.
     * Contains filters, search text, pagination info
     */
    atSearchParamsChange: EventEmitter<AtISearchTableParams>;
    /**
     * Event emitted when the reload button is clicked
     */
    atuiReload: EventEmitter<void>;
    /**
     * Event emitted when CSV export is requested
     */
    atExportCsv: EventEmitter<AtIPaginationParams>;
    /**
     * Event emitted when PDF export is requested
     */
    atExportPdf: EventEmitter<AtIColumnDetails[]>;
    el: HTMLElement;
    translations: any;
    agGrid: GridApi;
    /** Pending `getGridApi()` callers, settled once the grid is built. */
    private gridReady?;
    private resolveGridReady?;
    private rejectGridReady?;
    private filterMenuEl?;
    tableCreated: boolean;
    activeFilters: {
        [key: string]: string;
    };
    activeFilterTree?: AtIFilterGroup;
    selectedFilters: AtIFilterGroup;
    menuSelectedIds: string[];
    searchValue: string;
    currentPage: number;
    pageSize: number;
    showLoadingOverlay: boolean;
    private loadingTimer;
    /**
     * Guards the initial server-side `atSearchParamsChange` emit so it fires
     * exactly once, whichever lifecycle first sees the grid and columns ready.
     */
    private hasEmittedInitialServerParams;
    tableEl: HTMLAtTableElement;
    get shouldShowTableFilters(): boolean;
    get shouldShowColumnManager(): boolean;
    get totalPages(): number;
    get hasNoData(): boolean;
    get hasActiveSearch(): boolean;
    /**
     * A consumer-supplied `search_info_tooltip` always wins. Otherwise the tooltip is
     * derived from visible columns flagged `excludeFromGlobalSearch`, so the info icon
     * appears exactly when the keyword search skips a column the user can see, and a
     * column leaves the list again once the column manager hides it.
     */
    get searchInfoTooltip(): string | undefined;
    handlePageSizeProp(newValue?: number): void;
    handleSelectedFiltersChange(newValue: AtIFilterGroup): void;
    handleSearchFiltersChange(): void;
    handleLoadingChange(newValue: boolean): void;
    componentWillLoad(): Promise<void>;
    warnIfHasUpdatesIsANoOp(): void;
    componentDidLoad(): Promise<void>;
    componentDidUpdate(): Promise<void>;
    /**
     * Emits the initial server-side search params exactly once, as soon as both
     * the ag-grid instance exists and column defs are available.
     *
     * This emit is what triggers the consumer's first data fetch. It previously
     * lived inline in `componentDidLoad` and only fired if the grid happened to
     * be built by that point. When `col_defs` (or `server_side_mode`) is applied
     * a tick late - e.g. a consumer binding them from async or zoneless change
     * detection - the grid is instead created in a later `componentDidUpdate`,
     * which never emitted, so the initial fetch never ran and the table stayed
     * empty until the user searched or sorted. Driving the emit from both
     * lifecycles (guarded by `hasEmittedInitialServerParams`) makes it robust to
     * whichever tick the grid and columns become ready.
     */
    private emitInitialServerParamsIfReady;
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
    /**
     * Returns the underlying ag-Grid API, for the cases this component does not
     * wrap — saving and restoring column state, for instance.
     *
     * The grid is not built until column definitions arrive, so this resolves
     * once it exists rather than returning null to a caller that has no way of
     * knowing when to ask again. Rejects if the table leaves the DOM while the
     * grid is still unbuilt, so a caller is never left hanging on a table that
     * can no longer deliver one.
     *
     * @returns {Promise<GridApi>} Promise resolving to the grid API.
     */
    getGridApi(): Promise<GridApi>;
    disconnectedCallback(): void;
    private initGrid;
    /**
     * Matches AG Grid's quick filter, which `at-table` uses on the
     * at-table + at-table-actions path: the term is split on whitespace and every part must
     * appear in some column, so the parts may land in different columns and their order does
     * not matter. Dropping empty parts is what stops stray leading, trailing or repeated
     * spaces from filtering everything out.
     */
    private splitSearchTerms;
    private getColumnSearchText;
    private setupExternalFilters;
    handleColumnChange(event: CustomEvent): void;
    handleFilterChange(event: CustomEvent<AtIFilterGroup>): void;
    private relabelFilterNode;
    private handleFilterTreeChange;
    private updateActiveFilters;
    handleSearchChange(event: CustomEvent): void;
    handlePageChange(event: CustomEvent<number>): void;
    handlePageSizeChange(event: CustomEvent<number>): void;
    emitSearchParamsChange(): void;
    handleExport(event: CustomEvent<string>): void;
    private convertDropdownKeysToSelectOptions;
    render(): any;
}
export {};
