import { r as registerInstance, h, H as Host } from './index-Dm8LkzEZ.js';

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
        return (h(Host, { key: '0089cc62ede6608a7dbbe87846d03dbf549d50c5' }, !this.hide_column_manager && (h("at-table-actions", { key: '2b922db5110f16c393062056d5d12832c692fbfc', ag_grid: this.agGrid }, h("at-column-manager", { key: '988ed2346e8a876f64aed092084945634f201471', slot: "column-manager", col_defs: this.col_defs }))), h("at-table", { key: '0fcdc2c260d67841c555b0a66486150f5fc0b006', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
};

export { AtStaticTable as at_static_table };
