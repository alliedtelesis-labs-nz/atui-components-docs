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
        return (h(Host, { key: '1fe9d4420aa865dd46cae828aff29b90e1961bd4', class: "relative flex flex-col gap-8 pt-8 pb-8" }, h("div", { key: '8ce3cbb343c1b07bd9c62909ae4b1f9eb4f6e83f', class: "flex justify-between" }, h("div", { key: '58c5b591667a45b8d01b75a078b97f0b291c31a3', class: "flex flex-wrap items-end gap-8" }, h("slot", { key: 'afbda3fd855092f2bf476a852938d2db9307789d', name: "search" }), h("slot", { key: '7bccbcb10b6d95082fe5054e1cd327ae0facd429', name: "filter-bar" })), h("div", { key: 'f557d1b32f7c932d330bfa34297f974c74e2bb75', class: "flex items-center" }, h("slot", { key: 'c9be2ccd08788bf57f74da97b96b3319d209726f', name: "reload-button" }), h("slot", { key: 'b90db62f9ef84209b51ef4f3239d92621b97ad92', name: "export-menu" }), h("slot", { key: '28c7e3539729b392076982ee6530ac29ebd72e74', name: "leading-actions" }), h("slot", { key: 'd8fee24039e56f25a9942663cfe4fa9e5bdb9273', name: "column-manager" }), h("slot", { key: '4fc9a2d73d91f1e8eb84aaef7fd8001e2f4b1da2', name: "actions" }))), h("slot", { key: '97b420c72cde9592cf8016af7b821e66e24faf81', name: "filters" })));
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
