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
        return (h(Host, { key: 'e8a10a7a95e79c2a671445d3b01084d87d89be3e', class: "relative flex flex-col gap-8 pt-8 pb-8" }, h("div", { key: '1ce08ba59c8950083b663baefe6fdf86fffeeab4', class: "flex justify-between" }, h("div", { key: '4404e6c6f63ebfd5040e2b1509660618c8ede1dd', class: "flex" }, h("slot", { key: '04603e986191893ee6e993efb94f31e6d3614ffa', name: "search" })), h("div", { key: '238a4e37a6a1c73b327a92ea42049d9c3c0814fc', class: "flex" }, h("slot", { key: '22b0aa0bc609796667f62ae0acc5824602cf4610', name: "export-menu" }), h("slot", { key: '27725ad30db7f99468fe21a44d7370a5ca629919', name: "column-manager" }), h("slot", { key: 'a3b8a87e43431aaee5035ac1019c667f66a83174', name: "actions" }))), h("slot", { key: 'c7c358bcd25af78442e71ce3c58ac89a591d6885', name: "filters" })));
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
                "name": "atuiChange",
                "method": "changeHandler",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
