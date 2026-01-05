import { h, } from "@stencil/core";
import { fetchTranslations } from "../../../utils/translation";
/**
 * @category Data Tables
 * @description A menu component for exporting table data in CSV or PDF formats. Provides a user-friendly interface for exporting data from tables.
 */
export class AtTableExportMenu {
    el;
    translations;
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    /**
     * Emits id of the clicked menu item, either 'CSV' or 'PDF'.
     */
    atChange;
    render() {
        return (h("at-menu", { key: 'c5da9b62c5eb6d8ac0fbecefed0d4ff8b82d2443', width: "fit-content", align: "end" }, h("at-tooltip", { key: '62b7791b951d9065037cd58a7ed4b763e0283a49', slot: "menu-trigger", position: "top" }, h("at-button", { key: '4cb4ff8b5ad043677bde872283c40d2f5c0cfe41', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '362d733d211d6221334340beb20d32fe41f198fc' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '92f20d8eeb7518a7fd1c59ced65905395f6e3f5e' }, h("at-menu-item", { key: 'e45501e95ae9324602cd31d2d7ee6452c0e23fe4', label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') }), h("at-menu-item", { key: '46f113ee37881a1a54b3ecc1950e7d756d5185eb', label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') }))));
    }
    static get is() { return "at-table-export-menu"; }
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
                    "text": "Emits id of the clicked menu item, either 'CSV' or 'PDF'."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=at-table-export-menu.js.map
