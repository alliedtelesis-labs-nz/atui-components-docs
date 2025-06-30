import { h, Host } from "@stencil/core";
import { fetchTranslations } from "../../../utils/translation";
/**
 * @category Data Tables
 * @description A searchable data table component that combines table functionality with integrated search capabilities. Provides real-time filtering and search result highlighting.
 * @slot actions - Used to place actions related to table content
 * @slot multi-select-actions - Used to place actions related to row selection
 */
export class AtuiSearchTable {
    constructor() {
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
    static get is() { return "atui-search-table"; }
    static get properties() {
        return {
            "table_data": {
                "type": "unknown",
                "attribute": "table_data",
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
                    "text": "Table data passed to atui-table component."
                },
                "getter": false,
                "setter": false
            },
            "label": {
                "type": "string",
                "attribute": "label",
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
                "reflect": false
            },
            "search_label": {
                "type": "string",
                "attribute": "search_label",
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
                "reflect": false
            },
            "search_hint": {
                "type": "string",
                "attribute": "search_hint",
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
                "reflect": false
            },
            "search_info_tooltip": {
                "type": "string",
                "attribute": "search_info_tooltip",
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
                "reflect": false
            },
            "col_defs": {
                "type": "unknown",
                "attribute": "col_defs",
                "mutable": false,
                "complexType": {
                    "original": "ColDef[]",
                    "resolved": "ColDef<any, any>[]",
                    "references": {
                        "ColDef": {
                            "location": "import",
                            "path": "ag-grid-community",
                            "id": "../node_modules/ag-grid-community/dist/types/main.d.ts::ColDef"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Column definitions passed to atui-table component."
                },
                "getter": false,
                "setter": false
            },
            "page_size": {
                "type": "number",
                "attribute": "page_size",
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
                "defaultValue": "10"
            },
            "hide_dropdown_filters": {
                "type": "boolean",
                "attribute": "hide_dropdown_filters",
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
                "reflect": false
            },
            "hide_column_manager": {
                "type": "boolean",
                "attribute": "hide_column_manager",
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
                "reflect": false
            },
            "hide_export_menu": {
                "type": "boolean",
                "attribute": "hide_export_menu",
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
                "reflect": false
            },
            "use_custom_pagination": {
                "type": "boolean",
                "attribute": "use_custom_pagination",
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
                    "text": "If true, disables pagination on the table and shows all data at once.\nUseful for server-side pagination where you want to control pagination externally."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
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
            "searchValue": {}
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
//# sourceMappingURL=atui-search-table.js.map
