import { EventEmitter } from '../../../stencil-public-runtime';
import { GridApi, IRowNode } from 'ag-grid-community';
import { AtIColumnDetails, AtIPaginationParams, AtISearchTableParams, AtIFilterGroup, AtISelection } from '../../../types';
import { AtITableColumnDef } from '../../../models/searchTableModel';
import { AtIExternalFiltersChange } from '../../../types/filter';
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
 * @slot filter-bar - Used to place the persistent filter controls (facets such as site, severity or status) that sit beside the search field. This is where a surface's always-visible filters belong; the query builder behind `show_table_filters` authors ad-hoc conditions, and the chip row below reports what is currently applied.
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
     * Adds a checkbox column and the selection bar. Off by default.
     */
    row_selection?: boolean;
    /**
     * Field on each row whose value uniquely identifies it. Required by `row_selection`:
     * a page of rows is replaced wholesale as the user pages, so a selection outlives the
     * rows it was made from only if each one can be named.
     */
    row_id_field?: string;
    /**
     * What one row is called, for the selection copy ("3 devices selected"). Defaults to
     * the translated "row".
     */
    row_noun?: string;
    /**
     * Plural of `row_noun`, for languages the component cannot pluralise.
     */
    row_noun_plural?: string;
    /**
     * Decides which rows can be selected. A row it rejects renders a disabled checkbox, is
     * left out of the header checkbox, and never reads as selected in either scope. It
     * cannot be applied to rows the browser has not loaded, so in `all-matching` scope the
     * server must apply the same rule - and `count` there is `total_matching` less the
     * exclusions, which cannot discount rejected rows the table has never seen.
     */
    row_selectable?: (row: any) => boolean;
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
    /**
     * Emitted when the user removes a chip belonging to `search_filters`.
     *
     * The table never edits a prop it does not own, so the removal is a request:
     * the payload carries the conditions taken away and the external tree with
     * them gone, ready for the host to assign back to `search_filters`. Chips the
     * table authored itself are removed internally and do not emit this.
     */
    atExternalFiltersChange: EventEmitter<AtIExternalFiltersChange>;
    /**
     * Emitted whenever the selection or its scope changes, including when the table
     * clears it itself because the query changed.
     */
    atSelectionChange: EventEmitter<AtISelection>;
    el: HTMLElement;
    private selectedIds;
    /** Rows unticked after expanding to the whole result. */
    private excludedIds;
    private selectionScope;
    private hasFloatingSelectionActions;
    /**
     * Bumped when AG Grid changes page. The selection bar's copy and the header
     * checkbox both read which rows are on screen, and paging is AG Grid's own
     * business - it changes no Stencil state, so without this the bar goes on
     * describing the page the user has just left.
     */
    private pageEpoch;
    private lastDisplayedFirstRowId;
    private hasWarnedAboutRowIdField;
    private selectionBarEl?;
    translations: any;
    agGrid: GridApi;
    /** Pending `getGridApi()` callers, settled once the grid is built. */
    private gridReady?;
    private resolveGridReady?;
    private rejectGridReady?;
    private gridInitPromise?;
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
    /**
     * Checked after a render rather than on a prop change: a host setting both props
     * assigns them one at a time, so a watcher sees a moment where selection is on and
     * the id field has not arrived yet and warns about nothing.
     */
    private warnIfRowIdFieldMissing;
    warnIfHasUpdatesIsANoOp(): void;
    componentDidLoad(): Promise<void>;
    componentDidUpdate(): Promise<void>;
    componentDidRender(): void;
    /**
     * The floating bar is a manual popover so it sits in the top layer, where ag-grid's
     * transformed viewport cannot clip it, and stays put while the table scrolls under
     * it. `showPopover()` throws if it is already showing, hence the state check. The
     * table is padded by the bar's height so the rows it covers stay reachable.
     */
    private syncSelectionBarVisibility;
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
     * The selection bar's copy and the header checkbox both describe the rows on screen,
     * and neither of the two ways that set changes goes through Stencil: AG Grid owns
     * paging on the client path, and server-side the host swaps `table_data`, which
     * re-renders before the grid has taken the new rows. Keying off the rows the grid is
     * actually displaying covers both, and a page whose contents have not changed is not
     * a re-render worth doing.
     */
    private attachDisplayedRowsListener;
    private firstDisplayedRowId;
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
    /**
     * The selection column is the table's own, not one of the host's `col_defs`, so it
     * carries a colId and no field: everything keyed by field (the column manager, the
     * filters, the search columns, the export) then passes over it without special cases.
     */
    private static readonly SELECTION_COL_ID;
    private get selectionEnabled();
    private rowId;
    private isRowSelectable;
    private isRowSelected;
    /** Rows the grid holds, which in server-side mode is exactly the current page. */
    private loadedRows;
    private selectableRowsOnPage;
    get selectionCount(): number;
    /**
     * Only once the whole page is selected, which is the point at which the user has
     * expressed an interest in more than they can see. Withheld when the host reports no
     * total, because then the offer would name a number the table does not have.
     */
    get canExpandSelection(): boolean;
    get canReduceSelectionToPage(): boolean;
    private toggleRowSelection;
    private togglePageSelection;
    private pageSelectionState;
    private refreshSelectionColumn;
    private selectionColDef;
    /**
     * `col_defs` belongs to the host, so the selection column is added on the way to the
     * grid rather than written back into the prop.
     */
    private get gridColDefs();
    private selectionQuery;
    private currentSelection;
    private emitSelectionChange;
    /**
     * A selection in `all-matching` scope *is* the query, and an explicit one describes
     * rows that may no longer match, so neither survives the query changing: carrying
     * either across would point a bulk action at a set the user never saw. Paging and
     * sorting reorder the same set and are left alone.
     */
    private clearSelectionForQueryChange;
    private resetSelectionState;
    /**
     * The other half of the header checkbox's two tiers: from a selection that spans the
     * whole result set, back to the rows the user can see.
     */
    private reduceSelectionToPage;
    private expandSelectionToAllMatching;
    /**
     * Returns what the user has selected. In `all-matching` scope the ids are absent by
     * design - server-side the table holds one page, so the selection is the query it
     * carries plus whatever the user unticked.
     */
    getSelection(): Promise<AtISelection>;
    /**
     * The selected rows the grid currently holds. In `all-matching` scope, or for a
     * selection made on another page, this is fewer rows than are selected - use
     * `getSelection()` to act on the selection.
     */
    getSelectedRows<T = any>(): Promise<T[]>;
    /**
     * Clears the selection and emits `atSelectionChange`.
     */
    clearSelection(): Promise<void>;
    /**
     * Selects the given rows by id, for restoring a selection the host kept.
     */
    setSelection(ids: string[]): Promise<void>;
    /**
     * Expands the selection to every row matching the current filter, as the selection
     * bar's own offer does. Declines when the host reports no total, matching the offer,
     * which is withheld for the same reason: the scope would describe a set whose size
     * the table cannot state.
     */
    selectAllMatching(): Promise<void>;
    /**
     * Which bar the host asked for is read from the DOM rather than a prop: the slot it
     * fills is already the answer. Resolved here because `:has()` cannot see slotted
     * nodes reliably once Stencil has relocated them (as at-side-panel does for its
     * footer).
     */
    private syncSelectionSlots;
    private get selectionNoun();
    private get selectionMessage();
    /**
     * Always rendered, so the slots keep the same parent whether or not selection is on.
     * A host binds `row_selection` after the element upgrades, and moving a slot between
     * two branches breaks Stencil's relocation of the nodes already inside it.
     */
    private renderSelectionBar;
    /**
     * AG Grid hides a column when it is dragged off the grid, which never goes through
     * the column manager, so `col_defs` - the source of truth for both the manager's
     * checkboxes and the keyword-search exclusion - would still call it visible.
     */
    private syncColumnVisibility;
    handleColumnChange(event: CustomEvent): void;
    handleFilterChange(event: CustomEvent<AtIFilterGroup>): void;
    /** A copy of `group` without the listed conditions, leaving the source untouched. */
    private pruneConditions;
    private relabelFilterNode;
    private handleFilterTreeChange;
    /**
     * External and internal conditions are additive, not alternatives: a surface
     * may carry both a host-owned filter bar and the column filter menu, and the
     * user is entitled to see one record of what they asked for.
     */
    private mergeFilterTrees;
    /**
     * `at-table-filters` removes a chip by mutating the tree it was handed, so it
     * gets a copy - otherwise removing an external chip would edit the host's own
     * `search_filters` object behind its back.
     */
    private chipFilterTree;
    /** A condition's identity for ownership comparison, which ids alone cannot give. */
    private conditionKey;
    private externalConditions;
    private externalConditionKeys;
    get hasDisplayableFilters(): boolean;
    private updateActiveFilters;
    handleSearchChange(event: CustomEvent): void;
    handlePageChange(event: CustomEvent<number>): void;
    handlePageSizeChange(event: CustomEvent<number>): void;
    private buildSearchParams;
    emitSearchParamsChange(): void;
    handleExport(event: CustomEvent<string>): void;
    private convertDropdownKeysToSelectOptions;
    render(): any;
}
export {};
