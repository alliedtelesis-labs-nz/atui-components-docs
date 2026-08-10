import { h, Host, } from "@stencil/core";
import { fetchTranslations } from "../../../utils/translation";
import { SortDirection } from "../../../types/sort";
import { countFilterConditions, rowMatchesFilterGroup, flattenFilterConditions, } from "../../../utils/filter-tree.util";
import { resolveCellSearchText } from "../utils/cell-search-text";
/**
 * @category Data Tables
 * @description A searchable data table component that combines table functionality with integrated search capabilities. Provides real-time filtering and search result highlighting.
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
     * If true the table filters will not be added
     */
    hide_table_filters;
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
    el;
    translations;
    agGrid;
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
        return (!this.hide_table_filters &&
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
        return (h(Host, { key: 'cdb5d53c4a9e4dfe4620d0030ab4ff4a1256a552', class: this.server_side_mode ? 'is-loading' : '' }, h("at-table-actions", { key: 'e52db1c60d35dce25fb611810964501380d2e185', ag_grid: this.agGrid }, h("at-control-group", { key: '5140b9feefbd07f4d05da69a06be3e4a40d632c7', slot: "search" }, this.shouldShowTableFilters &&
            !this.search_filters && (h("at-table-filter-menu", { key: '2fdeda379eb823fd732d2e4fb14b2605e318e921', ref: (el) => (this.filterMenuEl =
                el), col_defs: this.col_defs, filters: this.selectedFilters, onAtChange: (event) => this.handleFilterChange(event) })), h("at-search", { key: '8a7bc06915f39183b8a9d151feea61aea602edf3', class: "w-input-md", info_text: this.search_info_tooltip, placeholder: this.translations.ATUI.TABLE.SEARCH_BY_KEYWORD, onAtChange: (event) => this.handleSearchChange(event) })), this.shouldShowTableFilters && (h("at-table-filters", { key: 'df6750252c6f0141a77c55148913e21b93d97cf4', slot: "filters", filters: this.selectedFilters, onAtChange: (event) => this.handleFilterChange(event), onAtFilterClick: () => this.filterMenuEl?.openMenu() })), !this.hide_export_menu && (h("at-table-export-menu", { key: '43a86708cebecbeb056554e71c712314160cdf0f', slot: "export-menu", hide_csv: this.hide_csv_export, hide_pdf: this.hide_pdf_export, onAtChange: (event) => this.handleExport(event) })), this.shouldShowColumnManager && (h("at-column-manager", { key: 'c79f6ed5f25c37fd7d9b7d77081347205ed064e5', slot: "column-manager", col_defs: this.col_defs, onAtChange: (event) => this.handleColumnChange(event) })), h("div", { key: 'e7b98dae04a95e256a0a83192d4e9877390f8661', slot: "actions" }, h("slot", { key: 'd5f34ff3b2c822387a4118a3f6fb6a7042c5c998', name: "actions" }))), h("slot", { key: '7e0d786feb6b062daa4a34f41ef9e636d0f1c1aa', name: "multi-select-actions" }), h("div", { key: 'b6fbbe2cda1526ddff213e7292cecf98548bc0e1', class: "relative" }, h("at-table", { key: 'fba938bd0b8a3bc2bb9935ff0e18ee8338df8ea4', ref: (el) => (this.tableEl = el), table_data: this.table_data, col_defs: this.col_defs, page_size: this.server_side_mode
                ? this.pageSize
                : this.page_size, use_custom_pagination: this.server_side_mode || this.use_custom_pagination, use_custom_sorting: this.server_side_mode, auto_size_columns: this.auto_size_columns, disable_auto_init: !this.server_side_mode }), this.server_side_mode && (h("div", { key: '8b0c423c6335674b78d282ce1f9975eab3953ea9', class: `loading-overlay bg-surface-foreground/80 absolute inset-0 z-10 items-center justify-center py-120 ${this.showLoadingOverlay ? 'is-visible' : ''}` }, h("div", { key: '4f231a189ecff9601475603708841392928a90e2', class: "flex items-center" }, h("at-loading", { key: 'c0453736de95095bac1083fdbff048fc39eed6b3', class: "relative mr-8", size: "sm", "data-name": "placeholder-spinner" }), h("span", { key: '96b946a9f5fa0285e85f001c31c9d10aa93181b3', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.translations?.ATUI?.TABLE
            ?.LOADING_DATA)))), this.server_side_mode && (h("div", { key: '93d15cf48e07d49ffa620cccc27cb7e2bb18eb76', class: `no-data-overlay absolute inset-0 z-10 flex-col items-center justify-center gap-8 py-120 ${!this.loading && this.hasNoData ? 'is-visible' : ''}` }, h("at-icon", { key: 'cc3aa6d8159b56ceba86766f03729774ff5b5882', class: "fill-slate-300", name: this.hasActiveSearch
                ? 'search'
                : 'data_table', size: "sm", "data-name": "no-data-icon" }), h("span", { key: '522efbce4327abe3a70cb0aa23b360a4c4c29f7d', class: "text-secondary text-sm font-medium", "data-name": "no-data-title" }, this.hasActiveSearch
            ? this.translations?.ATUI?.NO_RESULTS_FOUND
            : (this.no_data_message ??
                this.translations?.ATUI?.TABLE?.NO_DATA))))), this.server_side_mode && (h("at-table-pagination", { key: '55415969f740e9a277c8579516b938709ffc8977', current_page: this.currentPage, num_pages: this.totalPages, page_size: this.pageSize, page_size_options: this.page_size_options, onAtChange: (event) => this.handlePageChange(event), onAtPageSizeChange: (event) => this.handlePageSizeChange(event) }))));
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
                    "text": "Info text displayed in a tooltip at the right of the search input."
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
            "hide_table_filters": {
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
                    "text": "If true the table filters will not be added"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hide_table_filters"
            },
            "hide_column_manager": {
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
                    "text": "If true the column manager will not be added"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hide_column_manager"
            },
            "hide_export_menu": {
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
                    "text": "If true the table export menu will not be added"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hide_export_menu"
            },
            "hide_csv_export": {
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
                    "text": "If true, hides CSV export option from export menu"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hide_csv_export",
                "defaultValue": "false"
            },
            "hide_pdf_export": {
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
                    "text": "If true, hides PDF export option from export menu"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hide_pdf_export",
                "defaultValue": "false"
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
            "loading": {
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
                "attribute": "loading",
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
                "propName": "loading",
                "methodName": "handleLoadingChange"
            }];
    }
}
