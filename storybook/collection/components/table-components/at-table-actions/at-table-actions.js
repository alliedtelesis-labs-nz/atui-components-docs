import { h, Host, } from "@stencil/core";
/**
 * @category Data Tables
 * @description A container component for table actions, including search, export, and column management. Provides a unified interface for managing table interactions and data export.
 *
 * @slot column-manager - Used to place an at-column-manager
 * @slot search - Used to place an at-search
 * @slot filters - Used to place an at-table-filters
 * @slot reload-button - Used to place an at-reload-button
 * @slot export-menu - Used to place an at-export-menu
 * @slot leading-actions - Used to place actions immediately left of the column manager
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
     * Every component slotted into this toolbar emits `atChange`, not
     * `atuiChange`:
     *
     * - `at-table-filters`     — `@Event() atChange`
     * - `at-table-export-menu` — `@Event() atChange`
     * - `at-column-manager`    — `@Event({ eventName: 'atChange' })`
     * - `at-search`            — `@Event({ eventName: 'atChange' })`; the class
     *   property is named `atuiChange`, but the event emitted is `atChange`
     *
     * Listening for `atuiChange` meant this switch never ran, so a toolbar
     * composed directly from these parts had inert search, filters and export.
     * The only `atuiChange` that reaches here bubbles out of
     * `at-column-manager`'s inner `at-checkbox-group`, whose `string[]` payload
     * does not match what the `column-manager` branch reads.
     *
     * These event names break the repo's `atui*` convention, which is what made
     * the mismatch easy to miss. Renaming them is a breaking public API change,
     * so this aligns the listener with what is emitted today.
     *
     * The host re-emits `atChange` for the `filters` case. That re-enters this
     * handler with `event.target` as the host, whose `slot` is empty, so no case
     * matches and it terminates.
     *
     * `ag_grid` is optional-chained because the toolbar can be interacted with
     * before a host has handed it a grid.
     */
    changeHandler(event) {
        const target = event.target;
        // at-search-table nests an at-table-actions purely for layout and wires its own
        // handler to every child, so without this each child's atChange is handled twice:
        // its export menu emits atExportCsv/atExportPdf from both components.
        //
        // Its search box is not double-handled, but only because at-search-table wraps it
        // in an at-control-group that carries slot="search" while the event's target is
        // the at-search itself, whose slot is empty.
        if (target.closest('at-search-table')) {
            return;
        }
        switch (target.slot) {
            case 'column-manager':
                this.ag_grid?.setColumnsVisible([event.detail.id], event.detail.checked);
                break;
            case 'search':
                this.ag_grid?.setGridOption('quickFilterText', event.detail);
                break;
            case 'export-menu':
                if (event.detail === 'CSV')
                    this.atExportCsv.emit();
                if (event.detail === 'PDF')
                    this.atExportPdf.emit(this.getVisibleColumns());
                break;
            // The rendered slot is `filters`, which is the name `at-search-table`
            // uses. This case said `dropdown-filters` — a name only the stories
            // and the e2e fixture ever used — so it never matched either.
            case 'filters':
                this.atChange.emit(event.detail);
                break;
        }
    }
    getVisibleColumns() {
        if (!this.ag_grid) {
            return [];
        }
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
        return (h(Host, { key: '28d9084da37c4243e8b46dabe765d9eb04b0d7e1', class: "relative flex flex-col gap-8 pt-8 pb-8" }, h("div", { key: 'e2c671c06e8ce4d64d350bd20c02d4861391eb57', class: "flex justify-between" }, h("div", { key: '3a23a9252ff1b10f9b580bf64ad7ecbd3ed5d03f', class: "flex" }, h("slot", { key: 'd88dc2c2f268f30dd39b58fea5e78fc61b73f77f', name: "search" })), h("div", { key: '30d686b387477672217c968f76bcaa9b5723ea72', class: "flex items-center" }, h("slot", { key: 'b39b6837fa7500bb208ebd76fd373dc884495df3', name: "reload-button" }), h("slot", { key: '65eb9ae5861a733d42dafca8425927aeab2bc924', name: "export-menu" }), h("slot", { key: '2485b597151b532889f5c81d85f32202cb14587e', name: "leading-actions" }), h("slot", { key: 'd0ad3abe1e2f315998f943f0ebb38afa4d18f90e', name: "column-manager" }), h("slot", { key: 'e034c5049466769fd528eda327b2f35263981a6f', name: "actions" }))), h("slot", { key: '6b743f0bdac5ac9141157404b4cbffe97ed55652', name: "filters" })));
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
                "method": "changeHandler",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
