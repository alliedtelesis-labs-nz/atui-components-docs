import { p as proxyCustomElement, H, h, c as Host } from './p-CaGsJoRH.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$g } from './p-C9eqBXeS.js';
import { d as defineCustomElement$f } from './p-Bgl_Yiy5.js';
import { d as defineCustomElement$e } from './p-Bwlxm6B0.js';
import { d as defineCustomElement$d } from './p-CXBBKKuC.js';
import { d as defineCustomElement$c } from './p-D9T3c7Wy.js';
import { d as defineCustomElement$b } from './p-CV-zf8Ue.js';
import { d as defineCustomElement$a } from './p-BmgpvZ_L.js';
import { d as defineCustomElement$9 } from './p-s0ZGYtrg.js';
import { d as defineCustomElement$8 } from './p-CcXvI5vN.js';
import { d as defineCustomElement$7 } from './p-iXeiKC5a.js';
import { d as defineCustomElement$6 } from './p-nyxK7Sii.js';
import { d as defineCustomElement$5 } from './p-D3pHNIi3.js';
import { d as defineCustomElement$4 } from './p-CtP0gf8v.js';
import { d as defineCustomElement$3 } from './p-B4wc_xlj.js';
import { d as defineCustomElement$2 } from './p-CpnV9PUz.js';

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
            return Object.keys(this.activeFilters).length > 0;
        });
        this.agGrid.setGridOption('doesExternalFilterPass', (node) => {
            if (!node.data)
                return true;
            const searchValue = this.activeFilters['__search__'];
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
                return Object.assign(Object.assign({}, colDef), { hide: !checked });
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
        if (this.searchValue) {
            this.activeFilters['__search__'] = this.searchValue;
        }
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
        if (this.searchValue) {
            this.activeFilters['__search__'] = this.searchValue;
        }
        else {
            delete this.activeFilters['__search__'];
        }
        this.updateActiveFilters();
    }
    render() {
        return (h(Host, { key: 'fb96e3a2e1adabce52db00df8fbac95ebf6bcc53' }, h("atui-table-actions", { key: '168c79f8cd6481a55eee1e2c07194964f24ec6f7', ag_grid: this.agGrid }, h("div", { key: 'f71700ad4d1509dc61a68aa52b474602a845bca8', class: "flex items-center gap-8", slot: "search" }, !this.hide_dropdown_filters && this.col_defs && (h("atui-table-filter-menu", { key: '2ab4838c63de7f669f1d2b295467618cf96368ac', slot: "filter-menu", col_defs: this.col_defs, selected: this.menuSelectedIds, onAtuiChange: (event) => this.handleFilterChange(event) })), h("atui-search", { key: 'f56c2568ba116da27e1505d5960f917a7f213406', class: "w-input-md", label: this.search_label, hint_text: this.search_hint, info_text: this.search_info_tooltip, placeholder: this.translations.ATUI.TABLE.SEARCH_BY_KEYWORD, onAtuiChange: (event) => this.handleSearchChange(event) })), !this.hide_dropdown_filters && this.col_defs && (h("atui-table-filters", { key: 'eff713b880debaeea965c5b94499c60fe4af1841', slot: "filters", col_defs: this.col_defs, selected: this.selectedFilters, onAtuiChange: (event) => this.handleFilterChange(event) })), !this.hide_export_menu && (h("atui-table-export-menu", { key: '5976b9742848b4ed29d84a52bc34bb5a75c73d6c', slot: "export-menu" })), !this.hide_column_manager && this.col_defs && (h("atui-column-manager", { key: '169d6bd48cc11fd34146a7ad8af2f5c14c9446a1', slot: "column-manager", col_defs: this.col_defs, onAtuiChange: (event) => this.handleColumnChange(event) })), h("div", { key: 'ad27cf2919e72627f43752580d1721ddc6e4587a', slot: "actions" }, h("slot", { key: '1a7efdf67a16c442e4902e36c8654c9e92ca15ed', name: "actions" }))), h("slot", { key: 'd53980adcec1f716cc0e8c603e7fa02113de4e33', name: "multi-select-actions" }), h("atui-table", { key: '3db6e57d8e30025ea90247e5d61bc092acf0be23', ref: (el) => (this.tableEl = el), table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true, auto_size_columns: this.auto_size_columns })));
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