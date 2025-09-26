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
        return (h(Host, { key: '56e773534f6058b099577f75cb602f1634e968cd' }, !this.hide_column_manager && (h("at-table-actions", { key: '369be9988826d2588b28452495b4695068d8a5b4', ag_grid: this.agGrid }, h("at-column-manager", { key: '4f378a72cc7997cf79790dc302c6bbc993e99409', slot: "column-manager", col_defs: this.col_defs }))), h("at-table", { key: '512941ef079bfc2e07225dadf86ff95931449f6c', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
};

export { AtStaticTable as at_static_table };
//# sourceMappingURL=at-static-table.entry.js.map

//# sourceMappingURL=at-static-table.entry.js.map