import { h, } from "@stencil/core";
import { fetchTranslations } from "../../../utils/translation";
/**
 * @category Data Tables
 * @description A menu component for exporting table data in CSV or PDF formats. Provides a user-friendly interface for exporting data from tables.
 */
export class AtTableExportMenu {
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    clickHandler(event) {
        this.atChange.emit(event.target.id);
    }
    render() {
        return (h("at-menu", { key: 'f8c06150b731d42b23cb32dd52172c0142bdb0b3', width: 'auto', align: "end" }, h("at-tooltip", { key: '601aef369ae3eef9740fc8a235bf1fac1bc3efee', slot: "menu-trigger", position: "top" }, h("at-button", { key: 'ddfedd17a136f218cc498c43609c3c17a962a508', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: 'c7e31df6b47b070a515aa125985f9bf9f35ec9b9' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '0c506d591d53198b9f9bf7d557c32c4cfbd54c68' }, h("at-button", { key: '7f336b3b5bace246b9a288edf4e1ce7fc5ecbd05', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("at-button", { key: 'f52ad211a9eaa8f1046d6637397fb173a6d87bb9', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
                    "text": "Emits id of the clicked button, either 'CSV' or 'PDF'."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "atuiClick",
                "method": "clickHandler",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=at-table-export-menu.js.map
