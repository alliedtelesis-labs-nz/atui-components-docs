import { h, Host, } from "@stencil/core";
import { createGrid } from "ag-grid-community";
import { AtTableComponentsConfigs } from "../at-table-components-configs";
/**
 * @category Data Tables
 * @description A comprehensive data table component with sorting, filtering, pagination, and selection capabilities. Features responsive design, customizable columns, and accessibility support.
 */
export class AtTableComponent {
    constructor() {
        /**
         * Default page size of the table if pagination is activated
         */
        this.page_size = 10;
        /**
         * Disables the default sorting provided by agGrid.
         */
        this.use_custom_sorting = false;
        /**
         * Disables the default pagination provided by agGrid.
         * When using custom pagination, the default sorting
         * provided by ag grid will not work correctly.
         */
        this.use_custom_pagination = false;
        /**
         * If true, disables automatic grid initialization.
         * When disabled, you must manually call createGrid().
         * Used when the table is controlled by a parent component.
         */
        this.disable_auto_init = false;
        /**
         * If true, enables automatic column resizing to fit available space.
         * Columns will be sized proportionally based on their content and constraints. Fixed widths in column defs will be respected.
         */
        this.auto_size_columns = true;
        this.activeFilters = {};
        this.tableCreated = false;
    }
    async handleTableDataChange(newData) {
        if (this.agGrid && this.tableCreated) {
            this.agGrid.setGridOption('rowData', (newData === null || newData === void 0 ? void 0 : newData.items) || []);
            if (this.auto_size_columns) {
                setTimeout(() => this.agGrid.sizeColumnsToFit(), 0);
            }
        }
    }
    async componentDidLoad() {
        if (this.disable_auto_init) {
            this.tableCreated = true;
        }
        await this.initGrid();
        if (this.auto_size_columns) {
            this.resizeListener = () => {
                if (this.agGrid) {
                    this.agGrid.sizeColumnsToFit();
                }
            };
            window.addEventListener('resize', this.resizeListener);
        }
    }
    async componentDidUpdate() {
        await this.initGrid();
    }
    async initGrid() {
        const gridInitializedByHost = this.ag_grid && !this.agGrid;
        const gridReadyForCreation = this.col_defs && !this.tableCreated;
        if (gridInitializedByHost) {
            this.agGrid = this.ag_grid;
            this.tableCreated = true;
            return;
        }
        if (gridReadyForCreation) {
            this.agGrid = await this.createGrid();
            this.tableCreated = true;
        }
    }
    /**
     * Method used to initialize the table.
     *
     * @returns The [AG Grid API](https://www.ag-grid.com/javascript-data-grid/grid-api/)
     */
    async createGrid() {
        const gridOptions = {
            domLayout: 'autoHeight',
            rowData: this.table_data ? this.table_data.items : [],
            columnDefs: this.col_defs,
            components: AtTableComponentsConfigs.getFrameworkComponents(),
            onGridSizeChanged: (params) => {
                if (this.auto_size_columns) {
                    params.api.sizeColumnsToFit();
                }
            },
            onGridReady: (params) => {
                if (this.auto_size_columns) {
                    params.api.sizeColumnsToFit();
                }
            },
            onSortChanged: (event) => {
                const sortColumn = event.columns.filter((col) => col.getSort() !== undefined)[0];
                this.atSortChange.emit({
                    colId: sortColumn.getColId(),
                    sortDirection: sortColumn.getSort(),
                });
            },
        };
        if (this.use_custom_sorting) {
            gridOptions.columnDefs = this.col_defs.map((colDef) => (Object.assign(Object.assign({}, colDef), { comparator: () => 0 })));
        }
        if (!this.use_custom_pagination) {
            gridOptions.pagination = true;
            gridOptions.paginationPageSize = this.page_size;
            gridOptions.paginationPageSizeSelector = [5, 10, 20, 50, 100];
        }
        else {
            gridOptions.pagination = false;
        }
        const gridApi = createGrid(this.el, gridOptions);
        this.agGrid = gridApi;
        this.tableCreated = true;
        // Initial column sizing
        if (this.auto_size_columns) {
            setTimeout(() => gridApi.sizeColumnsToFit(), 0);
        }
        return gridApi;
    }
    /**
     * Gets the AG Grid API instance
     *
     * @returns The AG Grid API
     */
    async getGridApi() {
        return this.agGrid;
    }
    disconnectedCallback() {
        // Clean up resize listener
        if (this.resizeListener) {
            window.removeEventListener('resize', this.resizeListener);
        }
    }
    render() {
        return h(Host, { key: '26991c7429992112198c0ee790056d7afe4c766f', class: "ag-theme-material" });
    }
    static get is() { return "at-table"; }
    static get originalStyleUrls() {
        return {
            "$": ["./at-table.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["at-table.css"]
        };
    }
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
                    "text": "Data provided to the table"
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
                    "text": "Default page size of the table if pagination is activated"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "10"
            },
            "use_custom_sorting": {
                "type": "boolean",
                "attribute": "use_custom_sorting",
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
                    "text": "Disables the default sorting provided by agGrid."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Disables the default pagination provided by agGrid.\nWhen using custom pagination, the default sorting\nprovided by ag grid will not work correctly."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "disable_auto_init": {
                "type": "boolean",
                "attribute": "disable_auto_init",
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
                    "text": "If true, disables automatic grid initialization.\nWhen disabled, you must manually call createGrid().\nUsed when the table is controlled by a parent component."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "auto_size_columns": {
                "type": "boolean",
                "attribute": "auto_size_columns",
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
                    "text": "If true, enables automatic column resizing to fit available space.\nColumns will be sized proportionally based on their content and constraints. Fixed widths in column defs will be respected."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "ag_grid": {
                "type": "unknown",
                "attribute": "ag_grid",
                "mutable": false,
                "complexType": {
                    "original": "GridApi",
                    "resolved": "GridApi<any>",
                    "references": {
                        "GridApi": {
                            "location": "import",
                            "path": "ag-grid-community",
                            "id": "../node_modules/ag-grid-community/dist/types/main.d.ts::GridApi"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The AG Grid API"
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get states() {
        return {
            "activeFilters": {},
            "agGrid": {},
            "tableCreated": {}
        };
    }
    static get events() {
        return [{
                "method": "atSortChange",
                "name": "atSortChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits an event when a column's sorting state changes.\nUsed to perform sorting outside of agGrid, when use_custom_sorting is set.\nData in the table should be updated using the agGrid api:\n```agGrid.setGridOption(\"rowData\", yourNewData)```"
                },
                "complexType": {
                    "original": "{\n        colId: string;\n        sortDirection: 'asc' | 'desc' | null;\n    }",
                    "resolved": "{ colId: string; sortDirection: \"asc\" | \"desc\"; }",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "createGrid": {
                "complexType": {
                    "signature": "() => Promise<GridApi>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "GridApi": {
                            "location": "import",
                            "path": "ag-grid-community",
                            "id": "../node_modules/ag-grid-community/dist/types/main.d.ts::GridApi"
                        },
                        "GridOptions": {
                            "location": "import",
                            "path": "ag-grid-community",
                            "id": "../node_modules/ag-grid-community/dist/types/main.d.ts::GridOptions"
                        }
                    },
                    "return": "Promise<GridApi<any>>"
                },
                "docs": {
                    "text": "Method used to initialize the table.",
                    "tags": [{
                            "name": "returns",
                            "text": "The [AG Grid API](https://www.ag-grid.com/javascript-data-grid/grid-api/)"
                        }]
                }
            },
            "getGridApi": {
                "complexType": {
                    "signature": "() => Promise<GridApi>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "GridApi": {
                            "location": "import",
                            "path": "ag-grid-community",
                            "id": "../node_modules/ag-grid-community/dist/types/main.d.ts::GridApi"
                        }
                    },
                    "return": "Promise<GridApi<any>>"
                },
                "docs": {
                    "text": "Gets the AG Grid API instance",
                    "tags": [{
                            "name": "returns",
                            "text": "The AG Grid API"
                        }]
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "table_data",
                "methodName": "handleTableDataChange"
            }];
    }
}
//# sourceMappingURL=at-table.js.map
