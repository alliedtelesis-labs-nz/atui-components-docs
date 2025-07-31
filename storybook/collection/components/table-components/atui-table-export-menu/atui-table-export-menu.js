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
        return (h("atui-menu", { key: 'eb019fa58204238f6f841749b9f7ff3c9752d922', width: 'auto', align: "end" }, h("atui-tooltip", { key: '53d7ded95b74a451fc9e7b20a65c2b90b6ead7f6', slot: "menu-trigger", position: "top" }, h("atui-button", { key: 'b184478053164be85b5d4d73f7ee71380e0a0a8b', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '55711746f7eaf1b437321107d5dc834c046c89d3', slot: "tooltip-content" }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '92e546300bb153789cd0eb3c2ad0070163d4a06b', slot: "menu-content" }, h("atui-button", { key: '268df22be715b76a459db57df510ee096c1cf919', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("atui-button", { key: '6cb9ee6092ecd27df6a5b3268ccffcbb4d50f3b8', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
