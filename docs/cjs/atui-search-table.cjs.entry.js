'use strict';

var index = require('./index-DGivrgtr.js');
var translation = require('./translation-HqquF7bU.js');

const AtuiSearchTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        this.translations = await translation.fetchTranslations(this.el);
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
        return (index.h(index.Host, { key: '7a1130a2edb0a79ff95974c63f585a50052935d9' }, index.h("atui-table-actions", { key: 'dd23e58d8a8be2b27b519c9f0f9ecbcb538770b6', ag_grid: this.agGrid }, index.h("div", { key: '23528c8c7e40507f9163135c7bef2102a355f127', class: "flex items-center gap-8", slot: "search" }, !this.hide_dropdown_filters && this.col_defs && (index.h("atui-table-filter-menu", { key: '67cffcf664a867e9a5398bb4c93aab566fbd547a', slot: "filter-menu", col_defs: this.col_defs, selected: this.menuSelectedIds, onAtuiChange: (event) => this.handleFilterChange(event) })), index.h("atui-search", { key: '662cc2131202b96197e0b1be7f7b1ca5f36ccea2', class: "w-input-md", label: this.search_label, hint_text: this.search_hint, info_text: this.search_info_tooltip, placeholder: this.translations.ATUI.TABLE.SEARCH_BY_KEYWORD, onAtuiChange: (event) => this.handleSearchChange(event) })), !this.hide_dropdown_filters && this.col_defs && (index.h("atui-table-filters", { key: '074baef61b7f52a71a7059a83e8416dcd598c086', slot: "filters", col_defs: this.col_defs, selected: this.selectedFilters, onAtuiChange: (event) => this.handleFilterChange(event) })), !this.hide_export_menu && (index.h("atui-table-export-menu", { key: '1b574ada495d711d850737dcc39bf9009c4f3250', slot: "export-menu" })), !this.hide_column_manager && this.col_defs && (index.h("atui-column-manager", { key: '37e60f8493d33acbc0e380956bd5a4cfa0962228', slot: "column-manager", col_defs: this.col_defs, onAtuiChange: (event) => this.handleColumnChange(event) })), index.h("div", { key: '08c996a95d10308a490a97315499ec737434e363', slot: "actions" }, index.h("slot", { key: 'd6de402f44aa412b40d30660c0c979f5ef62382e', name: "actions" }))), index.h("slot", { key: 'e9dd2648aa4dbbd53cdeda0b7781ec681af8d134', name: "multi-select-actions" }), index.h("atui-table", { key: '4687e9fc0d8e0774c573e60df13a750d7a3572d5', ref: (el) => (this.tableEl = el), table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "selectedFilters": ["handleSelectedFiltersChange"]
    }; }
};

exports.atui_search_table = AtuiSearchTable;
//# sourceMappingURL=atui-search-table.entry.cjs.js.map

//# sourceMappingURL=atui-search-table.cjs.entry.js.map