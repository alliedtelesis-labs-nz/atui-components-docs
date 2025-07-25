import { p as proxyCustomElement, H, h, c as Host } from './p-kcU6cSzl.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$g } from './p-DpoOUufO.js';
import { d as defineCustomElement$f } from './p-BwhlSt5K.js';
import { d as defineCustomElement$e } from './p-Dmdyugc1.js';
import { d as defineCustomElement$d } from './p-D7RN_sLu.js';
import { d as defineCustomElement$c } from './p-BPMyXZEz.js';
import { d as defineCustomElement$b } from './p-CUYEuBWs.js';
import { d as defineCustomElement$a } from './p-CHkT-iof.js';
import { d as defineCustomElement$9 } from './p-FL7N6jaz.js';
import { d as defineCustomElement$8 } from './p-hr7aDFKv.js';
import { d as defineCustomElement$7 } from './p-CdTSN34u.js';
import { d as defineCustomElement$6 } from './p-DobQ3AYN.js';
import { d as defineCustomElement$5 } from './p-D2NBH946.js';
import { d as defineCustomElement$4 } from './p-nHZGZeQ5.js';
import { d as defineCustomElement$3 } from './p-gxCo-FpG.js';
import { d as defineCustomElement$2 } from './p-CYjfaOKk.js';

const AtuiSearchTable$1 = /*@__PURE__*/ proxyCustomElement(class AtuiSearchTable extends H {
    constructor() {
        super();
        this.__registerHost();
        /**
         * Default page size of the table
         */
        this.page_size = 10;
        /**
         * If true, disables pagination on the table and shows all data at once.
         * Useful for server-side pagination where you want to control pagination externally.
         */
        this.use_custom_pagination = false;
        /**
         * If true, enables automatic column resizing to fit available space.
         * Columns will be sized proportionally based on their content and constraints. Fixed widths in column defs will be respected.
         */
        this.auto_size_columns = true;
        this.tableCreated = false;
        this.activeFilters = {};
        this.selectedFilters = [];
        this.menuSelectedIds = [];
        this.searchValue = '';
    }
    handleSelectedFiltersChange(newValue) {
        this.menuSelectedIds = newValue.map((f) => f.id);
        this.updateActiveFilters();
    }
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    async componentDidLoad() {
        await this.initGrid();
    }
    async componentDidUpdate() {
        await this.initGrid();
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
                if (options === null || options === void 0 ? void 0 : options.flash) {
                    this.agGrid.flashCells({ rowNodes: [displayedRow] });
                }
                this.agGrid.refreshCells({
                    rowNodes: [displayedRow],
                    force: (options === null || options === void 0 ? void 0 : options.forceRefresh) || false,
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
        var _a;
        if (this.col_defs && !this.tableCreated && this.tableEl) {
            this.agGrid = await this.tableEl.createGrid();
            this.tableCreated = true;
            this.setupExternalFilters();
            if ((_a = this.table_data) === null || _a === void 0 ? void 0 : _a.items) {
                this.agGrid.setGridOption('rowData', this.table_data.items);
            }
        }
    }
    setupExternalFilters() {
        if (!this.agGrid)
            return;
        this.agGrid.setGridOption('isExternalFilterPresent', () => {
            const hasFilters = Object.keys(this.activeFilters).length > 0;
            console.log('isExternalFilterPresent called, hasFilters:', hasFilters);
            return hasFilters;
        });
        this.agGrid.setGridOption('doesExternalFilterPass', (node) => {
            if (!node.data)
                return true;
            const searchValue = this.activeFilters['__search__'];
            if (searchValue) {
                const searchLower = searchValue.toLowerCase();
                // Check all column definitions and use their valueGetter if available
                const matchesSearch = this.col_defs.some((colDef) => {
                    let cellValue;
                    if (colDef.valueGetter &&
                        typeof colDef.valueGetter === 'function') {
                        // Use valueGetter for processed values (custom cells)
                        cellValue = colDef.valueGetter({
                            data: node.data,
                            node,
                            colDef,
                            api: this.agGrid,
                            context: null,
                            getValue: (field) => node.data[field],
                            column: null, // Not available in external filter context
                        });
                    }
                    else if (colDef.field) {
                        // Use raw field value for simple cells
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
                // Find the column definition for this field
                const colDef = this.col_defs.find((def) => def.field === colId);
                let value;
                if (colDef &&
                    colDef.valueGetter &&
                    typeof colDef.valueGetter === 'function') {
                    // Use valueGetter for processed values (custom cells)
                    value = colDef.valueGetter({
                        data: node.data,
                        node,
                        colDef,
                        api: this.agGrid,
                        context: null,
                        getValue: (field) => node.data[field],
                        column: null, // Not available in external filter context
                    });
                }
                else {
                    // Use raw field value for simple cells
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
                return Object.assign(Object.assign({}, colDef), { hide: !checked });
            }
            return colDef;
        });
        this.col_defs = updatedColDefs;
    }
    handleFilterChange(event) {
        if (event.detail) {
            if (Array.isArray(event.detail) &&
                typeof event.detail[0] === 'string') {
                this.handleMenuFilterChange(event.detail);
            }
            else if (Array.isArray(event.detail) &&
                typeof event.detail[0] === 'object') {
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
        if (filters.length === 1 && filters[0].id === '') {
            this.selectedFilters = [];
            this.menuSelectedIds = [];
        }
        else {
            this.selectedFilters = filters;
            this.menuSelectedIds = filters
                .filter((f) => f.value && f.value.trim() !== '')
                .map((f) => f.id);
        }
    }
    updateActiveFilters() {
        // Keep existing search value in activeFilters - it's managed by handleSearchChange
        const currentSearch = this.activeFilters['__search__'];
        this.activeFilters = {};
        // Restore search if it exists
        if (currentSearch) {
            this.activeFilters['__search__'] = currentSearch;
        }
        this.selectedFilters.forEach((filter) => {
            if (filter.value) {
                this.activeFilters[filter.id] = filter.value;
            }
        });
        if (this.agGrid) {
            this.setupExternalFilters();
            this.agGrid.onFilterChanged();
        }
        else {
            console.log('agGrid not available, cannot apply filter');
        }
    }
    handleSearchChange(event) {
        this.searchValue = event.detail || '';
        // Add search to activeFilters for custom external filter logic
        if (this.searchValue) {
            this.activeFilters['__search__'] = this.searchValue;
        }
        else {
            delete this.activeFilters['__search__'];
        }
        this.updateActiveFilters();
    }
    render() {
        return (h(Host, { key: '8ea070d7dfbc803cd5cda3843b6124fa87041fdd' }, h("atui-table-actions", { key: 'efa72ba6ed250c7be03b3f10c58852e7bb72b4af', ag_grid: this.agGrid }, h("div", { key: '2833dd636fa89cfe607b5631a199a00f3401b55d', class: "flex items-center gap-8", slot: "search" }, !this.hide_dropdown_filters && this.col_defs && (h("atui-table-filter-menu", { key: 'aa96c591dd0a5c51dd80b5cd2d44470229c26af0', slot: "filter-menu", col_defs: this.col_defs, selected: this.menuSelectedIds, onAtuiChange: (event) => this.handleFilterChange(event) })), h("atui-search", { key: '3c579dcf664aed25d365df1f13baced515f48b16', class: "w-input-md", label: this.search_label, hint_text: this.search_hint, info_text: this.search_info_tooltip, placeholder: this.translations.ATUI.TABLE.SEARCH_BY_KEYWORD, onAtuiChange: (event) => this.handleSearchChange(event) })), !this.hide_dropdown_filters && this.col_defs && (h("atui-table-filters", { key: '566d8d9dd753cb33f12a475afd971c36b8041593', slot: "filters", col_defs: this.col_defs, selected: this.selectedFilters, onAtuiChange: (event) => this.handleFilterChange(event) })), !this.hide_export_menu && (h("atui-table-export-menu", { key: '2f2edd32391170437ede3bec7649908bbfd80967', slot: "export-menu" })), !this.hide_column_manager && this.col_defs && (h("atui-column-manager", { key: '5bbc44a387356ae29bb01757632f692687320b19', slot: "column-manager", col_defs: this.col_defs, onAtuiChange: (event) => this.handleColumnChange(event) })), h("div", { key: '0e7556326e99012bbc30937b9122293c3aa5e786', slot: "actions" }, h("slot", { key: 'a0dcf6300cdef668718f1754abb04aa9c4622852', name: "actions" }))), h("slot", { key: '2dffb0771c3af7c6385ca0f4cf5ee4e87593f9fd', name: "multi-select-actions" }), h("atui-table", { key: 'c96c81641079ce60bd2da099572195a3659e6c7f', ref: (el) => (this.tableEl = el), table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true, auto_size_columns: this.auto_size_columns })));
    }
    get el() { return this; }
    static get watchers() { return {
        "selectedFilters": ["handleSelectedFiltersChange"]
    }; }
}, [260, "atui-search-table", {
        "table_data": [16],
        "label": [1],
        "search_label": [1],
        "search_hint": [1],
        "search_info_tooltip": [1],
        "col_defs": [16],
        "page_size": [2],
        "hide_dropdown_filters": [4],
        "hide_column_manager": [4],
        "hide_export_menu": [4],
        "use_custom_pagination": [4],
        "auto_size_columns": [4],
        "translations": [32],
        "agGrid": [32],
        "tableCreated": [32],
        "activeFilters": [32],
        "selectedFilters": [32],
        "menuSelectedIds": [32],
        "searchValue": [32],
        "updateRowByIndex": [64],
        "getDisplayedRows": [64]
    }, undefined, {
        "selectedFilters": ["handleSelectedFiltersChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-search-table", "atui-button", "atui-checkbox", "atui-checkbox-group", "atui-column-manager", "atui-form-label", "atui-input", "atui-loading", "atui-menu", "atui-search", "atui-table", "atui-table-actions", "atui-table-export-menu", "atui-table-filter-menu", "atui-table-filters", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-search-table":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiSearchTable$1);
            }
            break;
        case "atui-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "atui-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "atui-checkbox-group":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "atui-column-manager":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "atui-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "atui-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "atui-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "atui-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "atui-search":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "atui-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "atui-table-actions":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "atui-table-export-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "atui-table-filter-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "atui-table-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtuiSearchTable = AtuiSearchTable$1;
const defineCustomElement = defineCustomElement$1;

export { AtuiSearchTable, defineCustomElement };
//# sourceMappingURL=atui-search-table.js.map

//# sourceMappingURL=atui-search-table.js.map