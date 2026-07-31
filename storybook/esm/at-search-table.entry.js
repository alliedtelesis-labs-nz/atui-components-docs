import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-m1WDiP3i.js';
import { f as fetchTranslations } from './translation-CxDdWBmt.js';

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
     * Label for the search input.
     */
    search_label;
    /**
     * Hint text displayed below the search label.
     */
    search_hint;
    /**
     * Info text displayed in the search info tooltip.
     */
    search_info_tooltip;
    /**
     * Column definitions passed to at-table component.
     */
    col_defs = [];
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
     * If true the table dropdown filters will not be added
     */
    hide_dropdown_filters;
    /**
     * If true the column manager will not be added
     */
    hide_column_manager;
    /**
     * If true the table export menu will not be added
     */
    hide_export_menu;
    /**
     * If true, hides CSV export option from export menu
     */
    hide_csv_export = false;
    /**
     * If true, hides PDF export option from export menu
     */
    hide_pdf_export = false;
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
     * If true, enables server-side data loading mode where filtering,
     * searching, and pagination are handled externally
     */
    server_side_mode = false;
    /**
     * If true, displays a loading placeholder and hides table content.
     * Used for server-side data fetching to indicate loading state.
     */
    loading = false;
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
    tableCreated = false;
    activeFilters = {};
    selectedFilters = [];
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
    get shouldShowDropdownFilters() {
        return (!this.hide_dropdown_filters &&
            this.col_defs &&
            this.col_defs.length > 0);
    }
    get shouldShowColumnManager() {
        return (!this.hide_column_manager &&
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
        this.menuSelectedIds = newValue.map((f) => f.id);
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
    }
    async componentDidLoad() {
        await this.initGrid();
        this.emitInitialServerParamsIfReady();
        this.handleLoadingChange(this.loading);
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
    async initGrid() {
        if (this.col_defs && !this.tableCreated && this.tableEl) {
            this.agGrid = await this.tableEl.createGrid();
            this.tableCreated = true;
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
            const searchValue = this.searchValue;
            if (searchValue) {
                const searchLower = searchValue.toLowerCase();
                const matchesSearch = this.col_defs.some((colDef) => {
                    let cellValue;
                    if (colDef.valueGetter &&
                        typeof colDef.valueGetter === 'function') {
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
                    return (cellValue &&
                        String(cellValue)
                            .toLowerCase()
                            .includes(searchLower));
                });
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
            return columnFilterResult;
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
        if (!event.detail ||
            (Array.isArray(event.detail) && event.detail.length === 0)) {
            // Handle clear all case
            this.selectedFilters = [];
            this.menuSelectedIds = [];
            this.updateActiveFilters();
            return;
        }
        if (Array.isArray(event.detail)) {
            if (typeof event.detail[0] === 'string') {
                this.handleMenuFilterChange(event.detail);
            }
            else if (typeof event.detail[0] === 'object') {
                this.handleFilterListChange(event.detail);
            }
        }
        this.updateActiveFilters();
    }
    handleMenuFilterChange(selectedIds) {
        this.selectedFilters = selectedIds.map((id) => ({
            id,
            value: '',
        }));
        this.menuSelectedIds = selectedIds;
    }
    handleFilterListChange(filters) {
        // If filters array is empty or contains a single empty filter, reset all states
        if (!filters.length || (filters.length === 1 && filters[0].id === '')) {
            this.selectedFilters = [];
            this.menuSelectedIds = [];
        }
        else {
            this.selectedFilters = filters;
            // Set menuSelectedIds based on all filter IDs, regardless of their values
            this.menuSelectedIds = filters.map((filter) => filter.id);
        }
    }
    updateActiveFilters() {
        this.activeFilters = this.col_defs.reduce((acc, col) => {
            acc[col.field] = '';
            return acc;
        }, {});
        this.selectedFilters.forEach((filter) => {
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
    render() {
        return (h(Host, { key: 'e7f7441426acdf1e2dff6e0dc1c13a4cd87f41a7', class: this.server_side_mode ? 'is-loading' : '' }, h("at-table-actions", { key: '3509adfe08fbbd8d8d6e4c989e40087f67db3b22', ag_grid: this.agGrid }, h("at-control-group", { key: '14bd8b81a2347a7487b4f4834a96b1f6ebda1293', slot: "search" }, this.shouldShowDropdownFilters && (h("at-table-filter-menu", { key: '2b63d976384d86a40a630fd9d0bc8e39c72ad850', col_defs: this.col_defs, selected: this.menuSelectedIds, onAtChange: (event) => this.handleFilterChange(event) })), h("at-search", { key: '664fa514aa692fe38cb9d49186279f0d23805554', class: "w-input-md", label: this.search_label, hint_text: this.search_hint, info_text: this.search_info_tooltip, placeholder: this.translations.ATUI.TABLE.SEARCH_BY_KEYWORD, onAtChange: (event) => this.handleSearchChange(event) })), this.shouldShowDropdownFilters && (h("at-table-filters", { key: 'a748f71aa2eff558ed2d607031690a2c897cdb43', slot: "filters", col_defs: this.col_defs, selected: this.selectedFilters, onAtChange: (event) => this.handleFilterChange(event) })), !this.hide_export_menu && (h("at-table-export-menu", { key: 'f750fcd991f3c64b70f0f93358463e667523ca68', slot: "export-menu", hide_csv: this.hide_csv_export, hide_pdf: this.hide_pdf_export, onAtChange: (event) => this.handleExport(event) })), this.shouldShowColumnManager && (h("at-column-manager", { key: '599568c0f0484fc2e151369746fcfc6e456cecbf', slot: "column-manager", col_defs: this.col_defs, onAtChange: (event) => this.handleColumnChange(event) })), h("div", { key: 'f49ba1931f8587663e913c2b3c91c1afefa371a6', slot: "actions" }, h("slot", { key: '57edda26f0c20973a870564355eec0683f281ff8', name: "actions" }))), h("slot", { key: 'fadbd97787076dbbec5a9eb817bbb9e982210ad2', name: "multi-select-actions" }), h("div", { key: '9d3201d6f3b5cb03d8b688ebb102f72ab5f1e8a3', class: "relative" }, h("at-table", { key: 'a88905aa1fa63fd41177d498a184db09661d5b1b', ref: (el) => (this.tableEl = el), table_data: this.table_data, col_defs: this.col_defs, page_size: this.server_side_mode
                ? this.pageSize
                : this.page_size, use_custom_pagination: this.server_side_mode || this.use_custom_pagination, use_custom_sorting: this.server_side_mode, auto_size_columns: this.auto_size_columns, disable_auto_init: !this.server_side_mode }), this.server_side_mode && (h("div", { key: '55a8315fab457770ffe2af0ecbf0d6f7ae5982bb', class: `loading-overlay bg-surface-foreground/80 absolute inset-0 z-10 items-center justify-center py-120 ${this.showLoadingOverlay ? 'is-visible' : ''}` }, h("div", { key: 'd0e6dc6abe966ede965b6da1d07cf7071ef537dd', class: "flex items-center" }, h("at-loading", { key: '922a80aff76532e133a435636eb902c53844f05a', class: "relative mr-8", size: "sm", "data-name": "placeholder-spinner" }), h("span", { key: 'e4cb75abb44fd2fd6d8614ad141958f80b9cb6d7', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.translations?.ATUI?.TABLE
            ?.LOADING_DATA)))), this.server_side_mode && (h("div", { key: '3a64d74420ce33a033997ac2b1487e18cbd0aea8', class: `no-data-overlay absolute inset-0 z-10 flex-col items-center justify-center gap-8 py-120 ${!this.loading && this.hasNoData ? 'is-visible' : ''}` }, h("at-icon", { key: '80849d40b9a4f12979f718168cc9d3b70a9f739b', class: "fill-slate-300", name: this.hasActiveSearch
                ? 'search'
                : 'data_table', size: "sm", "data-name": "no-data-icon" }), h("span", { key: '7a2002cc6e708d512a581bb1e77c09cd28e3f952', class: "text-secondary text-sm font-medium", "data-name": "no-data-title" }, this.hasActiveSearch
            ? this.translations?.ATUI?.NO_RESULTS_FOUND
            : (this.no_data_message ??
                this.translations?.ATUI?.TABLE?.NO_DATA))))), this.server_side_mode && (h("at-table-pagination", { key: 'dfc56df4cbc065fd5f16d0b6724b927cfac565ae', current_page: this.currentPage, num_pages: this.totalPages, page_size: this.pageSize, page_size_options: this.page_size_options, onAtChange: (event) => this.handlePageChange(event), onAtPageSizeChange: (event) => this.handlePageSizeChange(event) }))));
    }
    static get watchers() { return {
        "page_size": [{
                "handlePageSizeProp": 0
            }],
        "selectedFilters": [{
                "handleSelectedFiltersChange": 0
            }],
        "loading": [{
                "handleLoadingChange": 0
            }]
    }; }
};
AtSearchTable.style = atSearchTableCss();

export { AtSearchTable as at_search_table };
