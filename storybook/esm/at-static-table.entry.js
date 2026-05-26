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
        return (h(Host, { key: 'd33b680e6f7bd64b202178fd34bbad40ab830389' }, !this.hide_column_manager && (h("at-table-actions", { key: '005baa5dd61282b0080775ee656a82ed4a84bcd2', ag_grid: this.agGrid }, h("at-column-manager", { key: '915340f166dab4c4f8ba20acc59073bf22bfec4b', slot: "column-manager", col_defs: this.col_defs }))), h("at-table", { key: '5b00693ca7850cf6163e96c3f343cb91f3d693a9', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
};

export { AtStaticTable as at_static_table };
