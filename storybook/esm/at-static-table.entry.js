import { r as registerInstance, h, H as Host } from './index-C8uvvL0O.js';

const AtStaticTable = class {
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
        return (h(Host, { key: '5a5f73c0dd4defc992a3f47fc820794c225b41b2' }, !this.hide_column_manager && (h("at-table-actions", { key: 'e67add839c8f722239236c4fba62db1148d4e8d6', ag_grid: this.agGrid }, h("at-column-manager", { key: 'd87ad63ecd2ccd5a9c690baceec7b6c403e9accb', slot: "column-manager", col_defs: this.col_defs }))), h("at-table", { key: '21cc6ae3d4f21a875baed41eaab8a6193a7f7007', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
};

export { AtStaticTable as at_static_table };
//# sourceMappingURL=at-static-table.entry.js.map

//# sourceMappingURL=at-static-table.entry.js.map