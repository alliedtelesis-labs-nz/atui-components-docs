'use strict';

var index = require('./index-Bo1AxtqW.js');

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
     * Adds the column manager. On by default.
     */
    show_column_manager = true;
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
        return (index.h(index.Host, { key: 'e087a7e130e527bd68668d7650fc9c569bbfd16b' }, this.show_column_manager && (index.h("at-table-actions", { key: '589d33efccd95e1e44f36cc74540809d7c0dc4bf', ag_grid: this.agGrid }, index.h("at-column-manager", { key: '4e320e7c50012eaa39505d7ad44d1451ad98664a', slot: "column-manager", col_defs: this.col_defs }))), index.h("at-table", { key: 'ee89e84b74df41b021bf9c72027fc6aac5cd477f', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, can_auto_init: false })));
    }
};

exports.at_static_table = AtStaticTable;
