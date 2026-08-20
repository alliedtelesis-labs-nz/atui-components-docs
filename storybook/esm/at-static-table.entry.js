import { r as registerInstance, h, H as Host } from './index-_QbJz5mf.js';

const AtStaticTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: 'fd426fd6d672e2816d1dce9d5a4c73c62dccb77b' }, !this.hide_column_manager && (h("at-table-actions", { key: '52497022f5eaff8fd1f9255c3a4cae0234ca4d2e', ag_grid: this.agGrid }, h("at-column-manager", { key: 'd7ff7775f944f1e66e2166ac5ec608fac5055f39', slot: "column-manager", col_defs: this.col_defs }))), h("at-table", { key: '73243585cf0eeae000c100c9d7de5e54edff6d76', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
};

export { AtStaticTable as at_static_table };
