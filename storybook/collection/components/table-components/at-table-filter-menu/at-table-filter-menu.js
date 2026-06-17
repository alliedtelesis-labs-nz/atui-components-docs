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
            .filter((colDef) => !(colDef.filterOptions &&
            colDef.filterOptions.exclude === true))
            .map((colDef) => ({
            value: colDef.field,
            label: colDef.headerName,
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
        return (h(Host, { key: '1e8408c1c7c9400a51fa261b123a9d8e2ae5af30' }, h("at-menu", { key: 'f3f6acafa4e13141237ee53c613310052cd336e0', autoclose: false, width: "fit-content", class: "self-start", align: "start" }, h("at-tooltip", { key: 'bb04127e6ea58393b08d701bc88c9c2a34fd3e35', slot: "menu-trigger", position: "top" }, h("at-button", { key: '40ae065d47970e2efb6211f5558cf96d1932611c', slot: "tooltip-trigger", type: "secondaryOutline" }, h("at-icon", { key: '84dd73ad2c4f3e67a080e4be6043de47728bb3ac', slot: "icon", name: "edit_filters" })), h("span", { key: 'c08b99d12c9c1e9a2d314be4e2d7b16be080ee67' }, this.translations.ATUI.TABLE.FILTER_DATA)), h("div", { key: 'ea1074c81692504d44caa986188b9346885fc476', class: "flex flex-col" }, h("at-checkbox-group", { key: '31f9a4936342ba3c357585b5dd226084666b3b12', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
    }
    static get is() { return "at-table-filter-menu"; }
    static get properties() {
        return {
            "col_defs": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AtITableColumnDef[]",
                    "resolved": "AtITableColumnDef[]",
                    "references": {
                        "AtITableColumnDef": {
                            "location": "import",
                            "path": "../../../models/searchTableModel",
                            "id": "src/models/searchTableModel.ts::AtITableColumnDef",
                            "referenceLocation": "AtITableColumnDef"
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
