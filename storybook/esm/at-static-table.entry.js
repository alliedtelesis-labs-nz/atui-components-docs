import { r as registerInstance, h, H as Host } from './index-DTnhfVT-.js';

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
        return (h(Host, { key: '88f59e68ca77ec4b4b1ac2fa38c35799664b5a9a' }, !this.hide_column_manager && (h("at-table-actions", { key: '8542a3e2d38ca2ffb862958dd5ae6855eb29e3f3', ag_grid: this.agGrid }, h("at-column-manager", { key: 'f560cc93bc07b23e3da64ba5206e9d6c387cdb49', slot: "column-manager", col_defs: this.col_defs }))), h("at-table", { key: '77ae0045182ab073e64dabcdb5d30f5fb291fd73', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
};

export { AtStaticTable as at_static_table };
