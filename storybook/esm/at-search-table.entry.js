import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-ChWFprTL.js';
import { f as fetchTranslations } from './translation-CxDdWBmt.js';
import { b as flattenFilterConditions, c as countFilterConditions, r as rowMatchesFilterGroup } from './filter-tree.util-CYRBwQ7z.js';

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
        // `col_defs` defaults to `[]`, which is truthy — so a plain `this.col_defs`
        // check passed on first load and built the grid before any columns (or a
        // caller-supplied `page_size`) had arrived. The grid was then marked
        // created and never rebuilt, leaving pagination stuck on the default.
        // Wait for actual columns, matching `emitInitialServerParamsIfReady`.
        if (this.col_defs?.length && !this.tableCreated && this.tableEl) {
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
        return (h(Host, { key: '9b8c43cc37119f38f58898e7d73c40a1bbfcc378', class: this.server_side_mode ? 'is-loading' : '' }, h("at-table-actions", { key: '8fa77cf7c38c6688428268a3a2e52c8e628ed48b', ag_grid: this.agGrid }, h("at-control-group", { key: '89027962817720dd2dde49c9dc77f72652e7620f', slot: "search" }, this.shouldShowDropdownFilters &&
            !this.search_filters && (h("at-table-filter-menu", { key: '6297c9cfec0a4e8706d9bed55184b9693df237c5', col_defs: this.col_defs, filters: this.selectedFilters, onAtChange: (event) => this.handleFilterChange(event) })), h("at-search", { key: '8090a8ca20af61b5d8c626048dc2231744e638af', class: "w-input-md",
            // label={this.search_label}
            hint_text: this.search_hint, info_text: this.search_info_tooltip, placeholder: this.translations.ATUI.TABLE.SEARCH_BY_KEYWORD, onAtChange: (event) => this.handleSearchChange(event) })), this.shouldShowDropdownFilters && (h("at-table-filters", { key: 'e2c202e3963576bc455adb9939371982bccfb15f', slot: "filters", filters: this.selectedFilters, onAtChange: (event) => this.handleFilterChange(event) })), !this.hide_export_menu && (h("at-table-export-menu", { key: '32be9c8265ef1192d6cd3fd8e1648ac17ef2e604', slot: "export-menu", hide_csv: this.hide_csv_export, hide_pdf: this.hide_pdf_export, onAtChange: (event) => this.handleExport(event) })), this.shouldShowColumnManager && (h("at-column-manager", { key: 'b3a3ea4b7d1ada1348e519cb234bb3f98a0a8fd5', slot: "column-manager", col_defs: this.col_defs, onAtChange: (event) => this.handleColumnChange(event) })), h("div", { key: 'b3200a02fa5aa76ba84a87fd812054dcb0af47d9', slot: "actions" }, h("slot", { key: '214a096aaa59b0fb7cf72f102815897431be7a2a', name: "actions" }))), h("slot", { key: '92a2acb97cdbd2bd2d4cf9af38b91986aba7ba0d', name: "multi-select-actions" }), h("div", { key: 'b066a9eb59033891701f4e955e78815e2d2e74fe', class: "relative" }, h("at-table", { key: 'dd2b5be9ac573264862478fbd82be8ef76314cec', ref: (el) => (this.tableEl = el), table_data: this.table_data, col_defs: this.col_defs, page_size: this.server_side_mode
                ? this.pageSize
                : this.page_size, use_custom_pagination: this.server_side_mode || this.use_custom_pagination, use_custom_sorting: this.server_side_mode, auto_size_columns: this.auto_size_columns, disable_auto_init: !this.server_side_mode }), this.server_side_mode && (h("div", { key: '91b813ff110e2b2cfff79fae57bc7cd9cbecce37', class: `loading-overlay bg-surface-foreground/80 absolute inset-0 z-10 items-center justify-center py-120 ${this.showLoadingOverlay ? 'is-visible' : ''}` }, h("div", { key: '7d26d80e1f868d94f1fc34042c1502ed47a95ba9', class: "flex items-center" }, h("at-loading", { key: '96ee9697d91fe3892d9b83ec40281ca4f26721c7', class: "relative mr-8", size: "sm", "data-name": "placeholder-spinner" }), h("span", { key: 'b556d9c329744d62af2efd6056ae3b8b25fcb864', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.translations?.ATUI?.TABLE
            ?.LOADING_DATA)))), this.server_side_mode && (h("div", { key: '2b0aa2da1307c8732b533b17d5f89820e64b5f9a', class: `no-data-overlay absolute inset-0 z-10 flex-col items-center justify-center gap-8 py-120 ${!this.loading && this.hasNoData ? 'is-visible' : ''}` }, h("at-icon", { key: 'e707972c294f0fc5bc05565f4e9e0a87c1451216', class: "fill-slate-300", name: this.hasActiveSearch
                ? 'search'
                : 'data_table', size: "sm", "data-name": "no-data-icon" }), h("span", { key: '618c0c2a8196ac6dafe91594d090fe40e4da7635', class: "text-secondary text-sm font-medium", "data-name": "no-data-title" }, this.hasActiveSearch
            ? this.translations?.ATUI?.NO_RESULTS_FOUND
            : (this.no_data_message ??
                this.translations?.ATUI?.TABLE?.NO_DATA))))), this.server_side_mode && (h("at-table-pagination", { key: 'c7d7a9fca091c42f344070681cb8f974667274ce', current_page: this.currentPage, num_pages: this.totalPages, page_size: this.pageSize, page_size_options: this.page_size_options, onAtChange: (event) => this.handlePageChange(event), onAtPageSizeChange: (event) => this.handlePageSizeChange(event) }))));
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
        "loading": [{
                "handleLoadingChange": 0
            }]
    }; }
};
AtSearchTable.style = atSearchTableCss();

export { AtSearchTable as at_search_table };
