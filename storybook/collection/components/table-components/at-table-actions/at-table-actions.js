import { h, Host, } from "@stencil/core";
/**
 * @category Data Tables
 * @description A container component for table actions, including search, export, and column management. Provides a unified interface for managing table interactions and data export.
 *
 * @slot column-manager - Used to place an at-column-manager
 * @slot search - Used to place an at-search
 * @slot dropdown-filters - Used to place an at-table-filters
 * @slot export-menu - Used to place an at-export-menu
 * @slot actions - Used to place actions related to table content

*/
export class AtTableActionsComponent {
    /**
     * AG Grid Api (provided by at-table createGrid method)
     */
    ag_grid;
    /**
     * Emits an event when 'Export CSV' is pressed on provided at-table-export-menu
     */
    atExportCsv;
    /**
     * Emits an event when 'Export PDF' is pressed on provided at-table-export-menu
     */
    atExportPdf;
    /**
     * Emits an event when filters change
     */
    atChange;
    /**
     * Column visibility arrives on `atChange`, not `atuiChange`.
     *
     * `at-column-manager` emits its `{ id, checked }` payload as `atChange`. The
     * `atuiChange` that bubbles out of it belongs to the inner
     * `at-checkbox-group` and carries a `string[]` of still-checked columns, so
     * reading `.id` / `.checked` off it yielded `undefined` and the call below
     * was `setColumnsVisible([undefined], undefined)` — meaning no column was
     * ever actually hidden.
     */
    columnVisibilityHandler(event) {
        const target = event.target;
        if (target.slot !== 'column-manager' || !this.ag_grid) {
            return;
        }
        this.ag_grid.setColumnsVisible([event.detail.id], event.detail.checked);
    }
    changeHandler(event) {
        const target = event.target;
        switch (target.slot) {
            case 'search':
                this.ag_grid.setGridOption('quickFilterText', event.detail);
                break;
            case 'export-menu':
                if (event.detail === 'CSV')
                    this.atExportCsv.emit();
                if (event.detail === 'PDF')
                    this.atExportPdf.emit(this.getVisibleColumns());
                break;
            case 'dropdown-filters':
                this.atChange.emit(event.detail);
                break;
        }
    }
    getVisibleColumns() {
        return this.ag_grid.getAllDisplayedColumns().map((column) => {
            const userProvidedColDef = column.getUserProvidedColDef();
            return {
                actualWidth: column.getActualWidth(),
                field: userProvidedColDef?.field || '',
                displayName: this.ag_grid.getDisplayNameForColumn(column, 'header'),
            };
        });
    }
    render() {
        return (h(Host, { key: 'f0ac0bb5762c1a075e64a388483a2aaef386d52e', class: "relative flex flex-col gap-8 pt-8 pb-8" }, h("div", { key: '121191e79a28703548b860384eb0f95eb6002bc6', class: "flex justify-between" }, h("div", { key: '3673b1f450073dc7602ec2300715064327f224c2', class: "flex" }, h("slot", { key: '3705b15a6c26d0bd1f47f87d3e9d4f2203bc165f', name: "search" })), h("div", { key: '215cbe0acbcac28caf125b821565344ee001fa0d', class: "flex" }, h("slot", { key: 'a8080683f98b89e6e69fe86859ce86b40a97691d', name: "export-menu" }), h("slot", { key: '64f9f1e501a3b5899b9ca1996b36a8936c09665e', name: "column-manager" }), h("slot", { key: '6b0c7550dfa17e18788925381520c8a571e4325d', name: "actions" }))), h("slot", { key: '6c7d0bb842647dc74e97dac5a032751ee882da89', name: "filters" })));
    }
    static get is() { return "at-table-actions"; }
    static get properties() {
        return {
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
                    "text": "AG Grid Api (provided by at-table createGrid method)"
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get events() {
        return [{
                "method": "atExportCsv",
                "name": "atExportCsv",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits an event when 'Export CSV' is pressed on provided at-table-export-menu"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "atExportPdf",
                "name": "atExportPdf",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits an event when 'Export PDF' is pressed on provided at-table-export-menu"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "atChange",
                "name": "atChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits an event when filters change"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "atChange",
                "method": "columnVisibilityHandler",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "atuiChange",
                "method": "changeHandler",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
