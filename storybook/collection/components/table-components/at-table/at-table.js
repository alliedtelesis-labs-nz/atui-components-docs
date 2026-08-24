import { h, Host, } from "@stencil/core";
import { createGrid } from "ag-grid-community";
import { resolveCellSearchText } from "../utils/cell-search-text";
import { themeQuartz } from "ag-grid-community";
import { TOKEN_FONT_FAMILY_BASE, TOKEN_FONT_SIZE_BASE, TOKEN_STATE_ACTIVE_BASE, } from "@alliedtelesis-labs-nz/atui-design-tokens/build/javascript/vista-manager/_tokens.js";
import { AtTableComponentsConfigs } from "../at-table-components-configs";
const PAGINATION_PAGE_SIZE_SELECTOR = [5, 10, 20, 50, 100];
/**
 * @category Data Tables
 * @description A comprehensive data table component with sorting, filtering, pagination, and selection capabilities. Features responsive design, customizable columns, and accessibility support.
 */
export class AtTableComponent {
    /**
     * Data provided to the table
     */
    table_data;
    /**
     * Column definitions for the table
     */
    col_defs;
    /**
     * Default page size of the table if pagination is activated
     */
    page_size = 10;
    /**
     * Disables the default sorting provided by agGrid.
     */
    use_custom_sorting = false;
    /**
     * Disables the default pagination provided by agGrid.
     * When using custom pagination, the default sorting
     * provided by ag grid will not work correctly.
     */
    use_custom_pagination = false;
    /**
     * If true, disables automatic grid initialization.
     * When disabled, you must manually call createGrid().
     * Used when the table is controlled by a parent component.
     */
    disable_auto_init = false;
    /**
     * If true, enables automatic column resizing to fit available space.
     * Columns will be sized proportionally based on their content and constraints. Fixed widths in column defs will be respected.
     */
    auto_size_columns = true;
    /**
     * The AG Grid API
     */
    ag_grid;
    el;
    resizeListener;
    /**
     * Emits an event when a column's sorting state changes.
     * Used to perform sorting outside of agGrid, when use_custom_sorting is set.
     * Data in the table should be updated using the agGrid api:
     * ```agGrid.setGridOption("rowData", yourNewData)```
     */
    atSortChange;
    activeFilters = {};
    agGrid;
    tableCreated = false;
    hasDisplayedRows = false;
    async handleTableDataChange(newData) {
        if (this.agGrid && this.tableCreated) {
            this.agGrid.setGridOption('rowData', newData?.items || []);
            this.updateDisplayedRowsState(this.agGrid);
            if (this.auto_size_columns) {
                setTimeout(() => this.agGrid.sizeColumnsToFit(), 0);
            }
        }
    }
    /**
     * `paginationPageSize` is only read when the grid is constructed, so without
     * this a `page_size` change after creation was silently ignored — the grid
     * kept whatever value was current at construction time.
     */
    handlePageSizeChange(newPageSize) {
        if (this.agGrid && this.tableCreated && newPageSize > 0) {
            this.agGrid.setGridOption('paginationPageSize', newPageSize);
        }
    }
    /**
     * Makes each column searchable by the text its cell renderer displays rather than by the
     * raw field value. A consumer-supplied getQuickFilterText always takes precedence.
     */
    withSearchText(colDefs) {
        return (colDefs ?? []).map((colDef) => {
            if (colDef.getQuickFilterText) {
                return colDef;
            }
            return {
                ...colDef,
                getQuickFilterText: (params) => resolveCellSearchText(colDef, params.value, params.data),
            };
        });
    }
    handleColDefsChange(newColDefs) {
        if (this.agGrid && this.tableCreated) {
            this.agGrid.setGridOption('columnDefs', this.withSearchText(newColDefs));
            if (this.auto_size_columns) {
                setTimeout(() => this.agGrid.sizeColumnsToFit(), 0);
            }
        }
    }
    /**
     * Re-applies the column defs so ag-grid's own sorting is neutralised, or
     * restored, when the prop arrives after the grid has been created - the
     * same late-binding case as `use_custom_pagination`. Without this a
     * server-driven table sorts its current page client-side while the
     * consumer also re-sorts server-side.
     */
    handleUseCustomSortingChange() {
        if (this.agGrid && this.tableCreated) {
            this.agGrid.setGridOption('columnDefs', this.resolveColumnDefs(this.col_defs));
        }
    }
    /**
     * Stubs out each column's comparator when the consumer sorts externally,
     * leaving the defs untouched otherwise.
     */
    resolveColumnDefs(colDefs) {
        if (!this.use_custom_sorting) {
            return colDefs;
        }
        return (colDefs ?? []).map((colDef) => ({
            ...colDef,
            comparator: () => 0,
        }));
    }
    /**
     * Keeps ag-grid's built-in paging panel in sync with the prop.
     *
     * The prop can arrive after the grid has already been created - e.g. a
     * consumer binding it a tick late, or `at-search-table` forwarding
     * `server_side_mode` that Angular applies after the element's first render.
     * `createGrid` reads the prop once, so without this the grid keeps the
     * paging panel it was built with and the consumer's own pagination footer
     * renders alongside it, giving two footers.
     */
    handleUseCustomPaginationChange() {
        if (this.agGrid && this.tableCreated) {
            this.applyPaginationOptions(this.agGrid);
        }
    }
    /**
     * `paginationPageSizeSelector` is an initial-only ag-grid option, so it is
     * set once in `createGrid` rather than here.
     */
    applyPaginationOptions(api) {
        if (this.use_custom_pagination) {
            api.setGridOption('pagination', false);
            return;
        }
        api.setGridOption('pagination', true);
        api.setGridOption('paginationPageSize', this.page_size);
    }
    async componentDidLoad() {
        if (this.disable_auto_init) {
            this.tableCreated = true;
        }
        await this.initGrid();
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
            this.updateDisplayedRowsState(this.agGrid);
            return;
        }
        if (gridReadyForCreation) {
            this.agGrid = await this.createGrid();
            this.tableCreated = true;
        }
    }
    updateDisplayedRowsState(api) {
        this.hasDisplayedRows = api.getDisplayedRowCount() > 0;
    }
    /**
     * Method used to initialize the table.
     *
     * @returns The [AG Grid API](https://www.ag-grid.com/javascript-data-grid/grid-api/)
     */
    async createGrid() {
        if (this.agGrid) {
            this.agGrid.destroy();
        }
        const agAtuiTheme = themeQuartz.withParams({
            browserColorScheme: 'inherit',
            fontFamily: TOKEN_FONT_FAMILY_BASE,
            fontSize: TOKEN_FONT_SIZE_BASE,
            accentColor: TOKEN_STATE_ACTIVE_BASE,
        });
        const gridOptions = {
            theme: agAtuiTheme,
            domLayout: 'autoHeight',
            rowData: this.table_data ? this.table_data.items : [],
            columnDefs: this.withSearchText(this.col_defs),
            enableBrowserTooltips: true,
            enableCellTextSelection: true,
            animateRows: true,
            components: AtTableComponentsConfigs.getFrameworkComponents(),
            onModelUpdated: (event) => {
                this.updateDisplayedRowsState(event.api);
            },
            onSortChanged: (event) => {
                const sortColumns = event.api
                    .getColumnState()
                    .filter((s) => s.sort != null);
                if (sortColumns.length > 0) {
                    this.atSortChange.emit({
                        colId: sortColumns[0].colId,
                        sortDirection: sortColumns[0].sort,
                    });
                }
                else {
                    this.atSortChange.emit({
                        colId: null,
                        sortDirection: null,
                    });
                }
            },
        };
        if (this.use_custom_sorting) {
            gridOptions.columnDefs = this.withSearchText(this.col_defs).map((colDef) => ({
                ...colDef,
                comparator: () => 0,
            }));
        }
        if (!this.use_custom_pagination) {
            gridOptions.pagination = true;
            gridOptions.paginationPageSize = this.page_size;
            gridOptions.paginationPageSizeSelector =
                PAGINATION_PAGE_SIZE_SELECTOR;
        }
        else {
            gridOptions.pagination = false;
        }
        const gridApi = createGrid(this.el, gridOptions);
        this.agGrid = gridApi;
        this.tableCreated = true;
        this.updateDisplayedRowsState(gridApi);
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
        return (h(Host, { key: '0ebdae4dd8f78deb283117110358b77443867944', class: {
                'ag-theme-atui': true,
                'ag-theme-atui--has-rows': this.hasDisplayedRows,
            } }));
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
                "mutable": false,
                "complexType": {
                    "original": "ColDef[]",
                    "resolved": "ColDef<any, any>[]",
                    "references": {
                        "ColDef": {
                            "location": "import",
                            "path": "ag-grid-community",
                            "id": "../node_modules/ag-grid-community/dist/types/main.d.ts::ColDef",
                            "referenceLocation": "ColDef"
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
                    "text": "Default page size of the table if pagination is activated"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "page_size",
                "defaultValue": "10"
            },
            "use_custom_sorting": {
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
                    "text": "Disables the default sorting provided by agGrid."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "use_custom_sorting",
                "defaultValue": "false"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Disables the default pagination provided by agGrid.\nWhen using custom pagination, the default sorting\nprovided by ag grid will not work correctly."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "use_custom_pagination",
                "defaultValue": "false"
            },
            "disable_auto_init": {
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
                    "text": "If true, disables automatic grid initialization.\nWhen disabled, you must manually call createGrid().\nUsed when the table is controlled by a parent component."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disable_auto_init",
                "defaultValue": "false"
            },
            "auto_size_columns": {
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
                    "text": "If true, enables automatic column resizing to fit available space.\nColumns will be sized proportionally based on their content and constraints. Fixed widths in column defs will be respected."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "auto_size_columns",
                "defaultValue": "true"
            },
            "ag_grid": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "GridApi",
                    "resolved": "GridApi<any>",
                    "references": {
                        "GridApi": {
                            "location": "import",
                            "path": "ag-grid-community",
                            "id": "../node_modules/ag-grid-community/dist/types/main.d.ts::GridApi",
                            "referenceLocation": "GridApi"
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
            "tableCreated": {},
            "hasDisplayedRows": {}
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
                    "resolved": "{ colId: string; sortDirection: \"desc\" | \"asc\"; }",
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
                            "id": "../node_modules/ag-grid-community/dist/types/main.d.ts::GridApi",
                            "referenceLocation": "GridApi"
                        },
                        "GridOptions": {
                            "location": "import",
                            "path": "ag-grid-community",
                            "id": "../node_modules/ag-grid-community/dist/types/main.d.ts::GridOptions",
                            "referenceLocation": "GridOptions"
                        },
                        "HTMLElement": {
                            "location": "global",
                            "id": "global::HTMLElement"
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
                            "id": "../node_modules/ag-grid-community/dist/types/main.d.ts::GridApi",
                            "referenceLocation": "GridApi"
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
            }, {
                "propName": "page_size",
                "methodName": "handlePageSizeChange"
            }, {
                "propName": "col_defs",
                "methodName": "handleColDefsChange"
            }, {
                "propName": "use_custom_sorting",
                "methodName": "handleUseCustomSortingChange"
            }, {
                "propName": "use_custom_pagination",
                "methodName": "handleUseCustomPaginationChange"
            }];
    }
}
