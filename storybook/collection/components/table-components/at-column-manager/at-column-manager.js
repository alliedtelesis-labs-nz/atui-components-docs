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
        return (h("at-menu", { key: '511edcb366a99fb0b2a6b5e4cba911c4533a4d78', autoclose: false, width: "fit-content", position: "left", align: "end" }, h("div", { key: 'fda241162150c3b9572c22253cfa90bc43744e4a', slot: "menu-trigger" }, h("at-tooltip", { key: '59deb9ede1153d11ea037fec17fa0fe24fb5bcd7', position: "top" }, h("at-button", { key: 'cfdf4602eb91b754e9180797eef23eae4499a99f', slot: "tooltip-trigger", type: "secondaryText", icon: "graphic_eq" }), h("span", { key: '668e9f84ee36e1cf4390a142c6650a8edab53d24' }, this.translations.ATUI.TABLE.MANAGE_COLUMNS))), h("at-checkbox-group", { key: 'bb541fd5afd124209de932a478efde1c3d623035', class: "w-fit", options: this.col_defs
                ? this.col_defs.map((colDef) => {
                    return {
                        value: colDef.field,
                        label: colDef.field,
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
