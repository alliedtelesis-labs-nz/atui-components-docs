import { h, } from "@stencil/core";
import { fetchTranslations } from "../../../utils/translation";
export class AtColumnManagerComponent {
    /**
     * Column definitions used in your at-table
     */
    col_defs;
    el;
    translations;
    checkedColumns = [];
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
        this.initializeCheckedColumns();
    }
    colDefsChanged() {
        this.initializeCheckedColumns();
    }
    initializeCheckedColumns() {
        if (this.col_defs) {
            this.checkedColumns = this.col_defs
                .filter((colDef) => colDef.hide !== true)
                .map((colDef) => colDef.field);
        }
    }
    /**
     * Custom event used by at-table-actions to perform ag-grid logic
     *
     * Emitted when checkbox is clicked
     */
    atChange;
    changeHandler(event) {
        const selectedColumns = event.detail || [];
        const previousColumns = new Set(this.checkedColumns);
        const currentColumns = new Set(selectedColumns);
        selectedColumns.forEach((columnId) => {
            if (!previousColumns.has(columnId)) {
                this.atChange.emit({
                    id: columnId,
                    checked: true,
                });
            }
        });
        Array.from(previousColumns).forEach((columnId) => {
            if (!currentColumns.has(columnId)) {
                this.atChange.emit({
                    id: columnId,
                    checked: false,
                });
            }
        });
        this.checkedColumns = selectedColumns;
    }
    render() {
        return (h("at-menu", { key: '7ba79fcba13d4b7fb09eb2ea89c02930cd027b4d', autoclose: false, width: "fit-content", position: "bottom", align: "end" }, h("div", { key: '82a2203b7e484956101235458e7d0febcebba1c1', slot: "menu-trigger" }, h("at-tooltip", { key: 'cfc07e9abe2d868d17e67b2f7daba7046b2c1a0b', position: "top" }, h("at-button", { key: 'dda584db21ec9cec852d767e768b8f326ee12a0e', slot: "tooltip-trigger", type: "secondaryText" }, h("at-icon", { key: 'ec0fab21c2fe7dfe8f26c1d8f5e474520733c5bb', slot: "icon", name: "column" })), h("span", { key: '14d58631de5c45d3f70a8c9c1ff951e87c91d17b' }, this.translations.ATUI.TABLE.MANAGE_COLUMNS))), h("at-checkbox-group", { key: 'c9ee7260c3c34b210a1ced022fb3d74b75eb0008', class: "w-fit", options: this.col_defs
                ? this.col_defs
                    .filter((colDef) => colDef.headerName &&
                    colDef.headerName.trim() !== '')
                    .map((colDef) => {
                    return {
                        value: colDef.field,
                        label: colDef.headerName,
                    };
                })
                : [], value: this.checkedColumns, onAtuiChange: (event) => this.changeHandler(event) })));
    }
    static get is() { return "at-column-manager"; }
    static get properties() {
        return {
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
                    "text": "Column definitions used in your at-table"
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get states() {
        return {
            "translations": {},
            "checkedColumns": {}
        };
    }
    static get events() {
        return [{
                "method": "atChange",
                "name": "atChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Custom event used by at-table-actions to perform ag-grid logic\n\nEmitted when checkbox is clicked"
                },
                "complexType": {
                    "original": "AtIColumnManagerChangeEvent",
                    "resolved": "AtIColumnManagerChangeEvent",
                    "references": {
                        "AtIColumnManagerChangeEvent": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/table-components/at-column-manager/at-column-manager.tsx",
                            "id": "src/components/table-components/at-column-manager/at-column-manager.tsx::AtIColumnManagerChangeEvent"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "col_defs",
                "methodName": "colDefsChanged"
            }];
    }
}
