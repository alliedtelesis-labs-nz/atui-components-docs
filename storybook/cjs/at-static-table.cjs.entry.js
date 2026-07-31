'use strict';

var index = require('./index-COV7xI6A.js');

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
        return (index.h(index.Host, { key: '1ca8d78eedf4d3179f2884bdd583dcc3d300bbb2' }, !this.hide_column_manager && (index.h("at-table-actions", { key: '7fcef9c15c4ea9fc21a7213e6973e64dea6942a5', ag_grid: this.agGrid }, index.h("at-column-manager", { key: '0d7eae6098854554fdf3ed2fa7631319c9bdc03e', slot: "column-manager", col_defs: this.col_defs }))), index.h("at-table", { key: 'c052aee0c669f4ad90d751e3aebf4a2a182f58b3', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
};

exports.at_static_table = AtStaticTable;
