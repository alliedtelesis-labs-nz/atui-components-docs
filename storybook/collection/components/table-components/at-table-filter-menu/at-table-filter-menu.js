import { h, Host, } from "@stencil/core";
import { fetchTranslations } from "../../../utils/translation";
import { AvailableCells } from "../../../types/table-cells";
import { countFilterConditions } from "../../../utils/filter-tree.util";
const INTERACTION_ONLY_CELL_RENDERERS = [
    AvailableCells.CHECKBOX_CELL,
    AvailableCells.MENU_CELL,
    AvailableCells.MULTI_BTN_CELL,
];
/**
 * @category Data Tables
 * @description A menu component for filtering table data. Opens the at-filter-form builder so users can add field/operator/value conditions.
 * @dependency at-filter-form
 */
export class AtTableFilterMenu {
    /**
     * Column definitions used in your at-table
     */
    col_defs;
    /**
     * Currently active filters, used to seed the form when the menu is opened
     */
    filters;
    translations;
    el;
    menuEl;
    /**
     * Emits the active filters when the user applies a search
     */
    atChange;
    /**
     * Opens the filter menu, showing the filter form seeded with the active filters.
     */
    async openMenu() {
        await this.menuEl?.openMenu();
    }
    get filterConfig() {
        return (this.col_defs || [])
            .filter((colDef) => this.isFilterableColumn(colDef))
            .map((colDef) => {
            const filterOptions = this.convertDropdownKeysToSelectOptions(colDef);
            return {
                id: colDef.field ?? '',
                label: colDef.headerName ?? colDef.field ?? '',
                value: '',
                ...(filterOptions && { filter_options: filterOptions }),
            };
        });
    }
    isFilterableColumn(colDef) {
        return (!!colDef.field &&
            colDef.filterOptions?.exclude !== true &&
            !INTERACTION_ONLY_CELL_RENDERERS.includes(colDef.cellRenderer));
    }
    convertDropdownKeysToSelectOptions(column) {
        if (column?.filterOptions?.dropdownKeys) {
            return column.filterOptions.dropdownKeys.map((key) => ({
                value: key.content,
                label: key.translationKey,
            }));
        }
    }
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    handleSearch = async (event) => {
        this.atChange.emit(event.detail);
        await this.menuEl?.closeMenu();
    };
    handleCancel = async () => {
        await this.menuEl?.closeMenu();
    };
    render() {
        return (h(Host, { key: '022bbd04268c7989d95cbb8fbae23c6fbfbe5623' }, h("at-menu", { key: '9e234bf71a92c0be28654513b69e08b9969ea697', ref: (el) => (this.menuEl = el), autoclose: false, width: "fit-content", class: "self-start", align: "start" }, h("div", { key: 'e05b308373e06edb7331c72bbdb1c3e5ec56833c', class: "relative", slot: "menu-trigger", "data-tooltip": "table-filter-menu" }, this.filters &&
            countFilterConditions(this.filters) > 0 && (h("at-badge", { key: '5ebde514fd78f4caf41ed161abba63474d765e88', class: "absolute top-[-8px] left-[-6px] z-50", type: "info", size: "sm", label: countFilterConditions(this.filters).toString() })), h("at-button", { key: '3237e08cda1bf4d704b85c8240507c61e15d2039', slot: "tooltip-trigger", type: "secondaryOutline", class: "h-input", "data-name": "filter-menu-trigger" }, h("at-icon", { key: 'a782a1a9b554900e8b21f68fc5037cd9d426fb24', slot: "icon", name: "edit_filters" }))), h("at-tooltip", { key: '8e582e0d378911da7776c70051089b6cb6a86935', "trigger-id": "table-filter-menu", position: "top" }, this.translations.ATUI.TABLE.FILTER_DATA), h("at-filter-form", { key: '5c5008217ddb864946e6bd9675b412a5837db727', filter_config: this.filterConfig, active_filters: this.filters, onAtSearch: this.handleSearch, onAtCancel: this.handleCancel }))));
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
            "filters": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AtIFilterGroup",
                    "resolved": "AtIFilterGroup",
                    "references": {
                        "AtIFilterGroup": {
                            "location": "import",
                            "path": "../../../types",
                            "id": "src/types/index.ts::AtIFilterGroup",
                            "referenceLocation": "AtIFilterGroup"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Currently active filters, used to seed the form when the menu is opened"
                },
                "getter": false,
                "setter": false
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
                    "text": "Emits the active filters when the user applies a search"
                },
                "complexType": {
                    "original": "AtIFilterGroup",
                    "resolved": "AtIFilterGroup",
                    "references": {
                        "AtIFilterGroup": {
                            "location": "import",
                            "path": "../../../types",
                            "id": "src/types/index.ts::AtIFilterGroup",
                            "referenceLocation": "AtIFilterGroup"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "openMenu": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Opens the filter menu, showing the filter form seeded with the active filters.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
}
