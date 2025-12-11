import { r as registerInstance, h, H as Host } from './index-EP34iaAr.js';

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
        return (h(Host, { key: 'bc1e77a9031f035e36d36796d012e4751bf83042' }, !this.hide_column_manager && (h("at-table-actions", { key: 'bb0cdb19f28269f320cb883b97681dff0a11d309', ag_grid: this.agGrid }, h("at-column-manager", { key: 'd6c2e0794401f5d3c38043d70ece120a26dacd37', slot: "column-manager", col_defs: this.col_defs }))), h("at-table", { key: '648bb7831df5acc5350f61d66ef78410f39869b2', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
};

export { AtStaticTable as at_static_table };
//# sourceMappingURL=at-static-table.entry.js.map
