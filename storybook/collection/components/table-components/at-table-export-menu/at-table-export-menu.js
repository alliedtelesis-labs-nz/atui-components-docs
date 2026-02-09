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
        return (h("at-menu", { key: '26535c39456af8c1082e4a8721cb16e3e78e3029', width: "fit-content", align: "end" }, h("at-tooltip", { key: 'f7a7a96222e11968b1dc8e0548bf21b5b198e830', slot: "menu-trigger", position: "top" }, h("at-button", { key: 'c4ae48a99d36fe9f74a2705bcf20b9c4a6fa2f5d', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '1520ab41a99143ba212f9d7c0064467e12c43eef' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: 'eb96eb5bfed4ae6b1cf24eb598d32107dfc8f4d3' }, h("at-menu-item", { key: 'e5e2d5c3edd515b7a2fc22cbce95252d545e3aa6', label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') }), h("at-menu-item", { key: '81df49b898b2d0d721866e679fe0db9b721344f1', label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') }))));
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
