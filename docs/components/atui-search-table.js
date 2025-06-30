import { p as proxyCustomElement, H, h, c as Host } from './p-DJD-7SVX.js';
import { f as fetchTranslations } from './p-CDu8lP-T.js';
import { d as defineCustomElement$g } from './p-CNIPth1r.js';
import { d as defineCustomElement$f } from './p-BlymWuVg.js';
import { d as defineCustomElement$e } from './p-CJRdicyN.js';
import { d as defineCustomElement$d } from './p-Cmym-DUX.js';
import { d as defineCustomElement$c } from './p-CEO3zNbx.js';
import { d as defineCustomElement$b } from './p-BY-E89l5.js';
import { d as defineCustomElement$a } from './p-ByK4-pDJ.js';
import { d as defineCustomElement$9 } from './p-BlC_9xQ9.js';
import { d as defineCustomElement$8 } from './p-CZtkNBQI.js';
import { d as defineCustomElement$7 } from './p-BBRJQniY.js';
import { d as defineCustomElement$6 } from './p-DiLhUBj3.js';
import { d as defineCustomElement$5 } from './p-DDOg8IWu.js';
import { d as defineCustomElement$4 } from './p-D4mxcQcL.js';
import { d as defineCustomElement$3 } from './p-DZbi1KQM.js';
import { d as defineCustomElement$2 } from './p-BIS2bAMQ.js';

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
        this.tableCreated = false;
        this.activeFilters = {};
        this.selectedFilters = [];
        this.menuSelectedIds = [];
        this.searchValue = '';
    }
    handleSelectedFiltersChange(newValue) {
        this.menuSelectedIds = newValue.map((f) => f.id);
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
                const matchesSearch = Object.values(node.data).some((value) => value &&
                    String(value).toLowerCase().includes(searchLower));
                if (!matchesSearch)
                    return false;
            }
            const columnFilterResult = Object.entries(this.activeFilters).every(([colId, filterValue]) => {
                if (colId === '__search__' || !filterValue)
                    return true;
                const value = node.data[colId];
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
        this.activeFilters = {};
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
        this.updateActiveFilters();
    }
    render() {
        return (h(Host, { key: '37239f147e547e6dc9989bcc2644ff472193d832' }, h("atui-table-actions", { key: '4b2bc1a7223cc92e5395392798f1d0a0cd4fc1f0', ag_grid: this.agGrid }, h("div", { key: 'b58f45bcea66a295a0285f5a46242837b36a1a3d', class: "flex items-center gap-8", slot: "search" }, !this.hide_dropdown_filters && this.col_defs && (h("atui-table-filter-menu", { key: '7b5081c37fb3a9ae0e961bc96f4e9110bbff6f2b', slot: "filter-menu", col_defs: this.col_defs, selected: this.menuSelectedIds, onAtuiChange: (event) => this.handleFilterChange(event) })), h("atui-search", { key: '5c3b5ad337abc25e7b44ef4bb8d08071018a934e', class: "w-input-md", label: this.search_label, hint_text: this.search_hint, info_text: this.search_info_tooltip, placeholder: this.translations.ATUI.TABLE.SEARCH_BY_KEYWORD, onAtuiChange: (event) => this.handleSearchChange(event) })), !this.hide_dropdown_filters && this.col_defs && (h("atui-table-filters", { key: '954a31982457c678c064332ddfdbd528fbd165ec', slot: "filters", col_defs: this.col_defs, selected: this.selectedFilters, onAtuiChange: (event) => this.handleFilterChange(event) })), !this.hide_export_menu && (h("atui-table-export-menu", { key: '82222974c1717b7d8a74ceeace819c2111d54b32', slot: "export-menu" })), !this.hide_column_manager && this.col_defs && (h("atui-column-manager", { key: '93895d1e830316e7fdc4c9ab19e0c013104cc5db', slot: "column-manager", col_defs: this.col_defs, onAtuiChange: (event) => this.handleColumnChange(event) })), h("div", { key: 'aac7ddd8e147de8ab2735f94a4072bc48330004f', slot: "actions" }, h("slot", { key: 'ff33bc78ea81a9f54a360eab31cbb290570fd26c', name: "actions" }))), h("slot", { key: '564833f8148dc5b23ed503784eafe161e914a855', name: "multi-select-actions" }), h("atui-table", { key: 'f325e32bdee5ce08f59ea9f156dac6f6e03268d8', ref: (el) => (this.tableEl = el), table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
    get el() { return this; }
    static get watchers() { return {
        "selectedFilters": ["handleSelectedFiltersChange"]
    }; }
}, [4, "atui-search-table", {
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
        "translations": [32],
        "agGrid": [32],
        "tableCreated": [32],
        "activeFilters": [32],
        "selectedFilters": [32],
        "menuSelectedIds": [32],
        "searchValue": [32]
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