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
        return (h(Host, { key: 'a2d3ea630e1eba238aeab484c7f9372c270f4a2e', class: "relative z-menu flex flex-col gap-8 pb-8 pt-8" }, h("div", { key: 'f9cb949f333cac9e97668053c6a85baf475ff1c8', class: "flex justify-between" }, h("div", { key: 'ab0c6cd07806991ded6a4781898b589712facfa7', class: "flex" }, h("slot", { key: '04de67a9f33bf6420af04cdac6bc6d29d60884f7', name: "search" })), h("div", { key: '139ad0b3b82b822eff729f90981328934a49157b', class: "flex" }, h("slot", { key: 'df7e55ff3d92dc1837ecd32166e9dacd6977c22e', name: "export-menu" }), h("slot", { key: 'aae2b9bbd656ba09f6787f1dd7a1b827b1c4fb12', name: "column-manager" }), h("slot", { key: 'e7aea19f16fb2fb5c05779f331186a47571eec39', name: "actions" }))), h("slot", { key: 'ed10cd949bdb137c84438334784c9125b79883df', name: "filters" })));
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
