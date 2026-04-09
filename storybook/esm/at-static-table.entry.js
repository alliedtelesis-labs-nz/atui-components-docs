import { r as registerInstance, h, H as Host } from './index-CkS36Ijo.js';

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
        return (h(Host, { key: '3d04ff8b164ba3108532efa41ddbea1ce55923a3' }, !this.hide_column_manager && (h("at-table-actions", { key: '2a13e76238409fe1c16f40a2957caec6ba91aa49', ag_grid: this.agGrid }, h("at-column-manager", { key: '8f77ff256045a9420cd4229e4c080aa91b72257f', slot: "column-manager", col_defs: this.col_defs }))), h("at-table", { key: 'a6efc14c427376ca80ed4f9a3a0a304f055a30bf', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
};

export { AtStaticTable as at_static_table };
