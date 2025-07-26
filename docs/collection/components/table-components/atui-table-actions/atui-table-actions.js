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
        return (h(Host, { key: '07d08316a168e0ef7f5f66eb5760a4a1068dea8f', class: "relative flex flex-col gap-8 pb-8 pt-8" }, h("div", { key: 'f8f031e1525cdf1626622f292c09dc6130a99b7d', class: "flex justify-between" }, h("div", { key: '6a1292aeb1e95cd0fda95f52970e6f3d7c49b027', class: "flex" }, h("slot", { key: 'e0f7cf1642ceba1a379b40c7f56931432984920b', name: "search" })), h("div", { key: 'b98ddc6ab9936b13deba8f87d4c3d240d6ee2c8d', class: "flex" }, h("slot", { key: '600ba7de699f42305b38a756b2d69ee7da76fb1d', name: "export-menu" }), h("slot", { key: '7dc0ac70d67ef8d56f2a8f9a80b44767899dd5aa', name: "column-manager" }), h("slot", { key: '4794742d12186b47296082b8f39c6e9a10b0eb01', name: "actions" }))), h("slot", { key: '0984b9c324caf29af74a52c7badc5dd8ebd4aebd', name: "filters" })));
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
