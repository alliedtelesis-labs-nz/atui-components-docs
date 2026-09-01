import { h, Host, } from "@stencil/core";
import { fetchTranslations, interpolate } from "../../../utils/translation";
import { SortDirection } from "../../../types/sort";
import { countFilterConditions, isFilterGroup, rowMatchesFilterGroup, flattenFilterConditions, } from "../../../utils/filter-tree.util";
import { resolveCellSearchText } from "../utils/cell-search-text";
import { AtSelectionCell, AtSelectionHeader } from "./selection-column";
/**
 * @category Data Tables
 * @description A searchable data table component that combines table functionality with integrated search capabilities. Provides real-time filtering and search result highlighting.
 * @slot filter-bar - Used to place the persistent filter controls (facets such as site, severity or status) that sit beside the search field. This is where a surface's always-visible filters belong; the query builder behind `show_table_filters` authors ad-hoc conditions, and the chip row below reports what is currently applied.
 * @slot leading-actions - Used to place actions immediately left of the column manager
 * @slot actions - Used to place actions related to table content
 * @slot multi-select-actions - Used to place actions related to row selection
 */
export class AtSearchTable {
    /**
     * Table data passed to at-table component.
     */
    table_data;
    /**
     * Label for the table, appears above the search input.
     */
    label;
    /**
     * Info text displayed in a tooltip at the right of the search input. When omitted, a tooltip is
     * generated automatically listing any visible columns flagged with
     * `excludeFromGlobalSearch` in their column def; no icon is shown when
     * nothing is excluded. Under `server_side_mode` that flag does not filter -
     * the server matches whichever columns it chooses - so supply this text
     * yourself there rather than relying on the generated tooltip.
     */
    search_info_tooltip;
    /**
     * Column definitions passed to at-table component.
     */
    col_defs = [];
    /**
     * External search filters applied to the table data.
     */
    search_filters;
    /**
     * Default page size of the table
     */
    page_size = 20;
    /**
     * Options offered in the pagination page-size selector. When omitted a
     * standard set is used. The currently active page size is always included
     * so the selector reflects the number of rows actually being loaded.
     */
    page_size_options;
    /**
     * Adds the table filters. Off by default - structured column filters earn
     * their place on large data sets, where the search box alone stops being
     * enough to find a row.
     */
    show_table_filters = false;
    /**
     * Adds the column manager. On by default.
     */
    show_column_manager = true;
    /**
     * Adds a checkbox column and the selection bar. Off by default.
     */
    row_selection = false;
    /**
     * Field on each row whose value uniquely identifies it. Required by `row_selection`:
     * a page of rows is replaced wholesale as the user pages, so a selection outlives the
     * rows it was made from only if each one can be named.
     */
    row_id_field;
    /**
     * What one row is called, for the selection copy ("3 devices selected"). Defaults to
     * the translated "row".
     */
    row_noun;
    /**
     * Plural of `row_noun`, for languages the component cannot pluralise.
     */
    row_noun_plural;
    /**
     * Decides which rows can be selected. A row it rejects renders a disabled checkbox, is
     * left out of the header checkbox, and never reads as selected in either scope. It
     * cannot be applied to rows the browser has not loaded, so in `all-matching` scope the
     * server must apply the same rule - and `count` there is `total_matching` less the
     * exclusions, which cannot discount rejected rows the table has never seen.
     */
    row_selectable;
    /**
     * Adds the table reload button. Off by default - the reload button is
     * opt-in, so existing tables don't gain new UI just from upgrading the
     * library.
     */
    show_reload_button = false;
    /**
     * Shows an indicator on the reload button when the underlying data has
     * changed since it was last loaded. This component does not detect
     * changes itself — set this to true once the consumer knows of an
     * update (e.g. from a websocket or poll) and back to false once the
     * user reloads.
     */
    has_updates = false;
    /**
     * Adds the table export menu. On by default.
     */
    show_export_menu = true;
    /**
     * Offers the CSV export option in the export menu. On by default.
     */
    show_csv_export = true;
    /**
     * Offers the PDF export option in the export menu. On by default.
     */
    show_pdf_export = true;
    /**
     * If true, disables pagination on the table and shows all data at once.
     *
     * This only applies for client-side filtering mode. When `server_side_mode` is enabled,
     * the component always loads the <at-table-pagination> UI for pagination, regardless of this setting.
     */
    use_custom_pagination = false;
    /**
     * If true, enables automatic column resizing to fit available space.
     * Columns will be sized proportionally based on their content and constraints. Fixed widths in column defs will be respected.
     */
    auto_size_columns = true;
    /**
     * If true, columns hidden by the column manager are still matched by the search box.
     * Off by default, so hiding a column also stops its content matching, which is what AG
     * Grid's quick filter does on the at-table + at-table-actions path. Enable it to keep a
     * deliberately hidden column searchable.
     */
    search_hidden_columns = false;
    /**
     * If true, enables server-side data loading mode where filtering,
     * searching, and pagination are handled externally
     */
    server_side_mode = false;
    /**
     * If true, displays a loading placeholder and hides table content.
     * Used for server-side data fetching to indicate loading state.
     */
    is_loading = false;
    /**
     * Message shown in place of the rows when there is no data to display.
     * Defaults to a translated "No Data" message.
     */
    no_data_message;
    /**
     * Event emitted when search params change in server-side mode.
     * Contains filters, search text, pagination info
     */
    atSearchParamsChange;
    /**
     * Event emitted when the reload button is clicked
     */
    atuiReload;
    /**
     * Event emitted when CSV export is requested
     */
    atExportCsv;
    /**
     * Event emitted when PDF export is requested
     */
    atExportPdf;
    /**
     * Emitted when the user removes a chip belonging to `search_filters`.
     *
     * The table never edits a prop it does not own, so the removal is a request:
     * the payload carries the conditions taken away and the external tree with
     * them gone, ready for the host to assign back to `search_filters`. Chips the
     * table authored itself are removed internally and do not emit this.
     */
    atExternalFiltersChange;
    /**
     * Emitted whenever the selection or its scope changes, including when the table
     * clears it itself because the query changed.
     */
    atSelectionChange;
    el;
    selectedIds = new Set();
    /** Rows unticked after expanding to the whole result. */
    excludedIds = new Set();
    selectionScope = 'none';
    hasFloatingSelectionActions = false;
    /**
     * Bumped when AG Grid changes page. The selection bar's copy and the header
     * checkbox both read which rows are on screen, and paging is AG Grid's own
     * business - it changes no Stencil state, so without this the bar goes on
     * describing the page the user has just left.
     */
    pageEpoch = 0;
    lastDisplayedFirstRowId = null;
    hasWarnedAboutRowIdField = false;
    selectionBarEl;
    translations;
    agGrid;
    /** Pending `getGridApi()` callers, settled once the grid is built. */
    gridReady;
    resolveGridReady;
    rejectGridReady;
    gridInitPromise;
    filterMenuEl;
    tableCreated = false;
    activeFilters = {};
    activeFilterTree;
    selectedFilters = {
        id: 'root',
        logical_operator: 'And',
        children: [],
    };
    menuSelectedIds = [];
    searchValue = '';
    currentPage = 1;
    pageSize = 10;
    showLoadingOverlay = false;
    loadingTimer = null;
    /**
     * Guards the initial server-side `atSearchParamsChange` emit so it fires
     * exactly once, whichever lifecycle first sees the grid and columns ready.
     */
    hasEmittedInitialServerParams = false;
    tableEl;
    get shouldShowTableFilters() {
        return (this.show_table_filters && this.col_defs && this.col_defs.length > 0);
    }
    get shouldShowColumnManager() {
        return (this.show_column_manager &&
            this.col_defs &&
            this.col_defs.length > 0);
    }
    get totalPages() {
        return Math.max(1, Math.ceil((this.table_data?.total || 0) / this.pageSize));
    }
    get hasNoData() {
        return !this.table_data?.items || this.table_data.items.length === 0;
    }
    get hasActiveSearch() {
        return (!!this.searchValue ||
            Object.values(this.activeFilters).some((v) => v !== ''));
    }
    /**
     * A consumer-supplied `search_info_tooltip` always wins. Otherwise the tooltip is
     * derived from visible columns flagged `excludeFromGlobalSearch`, so the info icon
     * appears exactly when the keyword search skips a column the user can see, and a
     * column leaves the list again once the column manager hides it.
     */
    get searchInfoTooltip() {
        if (this.search_info_tooltip) {
            return this.search_info_tooltip;
        }
        const visibleColumns = (this.col_defs ?? []).filter((colDef) => colDef.hide !== true);
        const excludedColumns = visibleColumns.filter((colDef) => colDef.excludeFromGlobalSearch === true);
        if (excludedColumns.length === 0) {
            return undefined;
        }
        if (excludedColumns.length === visibleColumns.length) {
            return this.translations.ATUI.TABLE.NO_GLOBAL_SEARCH_COLUMNS;
        }
        return (this.translations.ATUI.TABLE.EXCLUDES_COLUMNS +
            excludedColumns
                .map((colDef) => colDef.headerName || colDef.field || colDef.colId)
                .join(', '));
    }
    handlePageSizeProp(newValue) {
        this.pageSize = newValue || 10;
    }
    handleSelectedFiltersChange(newValue) {
        this.menuSelectedIds = flattenFilterConditions(newValue).map((f) => f.id);
    }
    handleSearchFiltersChange() {
        this.updateActiveFilters();
    }
    handleLoadingChange(newValue) {
        if (newValue) {
            this.loadingTimer = setTimeout(() => {
                this.showLoadingOverlay = true;
            }, 1000);
        }
        else {
            if (this.loadingTimer !== null) {
                clearTimeout(this.loadingTimer);
                this.loadingTimer = null;
            }
            this.showLoadingOverlay = false;
        }
    }
    async componentWillLoad() {
        this.pageSize = this.page_size || 10;
        this.translations = await fetchTranslations(this.el);
        this.warnIfHasUpdatesIsANoOp();
    }
    /**
     * Checked after a render rather than on a prop change: a host setting both props
     * assigns them one at a time, so a watcher sees a moment where selection is on and
     * the id field has not arrived yet and warns about nothing.
     */
    warnIfRowIdFieldMissing() {
        if (this.row_selection &&
            !this.row_id_field &&
            !this.hasWarnedAboutRowIdField) {
            this.hasWarnedAboutRowIdField = true;
            console.warn('atui-search-table: row_selection needs row_id_field to identify rows across pages - no selection column is rendered without it.');
        }
    }
    warnIfHasUpdatesIsANoOp() {
        if (this.has_updates && !this.show_reload_button) {
            console.warn('atui-search-table: has_updates has no effect while show_reload_button is false — set show_reload_button to true to show the reload button (and its indicator).');
        }
    }
    async componentDidLoad() {
        await this.initGrid();
        this.emitInitialServerParamsIfReady();
        this.handleLoadingChange(this.is_loading);
        this.syncSelectionSlots();
    }
    async componentDidUpdate() {
        if (!this.tableCreated) {
            await this.initGrid();
        }
        this.emitInitialServerParamsIfReady();
    }
    componentDidRender() {
        this.warnIfRowIdFieldMissing();
        this.syncSelectionSlots();
        this.syncSelectionBarVisibility();
    }
    /**
     * The floating bar is a manual popover so it sits in the top layer, where ag-grid's
     * transformed viewport cannot clip it, and stays put while the table scrolls under
     * it. `showPopover()` throws if it is already showing, hence the state check. The
     * table is padded by the bar's height so the rows it covers stay reachable.
     */
    syncSelectionBarVisibility() {
        const bar = this.selectionBarEl;
        if (!bar)
            return;
        const shouldShow = this.selectionEnabled && this.selectionCount > 0;
        if (!this.hasFloatingSelectionActions) {
            bar.classList.toggle('is-hidden', !shouldShow);
            return;
        }
        const isShown = bar.matches(':popover-open');
        if (shouldShow && !isShown) {
            bar.showPopover();
        }
        else if (!shouldShow && isShown) {
            bar.hidePopover();
        }
        this.el.style.setProperty('--at-selection-bar-height', shouldShow ? `${bar.offsetHeight}px` : '0px');
    }
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
    emitInitialServerParamsIfReady() {
        if (this.server_side_mode &&
            this.agGrid &&
            (this.col_defs?.length ?? 0) > 0 &&
            !this.hasEmittedInitialServerParams) {
            this.hasEmittedInitialServerParams = true;
            this.emitSearchParamsChange();
        }
    }
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
    async updateRowByIndex(rowUpdates, options) {
        const displayedRows = this.agGrid.getRenderedNodes();
        rowUpdates.forEach(({ index, update }) => {
            const displayedRow = displayedRows.find((row) => row.rowIndex === index);
            if (displayedRow) {
                displayedRow.updateData(update);
                if (options?.flash) {
                    this.agGrid.flashCells({ rowNodes: [displayedRow] });
                }
                this.agGrid.refreshCells({
                    rowNodes: [displayedRow],
                    force: options?.forceRefresh || false,
                });
            }
        });
    }
    /**
     * Returns the **currently displayed row nodes** from the ag-Grid instance.
     *
     * This asynchronous method retrieves an array of row nodes representing the rows currently visible
     * (rendered) in the grid, after filtering, sorting, and other view-based operations.
     *
     * @template T The data type contained in each row node.
     * @returns {Promise<IRowNode<T>[]>} Promise resolving to an array of displayed row nodes.
     */
    async getDisplayedRows() {
        return this.agGrid.getRenderedNodes();
    }
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
    async getGridApi() {
        if (this.agGrid) {
            return this.agGrid;
        }
        this.gridReady ??= new Promise((resolve, reject) => {
            this.resolveGridReady = resolve;
            this.rejectGridReady = reject;
        });
        return this.gridReady;
    }
    disconnectedCallback() {
        this.rejectGridReady?.(new Error('at-search-table was removed from the DOM before its grid was created'));
        this.gridReady = undefined;
        this.resolveGridReady = undefined;
        this.rejectGridReady = undefined;
        this.gridInitPromise = undefined;
    }
    async initGrid() {
        // `col_defs` defaults to `[]`, which is truthy — so a plain `this.col_defs`
        // check passed on first load and built the grid before any columns (or a
        // caller-supplied `page_size`) had arrived. The grid was then marked
        // created and never rebuilt, leaving pagination stuck on the default.
        // Wait for actual columns, matching `emitInitialServerParamsIfReady`.
        if (this.col_defs?.length && !this.tableCreated && this.tableEl) {
            // `tableCreated` is only set after the await, so two calls that arrive
            // while the first `createGrid()` is still pending both get past the
            // guard. The second destroys the first's grid, and whichever promise
            // settles last wins the assignment - which can be the destroyed one,
            // handed on to every `getGridApi()` caller. One promise, one grid.
            this.gridInitPromise ??= this.tableEl.createGrid();
            const api = await this.gridInitPromise;
            if (this.tableCreated) {
                return;
            }
            this.agGrid = api;
            this.tableCreated = true;
            this.resolveGridReady?.(this.agGrid);
            this.setupExternalFilters();
            this.agGrid.addEventListener('sortChanged', () => {
                if (this.server_side_mode) {
                    this.currentPage = 1;
                    this.emitSearchParamsChange();
                }
            });
            this.attachDisplayedRowsListener();
            if (this.table_data?.items) {
                this.agGrid.setGridOption('rowData', this.table_data.items);
            }
        }
    }
    /**
     * The selection bar's copy and the header checkbox both describe the rows on screen,
     * and neither of the two ways that set changes goes through Stencil: AG Grid owns
     * paging on the client path, and server-side the host swaps `table_data`, which
     * re-renders before the grid has taken the new rows. Keying off the rows the grid is
     * actually displaying covers both, and a page whose contents have not changed is not
     * a re-render worth doing.
     */
    attachDisplayedRowsListener() {
        // `modelUpdated` covers the server path, where the host swaps `table_data`.
        // `paginationChanged` covers the client path, where paging moves a window over a
        // model that has not changed and so raises no model event at all. Both land on
        // the same guard, and the deferred read lets AG Grid finish its own update first
        // - inside the event the API can still report the page being left.
        const refreshIfRowsMoved = () => setTimeout(() => {
            if (!this.agGrid)
                return;
            const first = this.firstDisplayedRowId();
            if (first === this.lastDisplayedFirstRowId)
                return;
            this.lastDisplayedFirstRowId = first;
            this.pageEpoch++;
            this.refreshSelectionColumn();
        });
        this.agGrid.addEventListener('modelUpdated', refreshIfRowsMoved);
        this.agGrid.addEventListener('paginationChanged', refreshIfRowsMoved);
    }
    firstDisplayedRowId() {
        const rows = this.loadedRows();
        return rows.length ? this.rowId(rows[0]) : null;
    }
    /**
     * Matches AG Grid's quick filter, which `at-table` uses on the
     * at-table + at-table-actions path: the term is split on whitespace and every part must
     * appear in some column, so the parts may land in different columns and their order does
     * not matter. Dropping empty parts is what stops stray leading, trailing or repeated
     * spaces from filtering everything out.
     */
    splitSearchTerms(searchValue) {
        return (searchValue ?? '')
            .toLowerCase()
            .split(/\s+/)
            .filter((term) => term.length > 0);
    }
    getColumnSearchText(colDef, node) {
        let cellValue;
        if (colDef.valueGetter && typeof colDef.valueGetter === 'function') {
            cellValue = colDef.valueGetter({
                data: node.data,
                node,
                colDef,
                api: this.agGrid,
                context: null,
                getValue: (field) => node.data[field],
                column: null,
            });
        }
        else if (colDef.field) {
            cellValue = node.data[colDef.field];
        }
        return colDef.getQuickFilterText
            ? colDef.getQuickFilterText({
                value: cellValue,
                node,
                data: node.data,
                column: null,
                colDef,
                api: this.agGrid,
                context: null,
            })
            : resolveCellSearchText(colDef, cellValue, node.data);
    }
    setupExternalFilters() {
        if (!this.agGrid)
            return;
        if (this.server_side_mode) {
            return;
        }
        this.agGrid.setGridOption('isExternalFilterPresent', () => {
            return Object.keys(this.activeFilters).length > 0;
        });
        this.agGrid.setGridOption('doesExternalFilterPass', (node) => {
            if (!node.data)
                return true;
            const searchTerms = this.splitSearchTerms(this.searchValue);
            if (searchTerms.length) {
                // hide is undefined for a column the manager has never toggled, so this
                // tests against true rather than falsiness.
                const columnTexts = this.col_defs
                    .filter((colDef) => colDef.excludeFromGlobalSearch !== true &&
                    (this.search_hidden_columns ||
                        colDef.hide !== true))
                    .map((colDef) => this.getColumnSearchText(colDef, node))
                    .filter((text) => !!text)
                    .map((text) => text.toLowerCase());
                const matchesSearch = searchTerms.every((term) => columnTexts.some((text) => text.includes(term)));
                if (!matchesSearch)
                    return false;
            }
            const columnFilterResult = Object.entries(this.activeFilters).every(([colId, filterValue]) => {
                if (colId === '__search__' || !filterValue)
                    return true;
                const colDef = this.col_defs.find((def) => def.field === colId);
                let value;
                if (colDef &&
                    colDef.valueGetter &&
                    typeof colDef.valueGetter === 'function') {
                    value = colDef.valueGetter({
                        data: node.data,
                        node,
                        colDef,
                        api: this.agGrid,
                        context: null,
                        getValue: (field) => node.data[field],
                        column: null,
                    });
                }
                else {
                    value = node.data[colId];
                }
                const matches = value &&
                    String(value)
                        .toLowerCase()
                        .includes(String(filterValue).toLowerCase());
                return matches;
            });
            const getCellValue = (colId) => {
                const colDef = this.col_defs.find((def) => def.field === colId);
                if (colDef &&
                    colDef.valueGetter &&
                    typeof colDef.valueGetter === 'function') {
                    return colDef.valueGetter({
                        data: node.data,
                        node,
                        colDef,
                        api: this.agGrid,
                        context: null,
                        getValue: (field) => node.data[field],
                        column: null,
                    });
                }
                return node.data[colId];
            };
            const useOperatorFilters = !!this.activeFilterTree &&
                countFilterConditions(this.activeFilterTree) > 0;
            return useOperatorFilters
                ? rowMatchesFilterGroup(this.activeFilterTree, getCellValue)
                : columnFilterResult;
        });
    }
    /**
     * The selection column is the table's own, not one of the host's `col_defs`, so it
     * carries a colId and no field: everything keyed by field (the column manager, the
     * filters, the search columns, the export) then passes over it without special cases.
     */
    static SELECTION_COL_ID = '__atui_select__';
    get selectionEnabled() {
        return !!this.row_selection && !!this.row_id_field;
    }
    rowId(row) {
        return String(row?.[this.row_id_field]);
    }
    isRowSelectable(row) {
        return this.row_selectable ? !!this.row_selectable(row) : true;
    }
    isRowSelected(row) {
        if (!row)
            return false;
        if (this.selectionScope !== 'all-matching') {
            return this.selectedIds.has(this.rowId(row));
        }
        // A row the host rejects is never part of the selection, in either
        // scope. Without this it renders checked *and* disabled, which claims
        // the bulk action will reach a row the host has said it cannot.
        return (this.isRowSelectable(row) && !this.excludedIds.has(this.rowId(row)));
    }
    /** Rows the grid holds, which in server-side mode is exactly the current page. */
    loadedRows() {
        const rows = [];
        this.agGrid?.forEachNodeAfterFilterAndSort((node) => {
            if (node?.data)
                rows.push(node.data);
        });
        const pageSize = this.agGrid?.paginationGetPageSize?.();
        if (!pageSize)
            return rows;
        const page = this.agGrid.paginationGetCurrentPage();
        return rows.slice(page * pageSize, (page + 1) * pageSize);
    }
    selectableRowsOnPage() {
        return this.loadedRows().filter((row) => this.isRowSelectable(row));
    }
    get selectionCount() {
        if (this.selectionScope === 'all-matching') {
            return Math.max(0, (this.table_data?.total ?? 0) - this.excludedIds.size);
        }
        return this.selectedIds.size;
    }
    /**
     * Only once the whole page is selected, which is the point at which the user has
     * expressed an interest in more than they can see. Withheld when the host reports no
     * total, because then the offer would name a number the table does not have.
     */
    get canExpandSelection() {
        if (this.selectionScope !== 'explicit')
            return false;
        const page = this.selectableRowsOnPage();
        if (!page.length)
            return false;
        return (page.every((row) => this.selectedIds.has(this.rowId(row))) &&
            (this.table_data?.total ?? 0) > this.selectedIds.size);
    }
    get canReduceSelectionToPage() {
        return (this.selectionScope === 'all-matching' &&
            !!this.selectableRowsOnPage().length);
    }
    toggleRowSelection(row, checked) {
        const id = this.rowId(row);
        if (this.selectionScope === 'all-matching') {
            const excluded = new Set(this.excludedIds);
            if (checked) {
                excluded.delete(id);
            }
            else {
                excluded.add(id);
            }
            this.excludedIds = excluded;
        }
        else {
            const selected = new Set(this.selectedIds);
            if (checked) {
                selected.add(id);
            }
            else {
                selected.delete(id);
            }
            this.selectedIds = selected;
            this.selectionScope = selected.size ? 'explicit' : 'none';
        }
        this.refreshSelectionColumn();
        this.emitSelectionChange();
    }
    togglePageSelection(checked) {
        const pageIds = this.selectableRowsOnPage().map((row) => this.rowId(row));
        if (this.selectionScope === 'all-matching') {
            const excluded = new Set(this.excludedIds);
            pageIds.forEach((id) => checked ? excluded.delete(id) : excluded.add(id));
            this.excludedIds = excluded;
        }
        else {
            const selected = new Set(this.selectedIds);
            pageIds.forEach((id) => checked ? selected.add(id) : selected.delete(id));
            this.selectedIds = selected;
            this.selectionScope = selected.size ? 'explicit' : 'none';
        }
        this.refreshSelectionColumn();
        this.emitSelectionChange();
    }
    pageSelectionState() {
        const page = this.selectableRowsOnPage();
        if (!page.length)
            return false;
        const selected = page.filter((row) => this.isRowSelected(row)).length;
        if (selected === 0)
            return false;
        return selected === page.length ? true : 'indeterminate';
    }
    refreshSelectionColumn() {
        if (!this.agGrid)
            return;
        this.agGrid.refreshCells({
            columns: [AtSearchTable.SELECTION_COL_ID],
            force: true,
        });
        this.agGrid.refreshHeader();
    }
    selectionColDef() {
        const selection = this.translations?.ATUI?.TABLE?.SELECTION ?? {};
        return {
            colId: AtSearchTable.SELECTION_COL_ID,
            // A scratch field, not one of the row's own: ag-grid renders no cell for a
            // column it considers value-less. Nothing writes it - the checkbox reports
            // through the callbacks below and the selection stays with the table.
            field: AtSearchTable.SELECTION_COL_ID,
            headerName: '',
            pinned: 'left',
            sortable: false,
            resizable: false,
            suppressSizeToFit: true,
            minWidth: 48,
            maxWidth: 48,
            filterOptions: { exclude: true },
            getQuickFilterText: () => '',
            valueGetter: (params) => this.isRowSelected(params.data),
            cellRenderer: AtSelectionCell,
            cellRendererParams: {
                label: selection.SELECT_ROW,
                isSelected: (row) => this.isRowSelected(row),
                isSelectable: (row) => this.isRowSelectable(row),
                setSelected: (row, selected) => this.toggleRowSelection(row, selected),
            },
            headerComponent: AtSelectionHeader,
            headerComponentParams: {
                label: selection.SELECT_ALL_ON_PAGE,
                getState: () => this.pageSelectionState(),
                setSelected: (selected) => this.togglePageSelection(selected),
            },
        };
    }
    /**
     * `col_defs` belongs to the host, so the selection column is added on the way to the
     * grid rather than written back into the prop.
     */
    get gridColDefs() {
        if (!this.selectionEnabled)
            return this.col_defs;
        return [this.selectionColDef(), ...(this.col_defs ?? [])];
    }
    selectionQuery() {
        if (!this.agGrid)
            return undefined;
        const { startRow, endRow, ...params } = this.buildSearchParams();
        return { ...params, filter_tree: this.activeFilterTree };
    }
    currentSelection() {
        const isAllMatching = this.selectionScope === 'all-matching';
        return {
            scope: this.selectionScope,
            ids: isAllMatching ? [] : Array.from(this.selectedIds),
            excluded_ids: isAllMatching ? Array.from(this.excludedIds) : [],
            rows: this.loadedRows().filter((row) => this.isRowSelected(row)),
            count: this.selectionCount,
            total_matching: this.table_data?.total ?? 0,
            count_is_estimate: isAllMatching && !!this.server_side_mode,
            query: isAllMatching ? this.selectionQuery() : undefined,
        };
    }
    emitSelectionChange() {
        this.atSelectionChange.emit(this.currentSelection());
    }
    /**
     * A selection in `all-matching` scope *is* the query, and an explicit one describes
     * rows that may no longer match, so neither survives the query changing: carrying
     * either across would point a bulk action at a set the user never saw. Paging and
     * sorting reorder the same set and are left alone.
     */
    clearSelectionForQueryChange() {
        if (this.selectionScope === 'none')
            return;
        this.resetSelectionState();
        this.refreshSelectionColumn();
        this.emitSelectionChange();
    }
    resetSelectionState() {
        this.selectedIds = new Set();
        this.excludedIds = new Set();
        this.selectionScope = 'none';
    }
    /**
     * The other half of the header checkbox's two tiers: from a selection that spans the
     * whole result set, back to the rows the user can see.
     */
    reduceSelectionToPage() {
        this.selectedIds = new Set(this.selectableRowsOnPage().map((row) => this.rowId(row)));
        this.excludedIds = new Set();
        this.selectionScope = this.selectedIds.size ? 'explicit' : 'none';
        this.refreshSelectionColumn();
        this.emitSelectionChange();
    }
    expandSelectionToAllMatching() {
        this.selectedIds = new Set();
        this.excludedIds = new Set();
        this.selectionScope = 'all-matching';
        this.refreshSelectionColumn();
        this.emitSelectionChange();
    }
    /**
     * Returns what the user has selected. In `all-matching` scope the ids are absent by
     * design - server-side the table holds one page, so the selection is the query it
     * carries plus whatever the user unticked.
     */
    async getSelection() {
        return this.currentSelection();
    }
    /**
     * The selected rows the grid currently holds. In `all-matching` scope, or for a
     * selection made on another page, this is fewer rows than are selected - use
     * `getSelection()` to act on the selection.
     */
    async getSelectedRows() {
        return this.loadedRows().filter((row) => this.isRowSelected(row));
    }
    /**
     * Clears the selection and emits `atSelectionChange`.
     */
    async clearSelection() {
        this.resetSelectionState();
        this.refreshSelectionColumn();
        this.emitSelectionChange();
    }
    /**
     * Selects the given rows by id, for restoring a selection the host kept.
     */
    async setSelection(ids) {
        this.selectedIds = new Set(ids ?? []);
        this.excludedIds = new Set();
        this.selectionScope = this.selectedIds.size ? 'explicit' : 'none';
        this.refreshSelectionColumn();
        this.emitSelectionChange();
    }
    /**
     * Expands the selection to every row matching the current filter, as the selection
     * bar's own offer does. Declines when the host reports no total, matching the offer,
     * which is withheld for the same reason: the scope would describe a set whose size
     * the table cannot state.
     */
    async selectAllMatching() {
        if (!this.table_data?.total) {
            console.warn('atui-search-table: selectAllMatching() needs table_data.total - without it the selection cannot say how many rows it covers.');
            return;
        }
        this.expandSelectionToAllMatching();
    }
    /**
     * Which bar the host asked for is read from the DOM rather than a prop: the slot it
     * fills is already the answer. Resolved here because `:has()` cannot see slotted
     * nodes reliably once Stencil has relocated them (as at-side-panel does for its
     * footer).
     */
    syncSelectionSlots() {
        this.hasFloatingSelectionActions = !!this.el.querySelector('[slot="floating-multi-select-actions"]');
    }
    get selectionNoun() {
        const selection = this.translations?.ATUI?.TABLE?.SELECTION;
        const one = this.row_noun ?? selection?.ROW ?? 'row';
        const many = this.row_noun_plural ?? selection?.ROWS ?? 'rows';
        return this.selectionCount === 1 ? one : many;
    }
    get selectionMessage() {
        const selection = this.translations?.ATUI?.TABLE?.SELECTION ?? {};
        const count = this.selectionCount;
        const total = this.table_data?.total ?? 0;
        const noun = this.selectionNoun;
        if (this.selectionScope === 'all-matching') {
            return this.excludedIds.size
                ? interpolate(selection.ALL_MATCHING_SELECTED_EXCLUDED ?? '', {
                    count,
                    total,
                    noun,
                })
                : interpolate(selection.ALL_MATCHING_SELECTED ?? '', {
                    total: count,
                    noun,
                });
        }
        // "on this page" only while that is true; once a selection spans pages the count
        // is the honest thing to say.
        const page = this.selectableRowsOnPage();
        const wholePageSelected = !!page.length &&
            page.every((row) => this.selectedIds.has(this.rowId(row)));
        if (wholePageSelected && count === page.length) {
            return interpolate(selection.PAGE_SELECTED ?? '', { count, noun });
        }
        const selectedOnPage = page.filter((row) => this.selectedIds.has(this.rowId(row))).length;
        return interpolate((selectedOnPage < count
            ? selection.SELECTED_ACROSS_PAGES
            : selection.SELECTED) ?? '', { count, noun });
    }
    /**
     * Always rendered, so the slots keep the same parent whether or not selection is on.
     * A host binds `row_selection` after the element upgrades, and moving a slot between
     * two branches breaks Stencil's relocation of the nodes already inside it.
     */
    renderSelectionBar() {
        const selection = this.translations?.ATUI?.TABLE?.SELECTION ?? {};
        const floating = this.selectionEnabled && this.hasFloatingSelectionActions;
        if (!this.selectionEnabled) {
            return (h("div", { class: "selection-bar selection-bar--passive" }, h("slot", { name: "multi-select-actions" }), h("slot", { name: "floating-multi-select-actions" })));
        }
        return (h("div", { class: `selection-bar flex items-center gap-12 ${floating
                ? 'selection-bar--floating border-input bg-surface-background rounded-lg border p-12'
                : 'selection-bar--inline mb-8 py-8'}`, popover: floating ? 'manual' : undefined, ref: (el) => (this.selectionBarEl = el), role: "region", "aria-live": "polite", "data-name": "selection-bar" }, h("div", { class: "flex w-full flex-wrap items-center gap-12" }, h("span", { class: "flex flex-wrap items-center gap-8" }, h("span", { "data-name": "selection-bar-text" }, this.selectionMessage), this.canExpandSelection && (h("at-button", { type: "primaryText", size: "sm", "data-name": "select-all-matching", label: interpolate(selection.SELECT_ALL_MATCHING ?? '', { total: this.table_data?.total ?? 0 }), onAtuiClick: () => this.expandSelectionToAllMatching() })), this.canReduceSelectionToPage && (h("at-button", { type: "primaryText", size: "sm", "data-name": "select-page-only", label: selection.SELECT_PAGE_ONLY ??
                'Select all in the current page', onAtuiClick: () => this.reduceSelectionToPage() }))), h("div", { class: "flex items-center gap-8" }, h("slot", { name: "multi-select-actions" }), h("slot", { name: "floating-multi-select-actions" }), h("at-button", { type: "secondaryText", "data-name": "clear-selection", size: "sm", label: this.translations?.ATUI?.CLEAR_SELECTION ??
                'Clear selection', onAtuiClick: () => this.clearSelection() })))));
    }
    /**
     * AG Grid hides a column when it is dragged off the grid, which never goes through
     * the column manager, so `col_defs` - the source of truth for both the manager's
     * checkboxes and the keyword-search exclusion - would still call it visible.
     */
    syncColumnVisibility(event) {
        const hiddenFields = new Set(event.detail);
        let changed = false;
        const updatedColDefs = this.col_defs.map((colDef) => {
            const hide = hiddenFields.has(colDef.field);
            if (!!colDef.hide === hide) {
                return colDef;
            }
            changed = true;
            return { ...colDef, hide };
        });
        if (changed) {
            this.col_defs = updatedColDefs;
        }
    }
    handleColumnChange(event) {
        const { id, checked } = event.detail;
        const updatedColDefs = this.col_defs.map((colDef) => {
            if (colDef.field === id) {
                return { ...colDef, hide: !checked };
            }
            return colDef;
        });
        this.col_defs = updatedColDefs;
    }
    handleFilterChange(event) {
        const tree = event.detail;
        const externalKeys = this.externalConditionKeys();
        if (externalKeys.size) {
            const survivors = new Set(flattenFilterConditions(tree).map((condition) => this.conditionKey(condition)));
            const removedExternal = this.externalConditions().filter((condition) => !survivors.has(this.conditionKey(condition)));
            if (removedExternal.length) {
                this.atExternalFiltersChange.emit({
                    removed: removedExternal,
                    filters: this.pruneConditions(this.search_filters, removedExternal),
                });
            }
        }
        // Whatever the chip row returned, the internal set keeps only the
        // conditions the table itself authored. External ones are the host's to
        // drop, and arrive back through `search_filters`.
        const internalTree = this.pruneConditions(tree, flattenFilterConditions(tree).filter((condition) => externalKeys.has(this.conditionKey(condition))));
        if (!internalTree || countFilterConditions(internalTree) === 0) {
            // Handle clear all case
            this.selectedFilters = {
                id: 'root',
                logical_operator: 'And',
                children: [],
            };
            this.menuSelectedIds = [];
            this.updateActiveFilters();
            return;
        }
        this.handleFilterTreeChange(internalTree);
        this.updateActiveFilters();
    }
    /** A copy of `group` without the listed conditions, leaving the source untouched. */
    pruneConditions(group, conditions) {
        const empty = {
            id: 'root',
            logical_operator: 'And',
            children: [],
        };
        if (!group)
            return empty;
        const copy = JSON.parse(JSON.stringify(group));
        if (!conditions.length)
            return copy;
        const doomed = new Set(conditions.map((condition) => this.conditionKey(condition)));
        const prune = (node) => ({
            ...node,
            children: node.children
                .map((child) => (isFilterGroup(child) ? prune(child) : child))
                .filter((child) => isFilterGroup(child)
                ? child.children.length > 0
                : !doomed.has(this.conditionKey(child))),
        });
        return prune(copy);
    }
    relabelFilterNode(node) {
        if ('children' in node) {
            return {
                ...node,
                children: node.children.map((child) => this.relabelFilterNode(child)),
            };
        }
        const column = this.col_defs.find((col) => col.field === node.id);
        const filterOptions = this.convertDropdownKeysToSelectOptions(column);
        return {
            id: node.id,
            value: node.value,
            operator: node.operator ?? 'contains',
            label: column?.headerName || node.id,
            ...(filterOptions && { filter_options: filterOptions }),
        };
    }
    handleFilterTreeChange(tree) {
        // If the tree is empty or contains a single empty filter, reset all states
        const leaves = flattenFilterConditions(tree);
        if (!leaves.length || (leaves.length === 1 && leaves[0].id === '')) {
            this.selectedFilters = {
                id: 'root',
                logical_operator: 'And',
                children: [],
            };
            this.menuSelectedIds = [];
        }
        else {
            this.selectedFilters = this.relabelFilterNode(tree);
            // Set menuSelectedIds based on all filter IDs, regardless of their values
            this.menuSelectedIds = leaves.map((filter) => filter.id);
        }
    }
    /**
     * External and internal conditions are additive, not alternatives: a surface
     * may carry both a host-owned filter bar and the column filter menu, and the
     * user is entitled to see one record of what they asked for.
     */
    mergeFilterTrees() {
        const external = this.search_filters;
        if (!external || countFilterConditions(external) === 0) {
            return this.selectedFilters;
        }
        if (countFilterConditions(this.selectedFilters) === 0) {
            return external;
        }
        return {
            id: 'root',
            logical_operator: 'And',
            children: [external, this.selectedFilters],
        };
    }
    /**
     * `at-table-filters` removes a chip by mutating the tree it was handed, so it
     * gets a copy - otherwise removing an external chip would edit the host's own
     * `search_filters` object behind its back.
     */
    chipFilterTree() {
        return JSON.parse(JSON.stringify(this.activeFilterTree ?? this.selectedFilters));
    }
    /** A condition's identity for ownership comparison, which ids alone cannot give. */
    conditionKey(condition) {
        return `${condition.id}\u0000${condition.operator ?? ''}\u0000${condition.value}`;
    }
    externalConditions() {
        return this.search_filters
            ? flattenFilterConditions(this.search_filters)
            : [];
    }
    externalConditionKeys() {
        return new Set(this.externalConditions().map((condition) => this.conditionKey(condition)));
    }
    get hasDisplayableFilters() {
        return (this.shouldShowTableFilters || this.externalConditions().length > 0);
    }
    updateActiveFilters() {
        this.activeFilters = this.col_defs.reduce((acc, col) => {
            acc[col.field] = '';
            return acc;
        }, {});
        this.activeFilterTree = this.mergeFilterTrees();
        flattenFilterConditions(this.activeFilterTree).forEach((filter) => {
            if (filter.value) {
                this.activeFilters[filter.id] = filter.value;
            }
        });
        this.clearSelectionForQueryChange();
        if (this.server_side_mode) {
            this.emitSearchParamsChange();
        }
        else {
            if (this.agGrid) {
                this.setupExternalFilters();
                this.agGrid.onFilterChanged();
            }
            else {
                console.log('agGrid not available, cannot apply filter');
            }
        }
    }
    handleSearchChange(event) {
        this.searchValue = event.detail || '';
        this.updateActiveFilters();
    }
    handlePageChange(event) {
        this.currentPage = event.detail;
        this.emitSearchParamsChange();
    }
    handlePageSizeChange(event) {
        this.pageSize = event.detail;
        this.currentPage = 1;
        this.clearSelectionForQueryChange();
        this.emitSearchParamsChange();
    }
    buildSearchParams() {
        const startRow = (this.currentPage - 1) * this.pageSize;
        const endRow = this.currentPage * this.pageSize;
        const columnState = this.agGrid.getColumnState();
        const sortedColumn = columnState.find((col) => col.sort !== null && col.sort !== undefined);
        const visibleColumns = columnState
            .filter((col) => !col.hide && col.colId !== AtSearchTable.SELECTION_COL_ID)
            .map((col) => col.colId);
        const hasPopulatedFieldFilter = Object.values(this.activeFilters).some((v) => v !== '');
        let direction;
        if (sortedColumn?.sort === 'asc') {
            direction = SortDirection.ASC;
        }
        else if (sortedColumn?.sort === 'desc') {
            direction = SortDirection.DESC;
        }
        else {
            direction = SortDirection.ASC;
        }
        return {
            columns: visibleColumns,
            globalFilter: this.searchValue,
            ...(hasPopulatedFieldFilter
                ? { fieldFilters: this.activeFilters }
                : {}),
            startRow: startRow,
            endRow: endRow,
            sort: sortedColumn?.colId ?? '',
            direction,
        };
    }
    emitSearchParamsChange() {
        if (!this.agGrid)
            return;
        this.atSearchParamsChange.emit(this.buildSearchParams());
    }
    handleExport(event) {
        const exportType = event.detail;
        if (exportType === 'CSV') {
            this.atExportCsv.emit({
                start: (this.currentPage - 1) * this.pageSize,
                end: this.currentPage * this.pageSize,
            });
        }
        else if (exportType === 'PDF') {
            const columnDetails = this.col_defs
                .filter((col) => !col.hide)
                .map((col) => ({
                field: col.field,
                displayName: col.headerName || col.field,
                actualWidth: col.width,
            }));
            this.atExportPdf.emit(columnDetails);
        }
    }
    convertDropdownKeysToSelectOptions(column) {
        if (column?.filterOptions?.dropdownKeys) {
            return column.filterOptions.dropdownKeys.map((key) => ({
                value: key.content,
                label: key.translationKey,
            }));
        }
    }
    render() {
        return (h(Host, { key: '0a635c2b39b5b1befe2c255bcf2c9cd66c36a48b', class: this.server_side_mode ? 'is-loading' : '' }, h("at-table-actions", { key: 'e11b3e5e6c6e3756f388a5eab132bcef07c7dcb3', ag_grid: this.agGrid }, h("at-control-group", { key: '503e912e94e9d985b6ad50a8450b7d437ace5652', slot: "search" }, this.shouldShowTableFilters && (h("at-table-filter-menu", { key: '7506193c01804ba41ed1ce007d154c81aa5c091a', ref: (el) => (this.filterMenuEl =
                el), col_defs: this.col_defs, filters: this.selectedFilters, onAtChange: (event) => this.handleFilterChange(event) })), h("at-search", { key: '0dbe256596e04e59923193a7ae6e7e0262b43f7f', class: "w-input-md", info_text: this.searchInfoTooltip, placeholder: this.translations.ATUI.TABLE.SEARCH_BY_KEYWORD, onAtChange: (event) => this.handleSearchChange(event) })), h("div", { key: '0d5f8e2042761e7e1640b7e3193f191b5a17f282', class: "contents", slot: "filter-bar" }, h("slot", { key: 'b5f3b941cb01c923144f1757d0c17280c60b8ef4', name: "filter-bar" })), this.hasDisplayableFilters && (h("at-table-filters", { key: '00819735ea53c2c9aee9358f363f598e365b595a', slot: "filters", filters: this.chipFilterTree(), onAtChange: (event) => this.handleFilterChange(event), onAtFilterClick: () => this.filterMenuEl?.openMenu() })), this.show_reload_button && (h("at-reload-button", { key: 'ec32de836c07c3c084f8f17a903bedd0726bca23', slot: "reload-button", has_updates: this.has_updates, onAtuiReload: (event) => {
                // at-reload-button's atuiReload otherwise
                // bubbles straight through this non-shadow
                // host (same name we re-emit below), so a
                // consumer listening on <at-search-table>
                // would see both the bubbled original and
                // this re-emit for one click.
                event.stopPropagation();
                this.atuiReload.emit();
            } })), this.show_export_menu && (h("at-table-export-menu", { key: 'f8dc9ec2f031dd880ba4127dff632cd1c94ae9f6', slot: "export-menu", show_csv: this.show_csv_export, show_pdf: this.show_pdf_export, onAtChange: (event) => this.handleExport(event) })), this.shouldShowColumnManager && (h("at-column-manager", { key: 'e048ce6d487529a5a50f91e3a512bf48e5339553', slot: "column-manager", col_defs: this.col_defs, onAtChange: (event) => this.handleColumnChange(event) })), h("div", { key: 'bc7c917851d93b9ddf908b93ec5383718f1e975c', slot: "leading-actions" }, h("slot", { key: 'f5080b3674ed7084695e4f82e1e8f2cf08d0227b', name: "leading-actions" })), h("div", { key: '62d27f4759543be55fdb6b6a3a8242b886743e76', slot: "actions" }, h("slot", { key: 'f3a68c7faeb23532633ab7a0adec1c54c69fefb1', name: "actions" }))), this.renderSelectionBar(), h("div", { key: '12edbae1afc86b9a5a89047527cc309ecbab5b8e', class: "relative" }, h("at-table", { key: '37ec50dcccbff9e3ba52e64431fa7beab90cce7f', ref: (el) => (this.tableEl = el), table_data: this.table_data, col_defs: this.gridColDefs, row_id_field: this.row_id_field, page_size: this.server_side_mode
                ? this.pageSize
                : this.page_size, use_custom_pagination: this.server_side_mode || this.use_custom_pagination, use_custom_sorting: this.server_side_mode, auto_size_columns: this.auto_size_columns, can_auto_init: false, onAtColumnVisibilityChange: (event) => this.syncColumnVisibility(event) }), this.server_side_mode && (h("div", { key: '4f557d795e9248769bbd97d5bac02829b9a56fbd', class: `loading-overlay bg-surface-foreground/80 absolute inset-0 z-10 items-center justify-center py-120 ${this.showLoadingOverlay ? 'is-visible' : ''}` }, h("div", { key: '13eda7d4636b4ac7476216f3d77b3b7e5c42eb8a', class: "flex items-center" }, h("at-loading", { key: '9f005f2d9d34dbfb419650010236859aad3f56c3', class: "relative mr-8", size: "sm", "data-name": "placeholder-spinner" }), h("span", { key: '40e46b390e799cf74a3b24ea80508d69896af96b', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.translations?.ATUI?.TABLE
            ?.LOADING_DATA)))), this.server_side_mode && (h("div", { key: '411b995f2cc4f623334bbc4e367c5fae7feefebd', class: `no-data-overlay absolute inset-0 z-10 flex-col items-center justify-center gap-8 py-120 ${!this.is_loading && this.hasNoData ? 'is-visible' : ''}` }, h("at-icon", { key: '2695861a77ac67d3b2a914a3a5f4d559dd5938f6', class: "fill-slate-300", name: this.hasActiveSearch
                ? 'search'
                : 'data_table', size: "sm", "data-name": "no-data-icon" }), h("span", { key: '244088aff19f97cfaa3502fd79a26b0d4b1d192a', class: "text-secondary text-sm font-medium", "data-name": "no-data-title" }, this.hasActiveSearch
            ? this.translations?.ATUI?.NO_RESULTS_FOUND
            : (this.no_data_message ??
                this.translations?.ATUI?.TABLE?.NO_DATA))))), this.server_side_mode && (h("at-table-pagination", { key: '8aac40b584a5862fc69d4d5141bfd54bc4144f03', current_page: this.currentPage, num_pages: this.totalPages, page_size: this.pageSize, page_size_options: this.page_size_options, onAtChange: (event) => this.handlePageChange(event), onAtPageSizeChange: (event) => this.handlePageSizeChange(event) }))));
    }
    static get is() { return "at-search-table"; }
    static get originalStyleUrls() {
        return {
            "$": ["at-search-table.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["at-search-table.css"]
        };
    }
    static get properties() {
        return {
            "table_data": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{\n        items: any[];\n        total: number;\n    }",
                    "resolved": "{ items: any[]; total: number; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Table data passed to at-table component."
                },
                "getter": false,
                "setter": false
            },
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Label for the table, appears above the search input."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            },
            "search_info_tooltip": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Info text displayed in a tooltip at the right of the search input. When omitted, a tooltip is\ngenerated automatically listing any visible columns flagged with\n`excludeFromGlobalSearch` in their column def; no icon is shown when\nnothing is excluded. Under `server_side_mode` that flag does not filter -\nthe server matches whichever columns it chooses - so supply this text\nyourself there rather than relying on the generated tooltip."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "search_info_tooltip"
            },
            "col_defs": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AtITableColumnDef[]",
                    "resolved": "AtITableColumnDef[]",
                    "references": {
                        "AtITableColumnDef": {
                            "location": "import",
                            "path": "../../../models/searchTableModel",
                            "id": "src/models/searchTableModel.ts::AtITableColumnDef",
                            "referenceLocation": "AtITableColumnDef"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Column definitions passed to at-table component."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "search_filters": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AtIFilterGroup",
                    "resolved": "AtIFilterGroup",
                    "references": {
                        "AtIFilterGroup": {
                            "location": "import",
                            "path": "../../../types",
                            "id": "src/types/index.ts::AtIFilterGroup",
                            "referenceLocation": "AtIFilterGroup"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "External search filters applied to the table data."
                },
                "getter": false,
                "setter": false
            },
            "page_size": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Default page size of the table"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "page_size",
                "defaultValue": "20"
            },
            "page_size_options": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AtISelectOption[]",
                    "resolved": "AtISelectOption[]",
                    "references": {
                        "AtISelectOption": {
                            "location": "import",
                            "path": "../../../types/select",
                            "id": "src/types/select.ts::AtISelectOption",
                            "referenceLocation": "AtISelectOption"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Options offered in the pagination page-size selector. When omitted a\nstandard set is used. The currently active page size is always included\nso the selector reflects the number of rows actually being loaded."
                },
                "getter": false,
                "setter": false
            },
            "show_table_filters": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Adds the table filters. Off by default - structured column filters earn\ntheir place on large data sets, where the search box alone stops being\nenough to find a row."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show_table_filters",
                "defaultValue": "false"
            },
            "show_column_manager": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Adds the column manager. On by default."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show_column_manager",
                "defaultValue": "true"
            },
            "row_selection": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Adds a checkbox column and the selection bar. Off by default."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "row_selection",
                "defaultValue": "false"
            },
            "row_id_field": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Field on each row whose value uniquely identifies it. Required by `row_selection`:\na page of rows is replaced wholesale as the user pages, so a selection outlives the\nrows it was made from only if each one can be named."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "row_id_field"
            },
            "row_noun": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "What one row is called, for the selection copy (\"3 devices selected\"). Defaults to\nthe translated \"row\"."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "row_noun"
            },
            "row_noun_plural": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Plural of `row_noun`, for languages the component cannot pluralise."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "row_noun_plural"
            },
            "row_selectable": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "(row: any) => boolean",
                    "resolved": "(row: any) => boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Decides which rows can be selected. A row it rejects renders a disabled checkbox, is\nleft out of the header checkbox, and never reads as selected in either scope. It\ncannot be applied to rows the browser has not loaded, so in `all-matching` scope the\nserver must apply the same rule - and `count` there is `total_matching` less the\nexclusions, which cannot discount rejected rows the table has never seen."
                },
                "getter": false,
                "setter": false
            },
            "show_reload_button": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Adds the table reload button. Off by default - the reload button is\nopt-in, so existing tables don't gain new UI just from upgrading the\nlibrary."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show_reload_button",
                "defaultValue": "false"
            },
            "has_updates": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Shows an indicator on the reload button when the underlying data has\nchanged since it was last loaded. This component does not detect\nchanges itself \u2014 set this to true once the consumer knows of an\nupdate (e.g. from a websocket or poll) and back to false once the\nuser reloads."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "has_updates",
                "defaultValue": "false"
            },
            "show_export_menu": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Adds the table export menu. On by default."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show_export_menu",
                "defaultValue": "true"
            },
            "show_csv_export": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Offers the CSV export option in the export menu. On by default."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show_csv_export",
                "defaultValue": "true"
            },
            "show_pdf_export": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Offers the PDF export option in the export menu. On by default."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show_pdf_export",
                "defaultValue": "true"
            },
            "use_custom_pagination": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "If true, disables pagination on the table and shows all data at once.\n\nThis only applies for client-side filtering mode. When `server_side_mode` is enabled,\nthe component always loads the <at-table-pagination> UI for pagination, regardless of this setting."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "use_custom_pagination",
                "defaultValue": "false"
            },
            "auto_size_columns": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, enables automatic column resizing to fit available space.\nColumns will be sized proportionally based on their content and constraints. Fixed widths in column defs will be respected."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "auto_size_columns",
                "defaultValue": "true"
            },
            "search_hidden_columns": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "If true, columns hidden by the column manager are still matched by the search box.\nOff by default, so hiding a column also stops its content matching, which is what AG\nGrid's quick filter does on the at-table + at-table-actions path. Enable it to keep a\ndeliberately hidden column searchable."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "search_hidden_columns",
                "defaultValue": "false"
            },
            "server_side_mode": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "If true, enables server-side data loading mode where filtering,\nsearching, and pagination are handled externally"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "server_side_mode",
                "defaultValue": "false"
            },
            "is_loading": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, displays a loading placeholder and hides table content.\nUsed for server-side data fetching to indicate loading state."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "is_loading",
                "defaultValue": "false"
            },
            "no_data_message": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Message shown in place of the rows when there is no data to display.\nDefaults to a translated \"No Data\" message."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "no_data_message"
            }
        };
    }
    static get states() {
        return {
            "selectedIds": {},
            "excludedIds": {},
            "selectionScope": {},
            "hasFloatingSelectionActions": {},
            "pageEpoch": {},
            "translations": {},
            "agGrid": {},
            "tableCreated": {},
            "activeFilters": {},
            "activeFilterTree": {},
            "selectedFilters": {},
            "menuSelectedIds": {},
            "searchValue": {},
            "currentPage": {},
            "pageSize": {},
            "showLoadingOverlay": {}
        };
    }
    static get events() {
        return [{
                "method": "atSearchParamsChange",
                "name": "atSearchParamsChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when search params change in server-side mode.\nContains filters, search text, pagination info"
                },
                "complexType": {
                    "original": "AtISearchTableParams",
                    "resolved": "AtISearchTableParams",
                    "references": {
                        "AtISearchTableParams": {
                            "location": "import",
                            "path": "../../../types",
                            "id": "src/types/index.ts::AtISearchTableParams",
                            "referenceLocation": "AtISearchTableParams"
                        }
                    }
                }
            }, {
                "method": "atuiReload",
                "name": "atuiReload",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when the reload button is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "atExportCsv",
                "name": "atExportCsv",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when CSV export is requested"
                },
                "complexType": {
                    "original": "AtIPaginationParams",
                    "resolved": "AtIPaginationParams",
                    "references": {
                        "AtIPaginationParams": {
                            "location": "import",
                            "path": "../../../types",
                            "id": "src/types/index.ts::AtIPaginationParams",
                            "referenceLocation": "AtIPaginationParams"
                        }
                    }
                }
            }, {
                "method": "atExportPdf",
                "name": "atExportPdf",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when PDF export is requested"
                },
                "complexType": {
                    "original": "AtIColumnDetails[]",
                    "resolved": "AtIColumnDetails[]",
                    "references": {
                        "AtIColumnDetails": {
                            "location": "import",
                            "path": "../../../types",
                            "id": "src/types/index.ts::AtIColumnDetails",
                            "referenceLocation": "AtIColumnDetails"
                        }
                    }
                }
            }, {
                "method": "atExternalFiltersChange",
                "name": "atExternalFiltersChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the user removes a chip belonging to `search_filters`.\n\nThe table never edits a prop it does not own, so the removal is a request:\nthe payload carries the conditions taken away and the external tree with\nthem gone, ready for the host to assign back to `search_filters`. Chips the\ntable authored itself are removed internally and do not emit this."
                },
                "complexType": {
                    "original": "AtIExternalFiltersChange",
                    "resolved": "AtIExternalFiltersChange",
                    "references": {
                        "AtIExternalFiltersChange": {
                            "location": "import",
                            "path": "../../../types/filter",
                            "id": "src/types/filter.ts::AtIExternalFiltersChange",
                            "referenceLocation": "AtIExternalFiltersChange"
                        }
                    }
                }
            }, {
                "method": "atSelectionChange",
                "name": "atSelectionChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted whenever the selection or its scope changes, including when the table\nclears it itself because the query changed."
                },
                "complexType": {
                    "original": "AtISelection",
                    "resolved": "AtISelection<any>",
                    "references": {
                        "AtISelection": {
                            "location": "import",
                            "path": "../../../types",
                            "id": "src/types/index.ts::AtISelection",
                            "referenceLocation": "AtISelection"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "updateRowByIndex": {
                "complexType": {
                    "signature": "<T>(rowUpdates: RowUpdate<T>[], options?: RowUpdateOptions) => Promise<void>",
                    "parameters": [{
                            "name": "rowUpdates",
                            "type": "RowUpdate<T>[]",
                            "docs": "- An array of objects specifying the row indices and the data updates to apply.\n- `index`: The displayed index of the row to update.\n- `update`: An object containing the updated data for the row."
                        }, {
                            "name": "options",
                            "type": "{ flash: boolean; forceRefresh: boolean; }",
                            "docs": "- Optional settings for the update operation.\n- `flash`: Whether to visually flash the updated rows after the data change (improves user visibility).\n- `forceRefresh`: Whether to force refresh the row cells after updating (useful for advanced rendering scenarios)."
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "RowUpdate": {
                            "location": "global",
                            "id": "global::RowUpdate"
                        },
                        "T": {
                            "location": "global",
                            "id": "global::T"
                        },
                        "RowUpdateOptions": {
                            "location": "global",
                            "id": "global::RowUpdateOptions"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Updates the data of rows in the AG Grid based on their displayed row index.\n\nUse this method when you need to programmatically update one or more specific rows in the grid,\nidentified by their current displayed index. This is particularly useful when you want to perform\npartial updates (such as in-place cell editing, real-time updates, or upon receiving new data from a\nserver), and want to reflect these changes immediately in the UI with optional visual feedback.",
                    "tags": [{
                            "name": "template",
                            "text": "T - The data type of the row's underlying data structure."
                        }, {
                            "name": "param",
                            "text": "rowUpdates - An array of objects specifying the row indices and the data updates to apply.\n- `index`: The displayed index of the row to update.\n- `update`: An object containing the updated data for the row."
                        }, {
                            "name": "param",
                            "text": "options - Optional settings for the update operation.\n- `flash`: Whether to visually flash the updated rows after the data change (improves user visibility).\n- `forceRefresh`: Whether to force refresh the row cells after updating (useful for advanced rendering scenarios)."
                        }, {
                            "name": "example",
                            "text": "// Update row at displayed index 2 with new values and flash the change\nupdateRowByIndex([{ index: 2, update: { status: 'Processed' }}], { flash: true });"
                        }, {
                            "name": "remarks",
                            "text": "- This function works with currently rendered rows; if rows are virtualized or paged out, ensure\n  the specified indices match the grid's current rendering context.\n- Recommended for cases where quick, UI-driven row data mutations are required (such as action buttons,\n  websocket pushes, or UI triggers)."
                        }]
                }
            },
            "getDisplayedRows": {
                "complexType": {
                    "signature": "<T>() => Promise<IRowNode<T>[]>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "IRowNode": {
                            "location": "import",
                            "path": "ag-grid-community",
                            "id": "../node_modules/ag-grid-community/dist/types/main.d.ts::IRowNode",
                            "referenceLocation": "IRowNode"
                        },
                        "T": {
                            "location": "global",
                            "id": "global::T"
                        }
                    },
                    "return": "Promise<IRowNode<T>[]>"
                },
                "docs": {
                    "text": "Returns the **currently displayed row nodes** from the ag-Grid instance.\n\nThis asynchronous method retrieves an array of row nodes representing the rows currently visible\n(rendered) in the grid, after filtering, sorting, and other view-based operations.",
                    "tags": [{
                            "name": "template",
                            "text": "T The data type contained in each row node."
                        }, {
                            "name": "returns",
                            "text": "Promise resolving to an array of displayed row nodes."
                        }]
                }
            },
            "getGridApi": {
                "complexType": {
                    "signature": "() => Promise<GridApi>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "GridApi": {
                            "location": "import",
                            "path": "ag-grid-community",
                            "id": "../node_modules/ag-grid-community/dist/types/main.d.ts::GridApi",
                            "referenceLocation": "GridApi"
                        }
                    },
                    "return": "Promise<GridApi<any>>"
                },
                "docs": {
                    "text": "Returns the underlying ag-Grid API, for the cases this component does not\nwrap \u2014 saving and restoring column state, for instance.\n\nThe grid is not built until column definitions arrive, so this resolves\nonce it exists rather than returning null to a caller that has no way of\nknowing when to ask again. Rejects if the table leaves the DOM while the\ngrid is still unbuilt, so a caller is never left hanging on a table that\ncan no longer deliver one.",
                    "tags": [{
                            "name": "returns",
                            "text": "Promise resolving to the grid API."
                        }]
                }
            },
            "getSelection": {
                "complexType": {
                    "signature": "() => Promise<AtISelection>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "AtISelection": {
                            "location": "import",
                            "path": "../../../types",
                            "id": "src/types/index.ts::AtISelection",
                            "referenceLocation": "AtISelection"
                        }
                    },
                    "return": "Promise<AtISelection<any>>"
                },
                "docs": {
                    "text": "Returns what the user has selected. In `all-matching` scope the ids are absent by\ndesign - server-side the table holds one page, so the selection is the query it\ncarries plus whatever the user unticked.",
                    "tags": []
                }
            },
            "getSelectedRows": {
                "complexType": {
                    "signature": "<T = any>() => Promise<T[]>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "T": {
                            "location": "global",
                            "id": "global::T"
                        }
                    },
                    "return": "Promise<T[]>"
                },
                "docs": {
                    "text": "The selected rows the grid currently holds. In `all-matching` scope, or for a\nselection made on another page, this is fewer rows than are selected - use\n`getSelection()` to act on the selection.",
                    "tags": []
                }
            },
            "clearSelection": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Clears the selection and emits `atSelectionChange`.",
                    "tags": []
                }
            },
            "setSelection": {
                "complexType": {
                    "signature": "(ids: string[]) => Promise<void>",
                    "parameters": [{
                            "name": "ids",
                            "type": "string[]",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Selects the given rows by id, for restoring a selection the host kept.",
                    "tags": []
                }
            },
            "selectAllMatching": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Expands the selection to every row matching the current filter, as the selection\nbar's own offer does. Declines when the host reports no total, matching the offer,\nwhich is withheld for the same reason: the scope would describe a set whose size\nthe table cannot state.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "page_size",
                "methodName": "handlePageSizeProp"
            }, {
                "propName": "selectedFilters",
                "methodName": "handleSelectedFiltersChange"
            }, {
                "propName": "search_filters",
                "methodName": "handleSearchFiltersChange"
            }, {
                "propName": "is_loading",
                "methodName": "handleLoadingChange"
            }, {
                "propName": "has_updates",
                "methodName": "warnIfHasUpdatesIsANoOp"
            }, {
                "propName": "show_reload_button",
                "methodName": "warnIfHasUpdatesIsANoOp"
            }];
    }
}
