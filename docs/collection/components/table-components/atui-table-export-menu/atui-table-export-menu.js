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
        return (h("atui-menu", { key: 'f48579b701c1f0edbff730af90a0a23ea02ca4de', width: 'auto', align: "end" }, h("atui-tooltip", { key: '5782ab6770f7130d50f68974a129791221edcb61', slot: "menu-trigger", position: "top" }, h("atui-button", { key: 'a78a2ba87f082124aeb0bad8b5988bb44764edfa', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '985170b1d73728c97d38ed1dd403ad8f2fcc3ef3', slot: "tooltip-content" }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '99c4e39c4f9ab6f41f3a3de3a69aaa5777b0c9a3', slot: "menu-content" }, h("atui-button", { key: '0fe522b2ea7768990efa155a4bb56d3d2dbb4a03', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("atui-button", { key: '88b206aa2c838749f548db5c117713a5ce6bf006', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
