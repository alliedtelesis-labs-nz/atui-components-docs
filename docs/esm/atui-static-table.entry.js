import { r as registerInstance, h, H as Host } from './index-HJO1YDmC.js';

const AtuiStaticTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: 'a58b2eaec1d0efe2e637cb04c8a11bdfffba83bd' }, !this.hide_column_manager && (h("atui-table-actions", { key: '833fd1d0488f54b7af070ff26f6eeec51abfbc88', ag_grid: this.agGrid }, h("atui-column-manager", { key: 'f5e1d50bc63c714ec636ababaf117b75a4546586', slot: "column-manager", col_defs: this.col_defs }))), h("atui-table", { key: 'cd53b57b30bda8debe1cdeeeaf097c7529343ba0', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
};

export { AtuiStaticTable as atui_static_table };
//# sourceMappingURL=atui-static-table.entry.js.map

//# sourceMappingURL=atui-static-table.entry.js.map