import { r as registerInstance, h, H as Host } from './index-HJO1YDmC.js';

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
        return (h(Host, { key: 'af64384c8095b4b69e2b10c867669209ef172a55' }, !this.hide_column_manager && (h("atui-table-actions", { key: '54c35a5db977f0d67c94d29c49d73e4bc69de426', ag_grid: this.agGrid }, h("atui-column-manager", { key: 'cf2c8b94d97b517bca5f9a422250c5cc627eac36', slot: "column-manager", col_defs: this.col_defs }))), h("atui-table", { key: 'da2ba2635f488a62d9b66d9288c98fe660c7757c', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
};

export { AtuiStaticTable as atui_static_table };
//# sourceMappingURL=atui-static-table.entry.js.map

//# sourceMappingURL=atui-static-table.entry.js.map