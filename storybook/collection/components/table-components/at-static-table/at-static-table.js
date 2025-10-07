import { h, Host } from "@stencil/core";
/**
 * @category Data Tables
 * @description A static data table component for displaying read-only tabular data without interactive features. Ideal for simple data presentation and reports.
 */
export class AtStaticTable {
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
        return (h(Host, { key: '412a72aa498965389a93bc488a9573167666175a' }, !this.hide_column_manager && (h("at-table-actions", { key: '8ed16f410a804563b419d164e9c156048c6482d8', ag_grid: this.agGrid }, h("at-column-manager", { key: '8328041133feffa2970dfd53358be4d43643aaa3', slot: "column-manager", col_defs: this.col_defs }))), h("at-table", { key: 'ec24c543943c24f9b42ecead68ae9a7d9752c1d7', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
    static get is() { return "at-static-table"; }
    static get properties() {
        return {
            "table_data": {
                "type": "unknown",
                "attribute": "table_data",
                "mutable": false,
                "complexType": {
                    "original": "{\n        items: any[];\n        total: number;\n    }",
                    "resolved": "{ items: any[]; total: number; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Data to go into the table"
                },
                "getter": false,
                "setter": false
            },
            "col_defs": {
                "type": "unknown",
                "attribute": "col_defs",
                "mutable": false,
                "complexType": {
                    "original": "ColDef[]",
                    "resolved": "ColDef<any, any>[]",
                    "references": {
                        "ColDef": {
                            "location": "import",
                            "path": "ag-grid-community",
                            "id": "../node_modules/ag-grid-community/dist/types/main.d.ts::ColDef"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Column definitions for the table"
                },
                "getter": false,
                "setter": false
            },
            "page_size": {
                "type": "number",
                "attribute": "page_size",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Max number of items per page"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "10"
            },
            "hide_column_manager": {
                "type": "boolean",
                "attribute": "hide_column_manager",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true the column manager will not be added"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "use_custom_pagination": {
                "type": "boolean",
                "attribute": "use_custom_pagination",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "If true, disables pagination on the table and shows all data at once.\nUseful for server-side pagination where you want to control pagination externally."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "agGrid": {},
            "tableCreated": {}
        };
    }
}
//# sourceMappingURL=at-static-table.js.map
