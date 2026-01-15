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
        return (h("at-menu", { key: '74709471b0f1aad97ab1d5a41269cbc495a0b5e4', width: "fit-content", align: "end" }, h("at-tooltip", { key: '89e532dcee45a8f911f246dc594afc967f9fa655', slot: "menu-trigger", position: "top" }, h("at-button", { key: '86e6b2cb254138970ec0d9bda4d810696514cb7a', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: 'ad8a57280b1e6a3cad0203ef604166f3cc558ab2' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: 'a1e9b5359b10fe75a97286d2f0ec3b5c384a488f' }, h("at-menu-item", { key: '8f5b8b72ed79203e44c2b26ecdd5c06795b0d188', label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') }), h("at-menu-item", { key: 'a365569174bd10af1a0696e472c361660588d4eb', label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') }))));
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
