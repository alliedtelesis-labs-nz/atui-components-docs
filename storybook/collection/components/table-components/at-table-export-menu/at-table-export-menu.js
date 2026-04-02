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
        return (h("at-menu", { key: 'a4fe3f274fadc4cffddeb873314cc0c1b13856ce', width: 'auto', align: "end" }, h("at-tooltip", { key: 'd6c3c6473f455258f275c3242ff53c7baba65b55', slot: "menu-trigger", position: "top" }, h("at-button", { key: '4ce03be5d5a7284d3482ccbe098d1dd75a7ec403', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '18ef67c15b8e1cbac775375771b3d7d65f5d2c88' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '91a82a7758d1dc439e9f481179190905551dd2ba' }, h("at-button", { key: '5b262b59ba52b49b1f03757b84690cf64a0ce374', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("at-button", { key: '847a6d67f1521b4726ae0d8a6c2c1dad3c22db31', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
