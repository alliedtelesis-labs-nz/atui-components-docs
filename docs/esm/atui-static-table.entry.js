import { r as registerInstance, h, H as Host } from './index-8kq1vl9Q.js';

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
        return (h(Host, { key: '70d1be68fc1df9d6a5f02159cca7f0be2be8af20' }, !this.hide_column_manager && (h("atui-table-actions", { key: '19a448ebc3f8b2974c4ccfa1cedabd90e2936a73', ag_grid: this.agGrid }, h("atui-column-manager", { key: '65712ad5b0861c30b53e24bd7c0c3db41d0e42b2', slot: "column-manager", col_defs: this.col_defs }))), h("atui-table", { key: '0a95cd4aa19998bc44ed06aaaad0b1c659188e9b', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
};

export { AtuiStaticTable as atui_static_table };
//# sourceMappingURL=atui-static-table.entry.js.map

//# sourceMappingURL=atui-static-table.entry.js.map