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
        return (h("atui-menu", { key: '291aae2fc383f713313f08daf7599117e723e790', width: 'auto', align: "end" }, h("atui-tooltip", { key: '0a6f7801d607330a524ea5cd7739fb90bc743a8c', slot: "menu-trigger", position: "top" }, h("atui-button", { key: 'd26a4d615b35db0891f83b5e1b5334870a7804e0', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: 'a0bfbf8bc1bb8b4bca1254bbadae05ef44a04073', slot: "tooltip-content" }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '77afc4ed027f35ee83cc950831497d1316ed8c7d', slot: "menu-content" }, h("atui-button", { key: '21250255ca5415420a61aa43970b22a4c1242657', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("atui-button", { key: '816b08d86708147ecc1c90c24968ddb390902988', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
