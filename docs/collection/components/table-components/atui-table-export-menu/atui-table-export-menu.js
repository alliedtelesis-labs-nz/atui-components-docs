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
        return (h("atui-menu", { key: '3570eecf25bfb32aebc5f363ce8061aabd0a85b9', width: 'auto', align: "end" }, h("atui-tooltip", { key: 'b80d1f34613f22091620a48160e807a98d6aa938', slot: "menu-trigger", position: "top" }, h("atui-button", { key: '1214629da55ea198dca629c85024b2a2ec27346e', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: 'b48aa5e79f9571eb9a4c0d38566c3190ed2e4af2', slot: "tooltip-content" }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '7feba72303759c4eb6898cd0ca96badd34d896a3', slot: "menu-content" }, h("atui-button", { key: 'ca289f86b8fb593883018922cb9ffd24be681e46', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("atui-button", { key: '7d231ac46882352c2e44960605757c0dd72bb326', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
                    "original": "any",
                    "resolved": "any",
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
