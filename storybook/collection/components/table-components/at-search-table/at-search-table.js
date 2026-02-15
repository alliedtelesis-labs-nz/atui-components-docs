import { h, Host, } from "@stencil/core";
import { fetchTranslations } from "../../../utils/translation";
import { SortDirection } from "../../../types/sort";
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
    page_size = 10;
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
    tableCreated = false;
    activeFilters = {};
    selectedFilters = [];
    menuSelectedIds = [];
    searchValue = '';
    currentPage = 1;
    pageSize = this.page_size || 10;
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
    handleSelectedFiltersChange(newValue) {
        this.menuSelectedIds = newValue.map((f) => f.id);
    }
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    async componentDidLoad() {
        await this.initGrid();
        if (this.server_side_mode && this.agGrid) {
            this.emitSearchParamsChange();
        }
    }
    async componentDidUpdate() {
        if (!this.tableCreated) {
            await this.initGrid();
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
        return (h(Host, { key: 'c4ea38ebf03eb1c7971a86dcd9b346252fbdd187' }, h("at-table-actions", { key: '3a70ece9aa74c524b391baacb6a534c76c6f6154', ag_grid: this.agGrid }, h("div", { key: 'a53d10451d411deacbbd5ea01da99698ac64ea65', class: "flex items-center gap-8 px-8", slot: "search" }, this.shouldShowDropdownFilters && (h("at-table-filter-menu", { key: '0d8e6601429bb692cceb52047fe194aecf5a1cd4', slot: "filter-menu", col_defs: this.col_defs, selected: this.menuSelectedIds, onAtChange: (event) => this.handleFilterChange(event) })), h("at-search", { key: 'e6c5c3186ebcce8e6f865f77d878aefafad7438a', class: "w-input-md", label: this.search_label, hint_text: this.search_hint, info_text: this.search_info_tooltip, placeholder: this.translations.ATUI.TABLE.SEARCH_BY_KEYWORD, onAtChange: (event) => this.handleSearchChange(event) })), this.shouldShowDropdownFilters && (h("at-table-filters", { key: '9899567af8cc72433887b50d1b9a7b52ef992be9', slot: "filters", col_defs: this.col_defs, selected: this.selectedFilters, onAtChange: (event) => this.handleFilterChange(event) })), !this.hide_export_menu && (h("at-table-export-menu", { key: '84f8ee58e2442886c46848a2267aa25fa0aa0327', slot: "export-menu", hide_csv: this.hide_csv_export, hide_pdf: this.hide_pdf_export, onAtChange: (event) => this.handleExport(event) })), this.shouldShowColumnManager && (h("at-column-manager", { key: 'c5a45bd9dd33d6d6789dc4634210552ef8fd9c3a', slot: "column-manager", col_defs: this.col_defs, onAtChange: (event) => this.handleColumnChange(event) })), h("div", { key: '844db18d28bd937a8477bfdff0483c8069013074', slot: "actions" }, h("slot", { key: '93fe9f0e93548fc07d2db0187464092d82ab6d6d', name: "actions" }))), h("slot", { key: '30de46c4f35fcb46319d1038df43483274f4c0a9', name: "multi-select-actions" }), this.loading && this.server_side_mode ? (h("at-placeholder", { size: "lg", placeholder_title: this.translations?.ATUI?.TABLE?.LOADING_DATA, show_loading_spinner: true })) : (h("at-table", { ref: (el) => (this.tableEl = el), table_data: this.table_data, col_defs: this.col_defs, page_size: this.server_side_mode
                ? this.pageSize
                : this.page_size, use_custom_pagination: this.server_side_mode, auto_size_columns: this.auto_size_columns, disable_auto_init: !this.server_side_mode })), this.server_side_mode && (h("at-table-pagination", { key: '8b2f4e523ec7759170891483c88932f0d9112587', current_page: this.currentPage, num_pages: this.totalPages, onAtChange: (event) => this.handlePageChange(event), onAtPageSizeChange: (event) => this.handlePageSizeChange(event) }))));
    }
    static get is() { return "at-search-table"; }
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
            "search_label": {
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
                    "text": "Label for the search input."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "search_label"
            },
            "search_hint": {
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
                    "text": "Hint text displayed below the search label."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "search_hint"
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
                    "text": "Info text displayed in the search info tooltip."
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
                    "original": "ColDef[]",
                    "resolved": "ColDef<any, any>[]",
                    "references": {
                        "ColDef": {
                            "location": "import",
                            "path": "ag-grid-community",
                            "id": "../node_modules/ag-grid-community/dist/types/main.d.ts::ColDef",
                            "referenceLocation": "ColDef"
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
                "defaultValue": "10"
            },
            "hide_dropdown_filters": {
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
                    "text": "If true the table dropdown filters will not be added"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hide_dropdown_filters"
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
            }
        };
    }
    static get states() {
        return {
            "translations": {},
            "agGrid": {},
            "tableCreated": {},
            "activeFilters": {},
            "selectedFilters": {},
            "menuSelectedIds": {},
            "searchValue": {},
            "currentPage": {},
            "pageSize": {}
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
                "propName": "selectedFilters",
                "methodName": "handleSelectedFiltersChange"
            }];
    }
}
