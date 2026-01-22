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
        return (h("at-menu", { key: '8490920126b4cd072caefdff44383b086053324d', width: "fit-content", align: "end" }, h("at-tooltip", { key: '8fb15031eaad8f3f775f429aa51ce3dcab9a4ac2', slot: "menu-trigger", position: "top" }, h("at-button", { key: 'd1f215af133aa66ca014568048e34fb4908a65e1', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: 'd8333da53acacec25517853140132d8d47af32eb' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '61d33ccff8abbd8b14161428b0707982d538672f' }, h("at-menu-item", { key: '02c5c080740563906fe98608389755df2c8ab655', label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') }), h("at-menu-item", { key: 'd5b69a745c9011f5f888d8cf930af0f0c595930b', label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') }))));
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
