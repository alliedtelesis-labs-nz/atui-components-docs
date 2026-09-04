import { r as registerInstance, h, H as Host } from './index-CT99rxub.js';

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
        return (h(Host, { key: 'ea2582d76313e69d3884371e967f1af1c8bd19cd' }, this.show_column_manager && (h("at-table-actions", { key: '77c4fccbdb22bdb3addb000f98e5ae59cb0649c5', ag_grid: this.agGrid }, h("at-column-manager", { key: '3beb082097366a8065bd86afdfa1550f6dc1532b', slot: "column-manager", col_defs: this.managerColDefs }))), h("at-table", { key: '10c5082ea5f705686249fe27457c0ce1267a02c2', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, can_auto_init: false, onAtColumnVisibilityChange: (event) => (this.hiddenFields = event.detail) })));
    }
    static get watchers() { return {
        "col_defs": [{
                "resetHiddenFields": 0
            }]
    }; }
};

export { AtStaticTable as at_static_table };
