import { r as registerInstance, h, H as Host } from './index-D3rwhcmG.js';

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
        return (h(Host, { key: '22c2f362eef20a1b197f2f42cd34ada943987986' }, !this.hide_column_manager && (h("atui-table-actions", { key: 'cd20f141ddfa4dc15d86c50436ed899a693408e1', ag_grid: this.agGrid }, h("atui-column-manager", { key: 'c4df2b8b65ca54bfafef5c694730552c33567d2d', slot: "column-manager", col_defs: this.col_defs }))), h("atui-table", { key: '723dc06f3d34274dc4988dcc404c0b237303ae9d', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
};

export { AtuiStaticTable as atui_static_table };
//# sourceMappingURL=atui-static-table.entry.js.map

//# sourceMappingURL=atui-static-table.entry.js.map