import { r as registerInstance, h, H as Host } from './index-BAAX2Der.js';

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
        return (h(Host, { key: '7c8df5f34cc840329e2c5005ccb472882b1a3101' }, !this.hide_column_manager && (h("at-table-actions", { key: '599d9cbea1ef60751b05d9fa66a0f024899bcaf8', ag_grid: this.agGrid }, h("at-column-manager", { key: '4704ed0045ff0e61cf20bb1ab094dfb33dd5720e', slot: "column-manager", col_defs: this.col_defs }))), h("at-table", { key: '6e1831b6bf15a8db4415ab195d6489b99945d5dd', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
};

export { AtStaticTable as at_static_table };
