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
        return (h("atui-menu", { key: '46c25974fd67ef3feec70edde700398d5d3d0ae5', autoclose: false, width: "auto", align: "end" }, h("atui-tooltip", { key: '4b1224dc0a94d77240d0accdfcad18fe25d3643e', slot: "menu-trigger", position: "top" }, h("atui-button", { key: '6c287d10f2f1060c3b1f13ec2a9cd6ef10a431a2', slot: "tooltip-trigger", type: "secondaryText", icon: "graphic_eq" }), h("span", { key: '833b282a0eb97d2c143db4687ed199dc73915738', slot: "tooltip-content" }, this.translations.ATUI.TABLE.MANAGE_COLUMNS)), h("atui-checkbox-group", { key: '1ae8823af37eda93576f921643e20475233ff587', slot: "menu-content", options: this.col_defs
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
