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
        return (h("at-menu", { key: 'ba5ff1f1c34e24ae63c314ac58ff74e3643a2432', width: "fit-content", align: "end" }, h("at-tooltip", { key: '95fbf0bd30080421be8da20e7f2a8196a072b2f6', slot: "menu-trigger", position: "top" }, h("at-button", { key: '86a2e410b444c37abfcd88caeaf7b4fd7ab1a983', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '80031b67595a66fd97135e816043b5a561382c6c' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '97df7463831452b2958c761fcc7bfa132e64b814' }, h("at-menu-item", { key: '759fc5068b460ee93315daca3bc04b97a5b4c8d4', label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') }), h("at-menu-item", { key: 'a3134e2683c9ae9e92b583691d093f06316f1185', label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') }))));
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
