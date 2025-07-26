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
        const selectedColumns = event.detail || [];
        const previousColumns = new Set(this.checkedColumns);
        const currentColumns = new Set(selectedColumns);
        selectedColumns.forEach((columnId) => {
            if (!previousColumns.has(columnId)) {
                this.atuiChange.emit({
                    id: columnId,
                    checked: true,
                });
            }
        });
        Array.from(previousColumns).forEach((columnId) => {
            if (!currentColumns.has(columnId)) {
                this.atuiChange.emit({
                    id: columnId,
                    checked: false,
                });
            }
        });
        this.checkedColumns = selectedColumns;
    }
    render() {
        return (h("atui-menu", { key: '71e694032b4f4ce4a8a1a3be50aa7bc69ab96e8a', autoclose: false, width: "auto", align: "end" }, h("div", { key: '07f500f7560300668bf6bf65a0fcaae84ca8394e', slot: "menu-trigger" }, h("atui-tooltip", { key: '9de947eb2c38030f6c327d9a57ecc362bbf5ee22', position: "top" }, h("atui-button", { key: '071dc5cd0a7cc8f24ef2c4ae6c55ba8f1027fb02', slot: "tooltip-trigger", type: "secondaryText", icon: "graphic_eq" }), h("span", { key: 'ec9f029e70a02d360487fbdccd3598f18dda44f4', slot: "tooltip-content" }, this.translations.ATUI.TABLE.MANAGE_COLUMNS))), h("atui-checkbox-group", { key: '8d343d7ec656e77946d9c93dd79d96685812ffd3', slot: "menu-content", options: this.col_defs
                ? this.col_defs.map((colDef) => {
                    return {
                        option_id: colDef.field,
                        label: colDef.field,
                    };
                })
                : [], value: this.checkedColumns, onAtuiChange: (event) => this.changeHandler(event) })));
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
                    "original": "ColumnManagerChangeEvent",
                    "resolved": "ColumnManagerChangeEvent",
                    "references": {
                        "ColumnManagerChangeEvent": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/table-components/atui-column-manager/atui-column-manager.tsx",
                            "id": "src/components/table-components/atui-column-manager/atui-column-manager.tsx::ColumnManagerChangeEvent"
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
//# sourceMappingURL=atui-column-manager.js.map
