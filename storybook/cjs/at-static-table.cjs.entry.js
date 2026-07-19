'use strict';

var index = require('./index-DE68Mlxo.js');

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
        return (index.h(index.Host, { key: '7fbe23db382a618c2013db0bdca9b681b02d319c' }, !this.hide_column_manager && (index.h("at-table-actions", { key: '1263426b9823241c3c51193aea4cb776f06a61d2', ag_grid: this.agGrid }, index.h("at-column-manager", { key: '92fe6bbfe2d7ee3ea6d221e2c2c1c2ae9df69619', slot: "column-manager", col_defs: this.col_defs }))), index.h("at-table", { key: '853db57b1740385d3aaca8c8d70374aab1ddcb06', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
};

exports.at_static_table = AtStaticTable;
