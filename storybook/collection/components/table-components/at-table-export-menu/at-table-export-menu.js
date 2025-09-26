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
        return (h("at-menu", { key: 'b60049a2db3d8b1aa8a22b1e4f09882c3246b7f7', width: 'auto', align: "end" }, h("at-tooltip", { key: '9a64174ce015a55d8e6aa601ca6c80013cda02e6', slot: "menu-trigger", position: "top" }, h("at-button", { key: '9cee75e7fe3a082fddf40cdf26779f30515643ba', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: 'd42179f44186c6d25934ca08e1f0646bf20dba92' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: 'f9ef887b2977d1372fd8aa46a812d98cc5f1adc7' }, h("at-button", { key: '21e970573a25ec9b4c39514ecbae4023a6740308', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("at-button", { key: '89ddba0f7e3ab6dd133e0548d3bb249228287385', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
