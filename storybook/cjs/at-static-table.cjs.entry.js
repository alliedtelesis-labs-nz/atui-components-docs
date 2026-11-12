'use strict';

var index = require('./index-DGi-f7lA.js');

const AtStaticTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
     * Adds the column manager. On by default.
     */
    show_column_manager = true;
    /**
     * If true, disables pagination on the table and shows all data at once.
     * Useful for server-side pagination where you want to control pagination externally.
     */
    use_custom_pagination = false;
    agGrid;
    tableEl;
    tableCreated = false;
    hiddenFields = [];
    resetHiddenFields() {
        this.hiddenFields = [];
    }
    /**
     * The column manager reads visibility off the col defs it is given, and AG Grid hides
     * a column dragged off the grid without going through it. The grid stays the authority
     * on what is visible; `col_defs` is left as the host wrote it.
     */
    get managerColDefs() {
        return (this.col_defs ?? []).map((colDef) => ({
            ...colDef,
            hide: this.hiddenFields.includes(colDef.field),
        }));
    }
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
        return (index.h(index.Host, { key: '9dc71eba013648fab4abf2ac2507aae87a69afdf' }, this.show_column_manager && (index.h("at-table-actions", { key: 'd44dcc36b4c293aa7f153a0dd811db273a707fb0', ag_grid: this.agGrid }, index.h("at-column-manager", { key: '86bc2a55777921466adaa8cd2ae91d43c9eeb0b1', slot: "column-manager", col_defs: this.managerColDefs }))), index.h("at-table", { key: 'd54bb15893ca90f63b715a3d696b7e16e98ff354', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, can_auto_init: false, onAtColumnVisibilityChange: (event) => (this.hiddenFields = event.detail) })));
    }
    static get watchers() { return {
        "col_defs": [{
                "resetHiddenFields": 0
            }]
    }; }
};

exports.at_static_table = AtStaticTable;
