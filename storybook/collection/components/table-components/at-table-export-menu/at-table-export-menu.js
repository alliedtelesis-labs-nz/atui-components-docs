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
        return (h("at-menu", { key: '24e16ab32e7f58d1222f0f3aa41663fe08da1e8d', width: "fit-content", align: "end" }, h("at-tooltip", { key: '3f3ef8c0c76a2425fa8ede6a288927afcda8963a', slot: "menu-trigger", position: "top" }, h("at-button", { key: '87d5c9d0503303df3be2f7e73929fc4aff4cb4df', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '14763b02959cb43c94381a04746c1a9ba0af8e51' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '8bb03302a4e06ac77d08ddd8a6f9184880694387' }, h("at-menu-item", { key: '638f9c081b7bfe4fb1e6e1e904c0d46da0424c9e', label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') }), h("at-menu-item", { key: 'fa936e5a682b14e13e09a368354cd593b89b9e69', label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') }))));
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
