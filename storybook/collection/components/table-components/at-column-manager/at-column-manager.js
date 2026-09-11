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
        return (h("at-menu", { key: 'e9b5ad9559fc1c4996eb0d4a5a4f5f94ef697b90', autoclose: false, width: "fit-content", position: "bottom", align: "end" }, h("div", { key: '2c34e53ecf52c2b11ee9dd7bf537003187aac4a1', slot: "menu-trigger" }, h("at-tooltip", { key: '25108cc6fe0c7e1ca1ec639c9e332b8a72385a76', position: "top" }, h("at-button", { key: '2d9c2e136e64dad4e1b4fb22aa86c9914549c826', slot: "tooltip-trigger", type: "secondaryText" }, h("at-icon", { key: '2f7c5b0152666652a1a878d12d5d01e62c2f8efb', slot: "icon", name: "column" })), h("span", { key: 'd975a30cce6b053a71e5766569ac6b4c484976bd' }, this.translations.ATUI.TABLE.MANAGE_COLUMNS))), h("at-checkbox-group", { key: 'f5d19fc94781fa848ad609681b723a050e7ec085', class: "w-fit", options: this.col_defs
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
