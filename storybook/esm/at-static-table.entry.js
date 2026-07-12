import { r as registerInstance, h, H as Host } from './index-8e2OpwTu.js';

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
        return (h(Host, { key: 'a3fb578fcf4f94ddc86cd7cd74a48143e25754bd' }, !this.hide_column_manager && (h("at-table-actions", { key: '91b620b177765395e74cb09cec1069cf92049a59', ag_grid: this.agGrid }, h("at-column-manager", { key: '1fa85ae82791d5d254e0899290944e0668941e33', slot: "column-manager", col_defs: this.col_defs }))), h("at-table", { key: 'bb5443c378b0122a9a2a2123bbcbcd280adaa2d8', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
};

export { AtStaticTable as at_static_table };
