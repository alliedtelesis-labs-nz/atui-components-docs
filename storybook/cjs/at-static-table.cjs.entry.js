'use strict';

var index = require('./index--r5sCsiV.js');

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
        return (index.h(index.Host, { key: 'b82148d21c3f91a7a9c5429adc2fcd49694dfc75' }, !this.hide_column_manager && (index.h("at-table-actions", { key: '2a2586cbb626382708888a57ced23fea5e9c7572', ag_grid: this.agGrid }, index.h("at-column-manager", { key: 'fe001a4d37da7e4b5561f7dde8174195e44d4fa3', slot: "column-manager", col_defs: this.col_defs }))), index.h("at-table", { key: 'bcce97ffbd5aa740fe407a346e4ccbe5f0e84396', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
};

exports.at_static_table = AtStaticTable;
