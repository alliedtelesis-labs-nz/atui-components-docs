import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-BatHonhZ.js';
import { f as fetchTranslations } from './translation-DTZ4TEQl.js';
import { b as flattenFilterConditions, c as countFilterConditions, r as rowMatchesFilterGroup } from './filter-tree.util-CYRBwQ7z.js';
import { r as resolveCellSearchText } from './cell-search-text-CHtPw_Yl.js';
import './index-BcMmkkI-.js';
import './time-date-presentation.util-H5gcGi8Y.js';
import './at-time-date.util-Bfdzn_RG.js';
import './date-C3LwY5aR.js';
import './relative-time-label-CLVJlEqK.js';

var SortDirection;
(function (SortDirection) {
    SortDirection[SortDirection["ASC"] = 1] = "ASC";
    SortDirection[SortDirection["DESC"] = -1] = "DESC";
})(SortDirection || (SortDirection = {}));

const atSearchTableCss = () => `.is-loading .ag-overlay-no-rows-wrapper{display:none}.loading-overlay,.no-data-overlay{display:none;opacity:0;pointer-events:none;transition:opacity 0.2s ease, display 0.2s allow-discrete}.loading-overlay.is-visible,.no-data-overlay.is-visible{display:flex;opacity:1;pointer-events:auto}@starting-style{.loading-overlay.is-visible,.no-data-overlay.is-visible{opacity:0}}`;

const AtSearchTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atSearchParamsChange = createEvent(this, "atSearchParamsChange", 7);
        this.atuiReload = createEvent(this, "atuiReload", 7);
        this.atExportCsv = createEvent(this, "atExportCsv", 7);
        this.atExportPdf = createEvent(this, "atExportPdf", 7);
    }
    /**
     * Table data passed to at-table component.
     */
    table_data;
    /**
     * Label for the table, appears above the search input.
     */
    label;
    /**
     * Info text displayed in a tooltip at the right of the search input.
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
    get el() { return getElement(this); }
    translations;
    agGrid;
    /** Pending `getGridApi()` callers, settled once the grid is built. */
    gridReady;
    resolveGridReady;
    rejectGridReady;
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
    warnIfHasUpdatesIsANoOp() {
        if (this.has_updates && !this.show_reload_button) {
            console.warn('atui-search-table: has_updates has no effect while show_reload_button is false — set show_reload_button to true to show the reload button (and its indicator).');
        }
    }
    async componentDidLoad() {
        await this.initGrid();
        this.emitInitialServerParamsIfReady();
        this.handleLoadingChange(this.is_loading);
    }
    async componentDidUpdate() {
        if (!this.tableCreated) {
            await this.initGrid();
        }
        this.emitInitialServerParamsIfReady();
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
    }
    async initGrid() {
        // `col_defs` defaults to `[]`, which is truthy — so a plain `this.col_defs`
        // check passed on first load and built the grid before any columns (or a
        // caller-supplied `page_size`) had arrived. The grid was then marked
        // created and never rebuilt, leaving pagination stuck on the default.
        // Wait for actual columns, matching `emitInitialServerParamsIfReady`.
        if (this.col_defs?.length && !this.tableCreated && this.tableEl) {
            this.agGrid = await this.tableEl.createGrid();
            this.tableCreated = true;
            this.resolveGridReady?.(this.agGrid);
            this.setupExternalFilters();
            this.agGrid.addEventListener('sortChanged', () => {
                if (this.server_side_mode) {
                    this.currentPage = 1;
                    this.emitSearchParamsChange();
                }
            });
            if (this.table_data?.items) {
                this.agGrid.setGridOption('rowData', this.table_data.items);
            }
        }
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
                    .filter((colDef) => this.search_hidden_columns ||
                    colDef.hide !== true)
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
        if (!tree || countFilterConditions(tree) === 0) {
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
        this.handleFilterTreeChange(tree);
        this.updateActiveFilters();
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
    updateActiveFilters() {
        this.activeFilters = this.col_defs.reduce((acc, col) => {
            acc[col.field] = '';
            return acc;
        }, {});
        this.activeFilterTree = this.search_filters ?? this.selectedFilters;
        flattenFilterConditions(this.selectedFilters).forEach((filter) => {
            if (filter.value) {
                this.activeFilters[filter.id] = filter.value;
            }
        });
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
        this.emitSearchParamsChange();
    }
    emitSearchParamsChange() {
        if (!this.agGrid)
            return;
        const startRow = (this.currentPage - 1) * this.pageSize;
        const endRow = this.currentPage * this.pageSize;
        const columnState = this.agGrid.getColumnState();
        const sortedColumn = columnState.find((col) => col.sort !== null && col.sort !== undefined);
        const visibleColumns = columnState
            .filter((col) => !col.hide)
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
        const searchParams = {
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
        this.atSearchParamsChange.emit(searchParams);
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
        return (h(Host, { key: 'b8f839f95eda56117cc0a3e3b6018f640b64925a', class: this.server_side_mode ? 'is-loading' : '' }, h("at-table-actions", { key: 'f29efe9c99d0be63ea31321f19bb9b9a5cff1a6d', ag_grid: this.agGrid }, h("at-control-group", { key: '9653c183cf497fe593c522f7849ad75881acdd4c', slot: "search" }, this.shouldShowTableFilters &&
            !this.search_filters && (h("at-table-filter-menu", { key: '0b5b457bb57a81c83c9ef00c2697b3ab95072666', ref: (el) => (this.filterMenuEl =
                el), col_defs: this.col_defs, filters: this.selectedFilters, onAtChange: (event) => this.handleFilterChange(event) })), h("at-search", { key: '0c5ed17d342e9e0e4baa78a14e37477122ca0d07', class: "w-input-md", info_text: this.search_info_tooltip, placeholder: this.translations.ATUI.TABLE.SEARCH_BY_KEYWORD, onAtChange: (event) => this.handleSearchChange(event) })), this.shouldShowTableFilters && (h("at-table-filters", { key: 'eaa7385ba7c7e6bcda124cfee052aad4a801735c', slot: "filters", filters: this.selectedFilters, onAtChange: (event) => this.handleFilterChange(event), onAtFilterClick: () => this.filterMenuEl?.openMenu() })), this.show_reload_button && (h("at-reload-button", { key: 'd637627a70a87831e1e495ea67a69961dfc46d32', slot: "reload-button", has_updates: this.has_updates, onAtuiReload: (event) => {
                // at-reload-button's atuiReload otherwise
                // bubbles straight through this non-shadow
                // host (same name we re-emit below), so a
                // consumer listening on <at-search-table>
                // would see both the bubbled original and
                // this re-emit for one click.
                event.stopPropagation();
                this.atuiReload.emit();
            } })), this.show_export_menu && (h("at-table-export-menu", { key: 'd5b02fdc8057fa53f3969ebd43bab6c2d2a45b56', slot: "export-menu", show_csv: this.show_csv_export, show_pdf: this.show_pdf_export, onAtChange: (event) => this.handleExport(event) })), this.shouldShowColumnManager && (h("at-column-manager", { key: '6161f595769d16c7f1af94ad515b58b33f7e223d', slot: "column-manager", col_defs: this.col_defs, onAtChange: (event) => this.handleColumnChange(event) })), h("div", { key: '5c2698e091f3609cec5dc7feeef4ec6f9dde7fdb', slot: "leading-actions" }, h("slot", { key: 'a978dbb092a7bbf9924ab170488c9d2ad8afda35', name: "leading-actions" })), h("div", { key: 'd9a6bfb5a051368c70adfe92704d5f793a424bd8', slot: "actions" }, h("slot", { key: 'c16574e824d6032ca73337a90eb2d87e561ebaa5', name: "actions" }))), h("slot", { key: '38dbade290ce5b3213f2c63aa777e0da20156a0b', name: "multi-select-actions" }), h("div", { key: 'd756f06996ef41a29dc655d454aa7acd54785171', class: "relative" }, h("at-table", { key: 'f347012c942fce90fbe3ad476332ac47bcd83163', ref: (el) => (this.tableEl = el), table_data: this.table_data, col_defs: this.col_defs, page_size: this.server_side_mode
                ? this.pageSize
                : this.page_size, use_custom_pagination: this.server_side_mode || this.use_custom_pagination, use_custom_sorting: this.server_side_mode, auto_size_columns: this.auto_size_columns, can_auto_init: this.server_side_mode }), this.server_side_mode && (h("div", { key: 'e27e39f080d52c2ab2621ceefd024c620b66f6ce', class: `loading-overlay bg-surface-foreground/80 absolute inset-0 z-10 items-center justify-center py-120 ${this.showLoadingOverlay ? 'is-visible' : ''}` }, h("div", { key: 'edf1eff68e592831f8e5288ecfd75dc691db59ad', class: "flex items-center" }, h("at-loading", { key: '576c0ffc9113df14f99bc5d9988603538e92d4bd', class: "relative mr-8", size: "sm", "data-name": "placeholder-spinner" }), h("span", { key: 'd6bf7efb8a4ed9ce72a0a92cd4da791e9ebab00f', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.translations?.ATUI?.TABLE
            ?.LOADING_DATA)))), this.server_side_mode && (h("div", { key: '7248763490dc1abdea65dd4b8ea5eae3a7b1d494', class: `no-data-overlay absolute inset-0 z-10 flex-col items-center justify-center gap-8 py-120 ${!this.is_loading && this.hasNoData ? 'is-visible' : ''}` }, h("at-icon", { key: 'ea03e11f2d98200369922e610f33eeccb8ab9182', class: "fill-slate-300", name: this.hasActiveSearch
                ? 'search'
                : 'data_table', size: "sm", "data-name": "no-data-icon" }), h("span", { key: 'd42e51e9a9f69f31af1f15eb682625b5a9e94701', class: "text-secondary text-sm font-medium", "data-name": "no-data-title" }, this.hasActiveSearch
            ? this.translations?.ATUI?.NO_RESULTS_FOUND
            : (this.no_data_message ??
                this.translations?.ATUI?.TABLE?.NO_DATA))))), this.server_side_mode && (h("at-table-pagination", { key: 'd8aae35bbd59abb93fb62240d59707af5b033a58', current_page: this.currentPage, num_pages: this.totalPages, page_size: this.pageSize, page_size_options: this.page_size_options, onAtChange: (event) => this.handlePageChange(event), onAtPageSizeChange: (event) => this.handlePageSizeChange(event) }))));
    }
    static get watchers() { return {
        "page_size": [{
                "handlePageSizeProp": 0
            }],
        "selectedFilters": [{
                "handleSelectedFiltersChange": 0
            }],
        "search_filters": [{
                "handleSearchFiltersChange": 0
            }],
        "is_loading": [{
                "handleLoadingChange": 0
            }],
        "has_updates": [{
                "warnIfHasUpdatesIsANoOp": 0
            }],
        "show_reload_button": [{
                "warnIfHasUpdatesIsANoOp": 0
            }]
    }; }
};
AtSearchTable.style = atSearchTableCss();

export { AtSearchTable as at_search_table };
