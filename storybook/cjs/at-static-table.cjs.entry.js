'use strict';

var index = require('./index-zRWHCAJe.js');

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
        return (index.h(index.Host, { key: 'da510930f47fb029030940817701c22e82847f57' }, this.show_column_manager && (index.h("at-table-actions", { key: '1254298e357b78c2b95cb7b54d99ed398acec844', ag_grid: this.agGrid }, index.h("at-column-manager", { key: '819b20370e99db358d37308f35e019f53dd27882', slot: "column-manager", col_defs: this.managerColDefs }))), index.h("at-table", { key: '29f097965d47aab4727206decf66696d293ee22a', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, can_auto_init: false, onAtColumnVisibilityChange: (event) => (this.hiddenFields = event.detail) })));
    }
    static get watchers() { return {
        "col_defs": [{
                "resetHiddenFields": 0
            }]
    }; }
};

exports.at_static_table = AtStaticTable;
