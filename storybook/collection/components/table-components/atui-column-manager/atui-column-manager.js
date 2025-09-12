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
        return (h("atui-menu", { key: 'c432120517ce3ab159f5715664bbc41ca6f65d33', autoclose: false, width: "fit-content", align: "start" }, h("div", { key: 'a415e742cfaa7c01d2ff2e758f6ce1f70c8e7a57', slot: "menu-trigger" }, h("atui-tooltip", { key: 'ee91fbad801563e8c5ab1c785cad0923173e7d53', position: "top" }, h("atui-button", { key: 'd3a13c74e7dbd24d3c1c60d9be916bf6959d659c', slot: "tooltip-trigger", type: "secondaryText", icon: "graphic_eq" }), h("span", { key: '1a7f68b0a22c6212a1349a39f58beb22742a6de3' }, this.translations.ATUI.TABLE.MANAGE_COLUMNS))), h("atui-checkbox-group", { key: '977f19ffd9b37f38318e22a434234c260420bc08', class: "w-fit", options: this.col_defs
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
