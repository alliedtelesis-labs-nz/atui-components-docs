import { h, Host, } from "@stencil/core";
import { fetchTranslations } from "../../../utils/translation";
/**
 * @category Data Tables
 * @description A menu component for filtering table data. Provides a user-friendly interface for filtering data from tables.
 */
export class AtTableFilterMenu {
    /**
     * Column definitions used in your at-table
     */
    col_defs;
    /**
     * Currently selected filter columns
     */
    selected = [];
    translations;
    el;
    /**
     * Emits selected columns when checkbox selection changes
     */
    atChange;
    get filteredColumns() {
        return this.col_defs
            .filter((colDef) => colDef.field !== 'Checkbox')
            .map((colDef) => ({
            option_id: colDef.field,
            label: colDef.field,
        }));
    }
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    handleSelectedChange(newValue) {
        this.selected = newValue || [];
    }
    handleColumnSelect(event) {
        const newValue = event.detail || [];
        this.selected = newValue;
        this.atChange.emit(this.selected);
    }
    render() {
        return (h(Host, { key: 'fa4d52dddfd70c189e40219bbc5561916ca509d1' }, h("at-menu", { key: '221845576124e28f5d681e45d1feb64dbfec3de2', autoclose: false, width: "fit-content", class: "self-start" }, h("at-tooltip", { key: '5dae003e89486fe8487710d177a738fb730f02fd', slot: "menu-trigger", position: "top" }, h("at-button", { key: '4e991ad5b2370f0f865a7fd042f8bc15337f4c19', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), h("span", { key: '7d8c4c2ebc8616cd8f4f86437e2e32b551074798' }, this.translations.ATUI.TABLE.FILTER_DATA)), h("div", { key: 'fdd56ffbf31d934a9edfde9db41a3bd294c8e6db', class: "flex flex-col" }, h("at-checkbox-group", { key: 'ab0c0a78241c1e2eff0f88a2ee794372dd14f688', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
    }
    static get is() { return "at-table-filter-menu"; }
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
                    "text": "Column definitions used in your at-table"
                },
                "getter": false,
                "setter": false
            },
            "selected": {
                "type": "unknown",
                "attribute": "selected",
                "mutable": true,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Currently selected filter columns"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "translations": {}
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
                    "text": "Emits selected columns when checkbox selection changes"
                },
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "selected",
                "methodName": "handleSelectedChange"
            }];
    }
}
//# sourceMappingURL=at-table-filter-menu.js.map
