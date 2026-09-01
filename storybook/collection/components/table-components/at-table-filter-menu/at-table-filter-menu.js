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
        return (h(Host, { key: '7df5efcc7a021d2b1995354dcfce7320a9477a3b' }, h("at-menu", { key: '0709e503152adcaff4859a016fbafb96a8266038', ref: (el) => (this.menuEl = el), autoclose: false, width: "fit-content", class: "self-start", align: "start" }, h("div", { key: '383ce25985d64b37e77058ce273a82ca06457765', class: "relative", slot: "menu-trigger", "data-tooltip": "table-filter-menu" }, this.filters &&
            countFilterConditions(this.filters) > 0 && (h("at-badge", { key: '2f377812848ce373c0d72bbe06694d6f9e660b01', class: "absolute top-[-8px] left-[-6px] z-50", type: "info", size: "sm", label: countFilterConditions(this.filters).toString() })), h("at-button", { key: '86da0346f7abdd9ac2a70848c8db075a20ac1215', slot: "tooltip-trigger", type: "secondaryOutline", class: "h-input", "data-name": "filter-menu-trigger" }, h("at-icon", { key: '35e80513c073646353be83f854303e566295a841', slot: "icon", name: "edit_filters" }))), h("at-tooltip", { key: 'd4761a2cfe449404e60e6a747ab1d676a18cdcdf', "trigger-id": "table-filter-menu", position: "top" }, this.translations.ATUI.TABLE.FILTER_DATA), h("at-filter-form", { key: 'fbad025c7f015cd69130fa99213311eed84cd9c9', filter_config: this.filterConfig, active_filters: this.filters, onAtSearch: this.handleSearch, onAtCancel: this.handleCancel }))));
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
