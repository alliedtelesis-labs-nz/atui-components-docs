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
        return (h(Host, { key: 'a11d5863b10dc90b6c5af5b67e4d24ab20651934' }, !this.hide_column_manager && (h("at-table-actions", { key: '36f8e93b46f9879d0f037aff1ddaec6e94ec84d9', ag_grid: this.agGrid }, h("at-column-manager", { key: '7c965974231906a9e9800faaac4bf88e4fad9675', slot: "column-manager", col_defs: this.col_defs }))), h("at-table", { key: '25360b7523a2b0998ab2d3d910dd0ed32cca7666', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
};

export { AtStaticTable as at_static_table };
//# sourceMappingURL=at-static-table.entry.js.map
