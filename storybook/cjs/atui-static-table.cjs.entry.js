'use strict';

var index = require('./index-BAt2i-T2.js');

const AtuiStaticTable = class {
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
        return (index.h(index.Host, { key: 'e233f56cf02215ed1a7134c0005f5ad48d9beced' }, !this.hide_column_manager && (index.h("atui-table-actions", { key: '5014b08f768a3bd964680bc56b2ea6e68a1f1ada', ag_grid: this.agGrid }, index.h("atui-column-manager", { key: '9a89ad8c7fb41887ed812ca78658333047c462fc', slot: "column-manager", col_defs: this.col_defs }))), index.h("atui-table", { key: '67b8160056b3e9fca2f455a0a94c823c4450f729', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
};

exports.atui_static_table = AtuiStaticTable;
//# sourceMappingURL=atui-static-table.entry.cjs.js.map

//# sourceMappingURL=atui-static-table.cjs.entry.js.map