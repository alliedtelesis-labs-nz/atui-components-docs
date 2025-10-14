import { p as proxyCustomElement, H, h, c as Host } from './p-89eupKrN.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$g } from './p-DIyAz4jv.js';
import { d as defineCustomElement$f } from './p-DF-2ncG7.js';
import { d as defineCustomElement$e } from './p-6ZhdjdcM.js';
import { d as defineCustomElement$d } from './p-D_UF83GX.js';
import { d as defineCustomElement$c } from './p-DS8rd89A.js';
import { d as defineCustomElement$b } from './p-GC4X_ipO.js';
import { d as defineCustomElement$a } from './p-bn76tgB4.js';
import { d as defineCustomElement$9 } from './p-B81B5usX.js';
import { d as defineCustomElement$8 } from './p-DIzb1Rwf.js';
import { d as defineCustomElement$7 } from './p-CzzqJsMc.js';
import { d as defineCustomElement$6 } from './p-BXdubPvN.js';
import { d as defineCustomElement$5 } from './p-D3Wf-RUJ.js';
import { d as defineCustomElement$4 } from './p-CrACCRdM.js';
import { d as defineCustomElement$3 } from './p-DK5hrv2m.js';
import { d as defineCustomElement$2 } from './p-CJ4jwrx3.js';

const AtSearchTable$1 = /*@__PURE__*/ proxyCustomElement(class AtSearchTable extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
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
     * If true, disables pagination on the table and shows all data at once.
     * Useful for server-side pagination where you want to control pagination externally.
     */
    use_custom_pagination = false;
    /**
     * If true, enables automatic column resizing to fit available space.
     * Columns will be sized proportionally based on their content and constraints. Fixed widths in column defs will be respected.
     */
    auto_size_columns = true;
    get el() { return this; }
    translations;
    agGrid;
    tableCreated = false;
    activeFilters = {};
    selectedFilters = [];
    menuSelectedIds = [];
    searchValue = '';
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
            if (this.table_data?.items) {
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
        return (h(Host, { key: '395e30d739d8fe27ddce5541443f2003d667963d' }, h("at-table-actions", { key: 'b62e36ceed43865e2ed920cd3d9de65574bddd52', ag_grid: this.agGrid }, h("div", { key: '04c97a39842a97d7d27159dda094a7e448a534fa', class: "flex items-center gap-8", slot: "search" }, this.shouldShowDropdownFilters && (h("at-table-filter-menu", { key: '00da3fcaae27527a885f2b0f13cf1ee275d38080', slot: "filter-menu", col_defs: this.col_defs, selected: this.menuSelectedIds, onAtChange: (event) => this.handleFilterChange(event) })), h("at-search", { key: '4770b2b88502fbdcc4b3e79c5ba09f5010ac7a75', class: "w-input-md", label: this.search_label, hint_text: this.search_hint, info_text: this.search_info_tooltip, placeholder: this.translations.ATUI.TABLE.SEARCH_BY_KEYWORD, onAtChange: (event) => this.handleSearchChange(event) })), this.shouldShowDropdownFilters && (h("at-table-filters", { key: '91f236c73422955cec60320d71ba8812501f5d95', slot: "filters", col_defs: this.col_defs, selected: this.selectedFilters, onAtChange: (event) => this.handleFilterChange(event) })), !this.hide_export_menu && (h("at-table-export-menu", { key: 'db6ec8cb7096ca321e69ee1944e77e2b7773f51d', slot: "export-menu" })), this.shouldShowColumnManager && (h("at-column-manager", { key: '2685c378b123485c4a76bf250663f103035328d3', slot: "column-manager", col_defs: this.col_defs, onAtChange: (event) => this.handleColumnChange(event) })), h("div", { key: '92ff72b7bf00f71af3478cc28d017a36b0c19dcd', slot: "actions" }, h("slot", { key: '2bf7dfd31c58829798967874e47c33daba410ef7', name: "actions" }))), h("slot", { key: 'c8aeb0ea961bfc89fe1ce107b845453a4fdcb480', name: "multi-select-actions" }), h("at-table", { key: 'c79366ef8e338d4574fa739a6a305549340ef709', ref: (el) => (this.tableEl = el), table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true, auto_size_columns: this.auto_size_columns })));
    }
    static get watchers() { return {
        "selectedFilters": ["handleSelectedFiltersChange"]
    }; }
}, [260, "at-search-table", {
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
    const components = ["at-search-table", "at-button", "at-checkbox", "at-checkbox-group", "at-column-manager", "at-form-label", "at-input", "at-loading", "at-menu", "at-search", "at-table", "at-table-actions", "at-table-export-menu", "at-table-filter-menu", "at-table-filters", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-search-table":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtSearchTable$1);
            }
            break;
        case "at-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "at-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "at-checkbox-group":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "at-column-manager":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "at-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "at-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "at-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "at-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "at-search":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "at-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "at-table-actions":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "at-table-export-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "at-table-filter-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "at-table-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "at-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtSearchTable = AtSearchTable$1;
const defineCustomElement = defineCustomElement$1;

export { AtSearchTable, defineCustomElement };
//# sourceMappingURL=at-search-table.js.map

//# sourceMappingURL=at-search-table.js.map