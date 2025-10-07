'use strict';

var index = require('./index-CA9vC8ae.js');

const AtStaticTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Data to go into the table
     */
    table_data;
    /**
     * Column definitions for the table
     */
    col_defs;
    /**
     * Max number of items per page
     */
    page_size = 10;
    /**
     * If true the column manager will not be added
     */
    hide_column_manager;
    /**
     * If true, disables pagination on the table and shows all data at once.
     * Useful for server-side pagination where you want to control pagination externally.
     */
    use_custom_pagination = false;
    agGrid;
    tableEl;
    tableCreated = false;
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
        return (index.h(index.Host, { key: '1adc8dc2870c11296c878d1a8cf6832cbd5adb2c' }, !this.hide_column_manager && (index.h("at-table-actions", { key: '339cf0b07f18f9dd12f1c32567a3182d0d3a327f', ag_grid: this.agGrid }, index.h("at-column-manager", { key: '04d0c82c3ed6c5c82f9286161a4fda114698a4a6', slot: "column-manager", col_defs: this.col_defs }))), index.h("at-table", { key: '2635e515c896630fc8b6b1f1dde13d10d9d8c0dc', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
};

exports.at_static_table = AtStaticTable;
//# sourceMappingURL=at-static-table.entry.cjs.js.map
