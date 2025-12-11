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
        return (h("at-menu", { key: '5ae0c76cef5d82753f2bf734560d3c2455b606f3', width: "fit-content", align: "end" }, h("at-tooltip", { key: 'dd2b680840d98d13f186cc2fd39f292f3c2cc009', slot: "menu-trigger", position: "top" }, h("at-button", { key: 'cfd5074843dc1b59fe47f0c74f36b14983f0a96a', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '7d960ac012774fb70b381a94db93ac4690b18757' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: 'c219dcb353417eeaec9df007838acff1f8e64a5b' }, h("at-menu-item", { key: 'b5e559b8146087eeda69af84215ee7ef0ddd94f2', label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') }), h("at-menu-item", { key: 'fdfa72bf3049087fc80476fa012f243524dee14e', label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') }))));
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
