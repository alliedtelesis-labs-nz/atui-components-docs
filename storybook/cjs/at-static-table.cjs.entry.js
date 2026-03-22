'use strict';

var index = require('./index-CzDB71Wy.js');

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
        return (index.h(index.Host, { key: 'fe1d12204b1f77623303f12f31bc237bad5de2a6' }, !this.hide_column_manager && (index.h("at-table-actions", { key: '0de78bee9690bfb51fce3fc49c8e14ace7fcd4f0', ag_grid: this.agGrid }, index.h("at-column-manager", { key: '6bb75f6cd5a7fd0ae7db48cfba630bdf0467e00b', slot: "column-manager", col_defs: this.col_defs }))), index.h("at-table", { key: '5892d82fe35208aa89844d71e1204cbcb723ab1f', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
};

exports.at_static_table = AtStaticTable;
