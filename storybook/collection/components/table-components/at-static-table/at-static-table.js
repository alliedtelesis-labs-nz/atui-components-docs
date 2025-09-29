import { h, Host } from "@stencil/core";
/**
 * @category Data Tables
 * @description A static data table component for displaying read-only tabular data without interactive features. Ideal for simple data presentation and reports.
 */
export class AtStaticTable {
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
        return (h(Host, { key: 'c34a529a085887b5533136f81c1264c1f69cb0a6' }, !this.hide_column_manager && (h("at-table-actions", { key: 'dddc141f23a54657babb08d26848fc6ad3e7c6c4', ag_grid: this.agGrid }, h("at-column-manager", { key: '8e0f3382b25e980514057e4f819f304c48688250', slot: "column-manager", col_defs: this.col_defs }))), h("at-table", { key: '10391cf5f342637866e776d7b773541abd6bc617', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
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
