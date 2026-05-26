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
        return (h("at-menu", { key: '4ce38d7338e6038deb65526b190480a873585ec2', autoclose: false, width: "fit-content", position: "bottom", align: "end" }, h("div", { key: 'a2820534ee0070c580b039d2bd9600341692cd2d', slot: "menu-trigger" }, h("at-tooltip", { key: '99827cabf5b402355c6a003aae60b851a665c542', position: "top" }, h("at-button", { key: '2d730911184cdf8514ae8aa7d8bae3d790bccf90', slot: "tooltip-trigger", type: "secondaryText" }, h("at-icon", { key: '43e7adf9088ecf94f6887c90f61a5aa877d89b7c', slot: "icon", name: "column" })), h("span", { key: '189066e126c566fb0db89dc74e0b8ea1fca53c63' }, this.translations.ATUI.TABLE.MANAGE_COLUMNS))), h("at-checkbox-group", { key: 'f6267af9e9569bc4ab0e2268547d617691feb730', class: "w-fit", options: this.col_defs
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
