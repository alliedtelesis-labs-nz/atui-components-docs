import { r as registerInstance, h, H as Host } from './index-Cd7WF2gX.js';

const AtuiStaticTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Max number of items per page
         */
        this.page_size = 10;
        /**
         * If true, disables pagination on the table and shows all data at once.
         * Useful for server-side pagination where you want to control pagination externally.
         */
        this.use_custom_pagination = false;
        this.tableCreated = false;
    }
    async componentDidLoad() {
        if (this.col_defs && !this.tableCreated) {
            this.agGrid = await this.tableEl.createGrid();
            this.tableCreated = true;
        }
    }
    async componentDidUpdate() {
        if (this.col_defs && !this.tableCreated) {
            this.agGrid = await this.tableEl.createGrid();
            this.tableCreated = true;
        }
    }
    render() {
        return (h(Host, { key: '3be70b04090be01ccd600c67a9182674d36733e0' }, !this.hide_column_manager && (h("atui-table-actions", { key: '7c7ed298689cc31e7e23badfedaed34ef5c08d7f', ag_grid: this.agGrid }, h("atui-column-manager", { key: '996b52406899daafcb29b11cb754245e3e28f791', slot: "column-manager", col_defs: this.col_defs }))), h("atui-table", { key: '8944e79a41b55d30b7adca2894960aa326d06820', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
};

export { AtuiStaticTable as atui_static_table };
//# sourceMappingURL=atui-static-table.entry.js.map

//# sourceMappingURL=atui-static-table.entry.js.map