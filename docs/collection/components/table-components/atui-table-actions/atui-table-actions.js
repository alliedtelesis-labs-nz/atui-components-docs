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
        return (h(Host, { key: '83751196794e345ebcc83997137130419a96c20d', class: "relative z-menu flex flex-col gap-8 pb-8 pt-8" }, h("div", { key: '20edcd52d35a1dd4eb607a03c7285591dc662143', class: "flex justify-between" }, h("div", { key: '2c9ac7b22c4b9ede1820b3cba6c04c585251f977', class: "flex" }, h("slot", { key: 'e43ce67dd5f11a688d0bc7eabc03b0e54f6d4ca6', name: "search" })), h("div", { key: '55b4b3f476970e591435817599f643d820b02dad', class: "flex" }, h("slot", { key: 'dfd8af3f0081051bacee5c23b1be588f4a020151', name: "export-menu" }), h("slot", { key: '0c903187dcf4ec207341053bbbd2e8ee5bd4ed28', name: "column-manager" }), h("slot", { key: '8f650769e186956205c565cec02057e2c35fbda0', name: "actions" }))), h("slot", { key: '39fb695c19994e9234876fc0794b9eba9027b6b3', name: "filters" })));
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
