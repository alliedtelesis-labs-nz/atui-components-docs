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
     * Emits id of the clicked button, either 'CSV' or 'PDF'.
     */
    atChange;
    clickHandler(event) {
        this.atChange.emit(event.target.id);
    }
    render() {
        return (h("at-menu", { key: '5ce7545077a936f45aaa1844df66b0e70ae1c2b4', width: 'auto', align: "end" }, h("at-tooltip", { key: '942826b72bcd69cf39dcd21f14438f9c663b3689', slot: "menu-trigger", position: "top" }, h("at-button", { key: '73f0e9f59dfafcd775162a22b746ca0e8c9f5b64', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '362947112cf1b1b195dc97711caa1abe7e6c3f55' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '6cd1a429d9bc6f1c0b371a208785305b5a04930c' }, h("at-button", { key: '376e3ddc749a332889829597222fa52358ca2f9b', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("at-button", { key: '7e085a3bf3787e2b281871edae4cd1beeab6dd38', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
