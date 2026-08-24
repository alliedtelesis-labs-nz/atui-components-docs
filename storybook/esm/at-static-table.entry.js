import { r as registerInstance, h, H as Host } from './index-BatHonhZ.js';

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
        return (h(Host, { key: '89e382a1538b9099cd94740d3dcc95f72e0327e2' }, !this.hide_column_manager && (h("at-table-actions", { key: '9657fbdc1511e80ee0e6e51e2089084dbe6e5192', ag_grid: this.agGrid }, h("at-column-manager", { key: '48d7218b8e05b4737e8aa669eb2e846a2393b464', slot: "column-manager", col_defs: this.col_defs }))), h("at-table", { key: '19cbee8abcc2dd33c8c845758f0ccac116a9f0c0', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
};

export { AtStaticTable as at_static_table };
