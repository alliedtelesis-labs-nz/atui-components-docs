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
        return (h(Host, { key: 'e7ec2b7db3df928fa1b35f5a51a1799186cc1038' }, !this.hide_column_manager && (h("at-table-actions", { key: '62ed7d0096f3610339b218d51924a2548eb22ecf', ag_grid: this.agGrid }, h("at-column-manager", { key: '216c5a56cb248ca976a1c2a47747f3f74e24df86', slot: "column-manager", col_defs: this.col_defs }))), h("at-table", { key: 'c34a508d8df87f25f703548b9bf8145413a08879', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
};

export { AtStaticTable as at_static_table };
