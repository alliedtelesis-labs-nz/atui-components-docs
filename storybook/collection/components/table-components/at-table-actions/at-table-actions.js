import { h, Host, } from "@stencil/core";
/**
 * @category Data Tables
 * @description A container component for table actions, including search, export, and column management. Provides a unified interface for managing table interactions and data export.
 *
 * @slot column-manager - Used to place an at-column-manager
 * @slot search - Used to place an at-search
 * @slot filter-bar - Used to place the persistent filter controls that sit beside the search field
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
        return (h(Host, { key: '00a274ec6505ad1693bd509bedb21759a798bd52', class: "relative flex flex-col gap-8 pt-8 pb-8" }, h("div", { key: '118297fef1ed0cd3ef272022f68fcc1fa5fe5ac1', class: "flex justify-between" }, h("div", { key: '4f30e5dc77535f6b8d7c7ec7241a1c7b31a4dd13', class: "flex flex-wrap items-end gap-8" }, h("slot", { key: 'b2acaab79741529622705e9de0ab8e759662775a', name: "search" }), h("slot", { key: '18e620c590ceed6f144cd79f9644fd41ee1f4cbd', name: "filter-bar" })), h("div", { key: 'a0a753027b21d1a98c5a9d9982a2a593006f05af', class: "flex items-center" }, h("slot", { key: '3c435602cb7a69a1d0063a44fd36df2cd9e772ef', name: "reload-button" }), h("slot", { key: '273cea3d029164c799fbec4aa56ba2f2988e85fa', name: "export-menu" }), h("slot", { key: 'ebec76f3872d195ee912d12a61fb939d5f0af1b7', name: "leading-actions" }), h("slot", { key: '0ed3ffc293b8dbcee9402178b2a75416a2546438', name: "column-manager" }), h("slot", { key: '25045f0a795e71a239b3f6ff8cde336b02f3a7ba', name: "actions" }))), h("slot", { key: 'cc576d433188aa421b0c91fbd5bfab7bcbd4059c', name: "filters" })));
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
