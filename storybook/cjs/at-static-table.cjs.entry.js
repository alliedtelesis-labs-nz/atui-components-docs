'use strict';

var index = require('./index-LVEefvKk.js');

const AtStaticTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: '412a72aa498965389a93bc488a9573167666175a' }, !this.hide_column_manager && (index.h("at-table-actions", { key: '8ed16f410a804563b419d164e9c156048c6482d8', ag_grid: this.agGrid }, index.h("at-column-manager", { key: '8328041133feffa2970dfd53358be4d43643aaa3', slot: "column-manager", col_defs: this.col_defs }))), index.h("at-table", { key: 'ec24c543943c24f9b42ecead68ae9a7d9752c1d7', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
};

exports.at_static_table = AtStaticTable;
//# sourceMappingURL=at-static-table.entry.cjs.js.map
