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
        return (h("at-menu", { key: '1334afc74573706f7beb23b48f4b34dd7e2e3e08', width: "fit-content", align: "end" }, h("at-tooltip", { key: 'c6c7af0d33aea3ab4003afa7906c9c361234d26a', slot: "menu-trigger", position: "top" }, h("at-button", { key: 'bd1cec0e0ea5efd3703f1850753618051fad93e2', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '5a56258406c1a664026a6ef40044efc2cc6e0ad0' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: 'a616d3c9f56d00dc71517eda40e8632ceb8032c0' }, h("at-menu-item", { key: '9712e46905e3931bafd80280622c358783b11a9d', label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') }), h("at-menu-item", { key: '9fb8ee47838fc9e48a4941cf2700fc7ed1676419', label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') }))));
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
