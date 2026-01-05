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
        return (h(Host, { key: '946042cd41ee71eab6106d17d5e30c3640580aa7' }, !this.hide_column_manager && (h("at-table-actions", { key: 'e52a581cb7965cf605e2e607934f824043d49ba5', ag_grid: this.agGrid }, h("at-column-manager", { key: '86c4783fa687082368b05642c1f4d512aca63887', slot: "column-manager", col_defs: this.col_defs }))), h("at-table", { key: '127cf1ec557154e135b9a64fef3f7bb171ed0e2e', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
    static get is() { return "at-static-table"; }
    static get properties() {
        return {
            "table_data": {
                "type": "unknown",
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
                "attribute": "page_size",
                "defaultValue": "10"
            },
            "hide_column_manager": {
                "type": "boolean",
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
                "reflect": false,
                "attribute": "hide_column_manager"
            },
            "use_custom_pagination": {
                "type": "boolean",
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
                "attribute": "use_custom_pagination",
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
