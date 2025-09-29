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
        return (index.h(index.Host, { key: 'c34a529a085887b5533136f81c1264c1f69cb0a6' }, !this.hide_column_manager && (index.h("at-table-actions", { key: 'dddc141f23a54657babb08d26848fc6ad3e7c6c4', ag_grid: this.agGrid }, index.h("at-column-manager", { key: '8e0f3382b25e980514057e4f819f304c48688250', slot: "column-manager", col_defs: this.col_defs }))), index.h("at-table", { key: '10391cf5f342637866e776d7b773541abd6bc617', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
};

exports.at_static_table = AtStaticTable;
//# sourceMappingURL=at-static-table.entry.cjs.js.map
