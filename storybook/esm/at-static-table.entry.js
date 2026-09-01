import { r as registerInstance, h, H as Host } from './index-lWb16Ay7.js';

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
        return (h(Host, { key: 'd5dcf085bf99e6a295e8ae75114eeeb4c3fd7e14' }, this.show_column_manager && (h("at-table-actions", { key: 'c1726d1d22624e0c673825fa421d7da6b321314d', ag_grid: this.agGrid }, h("at-column-manager", { key: '6cc7177499ced40fac0f3ac8558c954b6dcbf16c', slot: "column-manager", col_defs: this.managerColDefs }))), h("at-table", { key: 'fce753204b8328092aafc0d04955090ba60223d1', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, can_auto_init: false, onAtColumnVisibilityChange: (event) => (this.hiddenFields = event.detail) })));
    }
    static get watchers() { return {
        "col_defs": [{
                "resetHiddenFields": 0
            }]
    }; }
};

export { AtStaticTable as at_static_table };
