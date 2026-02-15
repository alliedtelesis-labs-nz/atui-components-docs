import { r as registerInstance, h, H as Host } from './index-jvbUuQtg.js';

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
        return (h(Host, { key: 'dfe52f91f4b4b54033bebe25ef7fc6f1a2899336' }, !this.hide_column_manager && (h("at-table-actions", { key: '0741fbb276c31d317018cb9d1c1027f2da9f691b', ag_grid: this.agGrid }, h("at-column-manager", { key: 'c32be9f335511a8c322f5db8b026c52c1b50bb4c', slot: "column-manager", col_defs: this.col_defs }))), h("at-table", { key: '2feac8dbb890ed09735021e9c1cd452a181cac8a', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
};

export { AtStaticTable as at_static_table };
