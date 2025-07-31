import { r as registerInstance, h, H as Host } from './index-DV1DLMEm.js';

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
        return (h(Host, { key: '13357efc03e27252114972f3829e43d9c3da96ca' }, !this.hide_column_manager && (h("atui-table-actions", { key: '6812586e35b8908db4be020efc24e78bbd4deba9', ag_grid: this.agGrid }, h("atui-column-manager", { key: '572ba9f1ed9782a47ba1f029ef9f9db4b0d74990', slot: "column-manager", col_defs: this.col_defs }))), h("atui-table", { key: 'cece09dfda38fd0fbb4e3cae0beabf694899b7bc', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
};

export { AtuiStaticTable as atui_static_table };
//# sourceMappingURL=atui-static-table.entry.js.map

//# sourceMappingURL=atui-static-table.entry.js.map