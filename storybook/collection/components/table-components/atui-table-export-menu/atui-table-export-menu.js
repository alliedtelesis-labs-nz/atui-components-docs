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
        return (h("atui-menu", { key: '291aae2fc383f713313f08daf7599117e723e790', width: 'auto', align: "end" }, h("atui-tooltip", { key: '0a6f7801d607330a524ea5cd7739fb90bc743a8c', slot: "menu-trigger", position: "top" }, h("atui-button", { key: 'd26a4d615b35db0891f83b5e1b5334870a7804e0', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: 'c42b0e056fc0a294858f7bbd946cef4ed817b22f' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '75bcf0818047bea9b154b1ca8736a7abc3a4fea2' }, h("atui-button", { key: '1440c97af8e474749968c12ec958f1fdf13f0c74', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("atui-button", { key: '508f106c47ed156728a875e5f2e58f72400c34fe', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
