import { h, } from "@stencil/core";
import { fetchTranslations } from "../../../utils/translation";
export class AtuiColumnManagerComponent {
    constructor() {
        this.checkedColumns = [];
    }
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
    changeHandler(event) {
        const checkboxEl = event.target;
        const columnId = checkboxEl.id;
        const isChecked = checkboxEl.checked;
        if (isChecked) {
            this.checkedColumns = [...this.checkedColumns, columnId];
        }
        else {
            this.checkedColumns = this.checkedColumns.filter((id) => id !== columnId);
        }
        this.atuiChange.emit({
            id: columnId,
            checked: isChecked,
        });
    }
    render() {
        return (h("atui-menu", { key: 'f9b9c7a1f85d841edf91941690a3b1e59bfea201', autoclose: false, width: "auto", align: "end" }, h("atui-tooltip", { key: '7b2d464e2dbd783693efb83a73cee7751c92c90b', slot: "menu-trigger", position: "top" }, h("atui-button", { key: '807eab7b998870483994d1db11580ca17bb82c8d', slot: "tooltip-trigger", type: "secondaryText", icon: "graphic_eq" }), h("span", { key: 'ea490a1055ce9f0fb87458086de0b66bb5794a6a', slot: "tooltip-content" }, this.translations.ATUI.TABLE.MANAGE_COLUMNS)), h("atui-checkbox-group", { key: '3365433f7f8c8e8a2cbb3352b41e4e08b86a6d0b', slot: "menu-content", options: this.col_defs
                ? this.col_defs.map((colDef) => {
                    return {
                        option_id: colDef.field,
                        label: colDef.field,
                    };
                })
                : [], value: this.checkedColumns, onChange: (event) => this.changeHandler(event) })));
    }
    static get is() { return "atui-column-manager"; }
    static get properties() {
        return {
            "col_defs": {
                "type": "unknown",
                "attribute": "col_defs",
                "mutable": false,
                "complexType": {
                    "original": "ColDef[]",
                    "resolved": "ColDef<any, any>[]",
                    "references": {
                        "ColDef": {
                            "location": "import",
                            "path": "ag-grid-community",
                            "id": "../node_modules/ag-grid-community/dist/types/main.d.ts::ColDef"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Column definitions used in your atui-table"
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
                "method": "atuiChange",
                "name": "atuiChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Custom event used by atui-table-actions to perform ag-grid logic\n\nEmitted when checkbox is clicked"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
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
//# sourceMappingURL=atui-column-manager.js.map
