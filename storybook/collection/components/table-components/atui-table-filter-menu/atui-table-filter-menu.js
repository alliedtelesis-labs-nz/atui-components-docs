import { h, Host, } from "@stencil/core";
import { fetchTranslations } from "../../../utils/translation";
/**
 * @category Data Tables
 * @description A menu component for filtering table data. Provides a user-friendly interface for filtering data from tables.
 */
export class AtuiTableFilterMenu {
    constructor() {
        /**
         * Currently selected filter columns
         */
        this.selected = [];
    }
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
        this.atuiChange.emit(this.selected);
    }
    render() {
        return (h(Host, { key: 'e49b326c2f3f4c2581e553dadfe10a21edbbb3d6' }, h("atui-menu", { key: '732c72d2edd59dc638b1bae9af146c46fa0a424e', autoclose: false, width: "fit-content", class: "self-start" }, h("atui-tooltip", { key: '601d33ced3c53c7f184f265e4c6692215a9e6b4c', slot: "menu-trigger", position: "top" }, h("atui-button", { key: '2d82bd643ff3852490681c94eabf3cd115f29583', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), h("span", { key: 'a57024cbacab313aa7d706bdf8f77b0e5c97d248' }, this.translations.ATUI.TABLE.FILTER_DATA)), h("div", { key: '08825d5b2f602e9127f218628fd2581ba1604189', class: "flex flex-col" }, h("atui-checkbox-group", { key: '94589ab2d1637d331c080faf4bad7262948db959', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
    }
    static get is() { return "atui-table-filter-menu"; }
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
                "method": "atuiChange",
                "name": "atuiChange",
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
//# sourceMappingURL=atui-table-filter-menu.js.map
