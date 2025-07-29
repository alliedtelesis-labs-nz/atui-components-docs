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
        return (h("atui-menu", { key: 'e2b74f5723726012ed929c068c58da2e34719f2a', width: 'auto', align: "end" }, h("atui-tooltip", { key: 'da2ce5940c24fec0dc5c99772277a35e90c80d8f', slot: "menu-trigger", position: "top" }, h("atui-button", { key: '91e8ed1a6ab29e8e5b1645a9ff652b236a455815', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: 'd587c3ce40750d4b5ed6ccc2a6a7d0e2fc59c124', slot: "tooltip-content" }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '81ec14e73ce5ca7b1793ab17d94f12a04d724552', slot: "menu-content" }, h("atui-button", { key: 'a6565c3dbf5c5bc770b9c4767991d2ffa102ef50', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("atui-button", { key: '166c40156c567efe4dcbe88aef6d2b5d8efc88d3', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
