import { r as registerInstance, h, H as Host } from './index-BvDeEv6o.js';

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
        return (h(Host, { key: 'ce8424f45e3d1e62c4941ccbd57cd5a680d3219a' }, !this.hide_column_manager && (h("atui-table-actions", { key: '92c3c22580a85872c8ec4804927dcb61f556c3af', ag_grid: this.agGrid }, h("atui-column-manager", { key: '247ce3085f4fc97dcb95311a56f600c3d1aa475a', slot: "column-manager", col_defs: this.col_defs }))), h("atui-table", { key: 'f6232a2cc9e3c851392f3eb858475f04586b18f1', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
};

export { AtuiStaticTable as atui_static_table };
//# sourceMappingURL=atui-static-table.entry.js.map

//# sourceMappingURL=atui-static-table.entry.js.map