import { h, Host, } from "@stencil/core";
/**
 * @category Data Tables
 * @description A container component for table actions, including search, export, and column management. Provides a unified interface for managing table interactions and data export.
 *
 * @slot column-manager - Used to place an atui-column-manager
 * @slot search - Used to place an atui-search
 * @slot dropdown-filters - Used to place an atui-table-filters
 * @slot export-menu - Used to place an atui-export-menu
 * @slot actions - Used to place actions related to table content

*/
export class AtuiTableActionsComponent {
    changeHandler(event) {
        const target = event.target;
        switch (target.slot) {
            case 'column-manager':
                this.ag_grid.setColumnsVisible([event.detail.id], event.detail.checked);
                break;
            case 'search':
                this.ag_grid.setGridOption('quickFilterText', event.detail);
                break;
            case 'export-menu':
                if (event.detail === 'CSV')
                    this.atuiExportCsv.emit();
                if (event.detail === 'PDF')
                    this.atuiExportPdf.emit(this.getVisibleColumns());
                break;
            case 'dropdown-filters':
                this.atuiChange.emit(event.detail);
                break;
        }
    }
    getVisibleColumns() {
        return this.ag_grid.getAllDisplayedColumns().map((column) => {
            const userProvidedColDef = column.getUserProvidedColDef();
            return {
                actualWidth: column.getActualWidth(),
                field: (userProvidedColDef === null || userProvidedColDef === void 0 ? void 0 : userProvidedColDef.field) || '',
                displayName: this.ag_grid.getDisplayNameForColumn(column, 'header'),
            };
        });
    }
    render() {
        return (h(Host, { key: 'e82b3e18ba5b8a334669d549d40c0cb0c8039ae5', class: "relative z-menu flex flex-col gap-8 pb-8 pt-8" }, h("div", { key: 'fdfa996c80d5511ad24b3ff4d40eea9f5115f14a', class: "flex justify-between" }, h("div", { key: '4d48c5c8e937602960cd5dc62202c0c9bc8d572d', class: "flex" }, h("slot", { key: 'ac484912b1d511c6ac13337b9be93c504dae4f3f', name: "search" })), h("div", { key: 'e08b03e86ac367d1cb8f46004e08546f018dbb22', class: "flex" }, h("slot", { key: '8ec48ef5f56714ecc3e966f28fc2b6e6342e1859', name: "export-menu" }), h("slot", { key: '96003f1bf7607a07faa997b8b00878dbae5a61b4', name: "column-manager" }), h("slot", { key: '262c4b918d48f149a58f8156f9f795cb870a026d', name: "actions" }))), h("slot", { key: 'c3debabb606081861f6eeda37fd10b547eb247aa', name: "filters" })));
    }
    static get is() { return "atui-table-actions"; }
    static get properties() {
        return {
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
                    "text": "AG Grid Api (provided by atui-table createGrid method)"
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get events() {
        return [{
                "method": "atuiExportCsv",
                "name": "atuiExportCsv",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits an event when 'Export CSV' is pressed on provided atui-table-export-menu"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "atuiExportPdf",
                "name": "atuiExportPdf",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits an event when 'Export PDF' is pressed on provided atui-table-export-menu"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "atuiChange",
                "name": "atuiChange",
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
                "name": "atuiChange",
                "method": "changeHandler",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=atui-table-actions.js.map
