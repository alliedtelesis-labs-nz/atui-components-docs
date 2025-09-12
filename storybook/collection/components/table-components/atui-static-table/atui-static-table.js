import { h, Host } from "@stencil/core";
/**
 * @category Data Tables
 * @description A static data table component for displaying read-only tabular data without interactive features. Ideal for simple data presentation and reports.
 */
export class AtuiStaticTable {
    constructor() {
        /**
         * Max number of items per page
         */
        this.page_size = 10;
        /**
         * If true, disables pagination on the table and shows all data at once.
         * Useful for server-side pagination where you want to control pagination externally.
         */
        this.use_custom_pagination = false;
        this.tableCreated = false;
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
        return (h(Host, { key: 'ce8424f45e3d1e62c4941ccbd57cd5a680d3219a' }, !this.hide_column_manager && (h("atui-table-actions", { key: '92c3c22580a85872c8ec4804927dcb61f556c3af', ag_grid: this.agGrid }, h("atui-column-manager", { key: '247ce3085f4fc97dcb95311a56f600c3d1aa475a', slot: "column-manager", col_defs: this.col_defs }))), h("atui-table", { key: 'f6232a2cc9e3c851392f3eb858475f04586b18f1', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
    static get is() { return "atui-static-table"; }
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
//# sourceMappingURL=atui-static-table.js.map
