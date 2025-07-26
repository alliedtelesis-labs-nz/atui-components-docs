import { h, } from "@stencil/core";
import { fetchTranslations } from "../../../utils/translation";
/**
 * @category Data Tables
 * @description A menu component for exporting table data in CSV or PDF formats. Provides a user-friendly interface for exporting data from tables.
 */
export class AtuiTableExportMenu {
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    clickHandler(event) {
        this.atuiChange.emit(event.target.id);
    }
    render() {
        return (h("atui-menu", { key: 'ce73f9d409bbab38ffe391467088f907016cbcd5', width: 'auto', align: "end" }, h("atui-tooltip", { key: '64ab1841d484c28483d723c8031f2234c837e016', slot: "menu-trigger", position: "top" }, h("atui-button", { key: '6708b7747c84ac1d4e8d08abe7033ee8b809a6e7', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '381e2a1944325adb8d249fdbcceef36cbdd8caca', slot: "tooltip-content" }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: 'f5e9d74db805c230fe3e2804a11a75ef2959c6c4', slot: "menu-content" }, h("atui-button", { key: '949f8d030bd563a53fb4ff0045011b0ac987ba4e', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("atui-button", { key: '3cde9999b2346d381a7090c7b25d6d808183989a', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
    }
    static get is() { return "atui-table-export-menu"; }
    static get states() {
        return {
            "translations": {}
        };
    }
    static get events() {
        return [{
                "method": "atuiChange",
                "name": "atuiChange",
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
//# sourceMappingURL=atui-table-export-menu.js.map
