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
        return (index.h(index.Host, { key: 'd08490c2ba1a65fadcfc03c099507226431a7479' }, !this.hide_column_manager && (index.h("at-table-actions", { key: 'fd422e8ae0f0b84f5c02594eb0379140258e42df', ag_grid: this.agGrid }, index.h("at-column-manager", { key: '91cd9f9183cf6fcbe0179b78ca48141cc8abf30f', slot: "column-manager", col_defs: this.col_defs }))), index.h("at-table", { key: '674772acd873a01f420a27ace0c01aca3b11dcd6', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
};

exports.at_static_table = AtStaticTable;
