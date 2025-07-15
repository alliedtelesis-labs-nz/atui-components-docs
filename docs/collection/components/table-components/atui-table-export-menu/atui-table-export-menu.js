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
        return (h("atui-menu", { key: '759c53fbe29895ebaa4b3f498bd284bc43621442', width: 'auto', align: "end" }, h("atui-tooltip", { key: '474c55b800909d844553f3b1bac2ebe040095e74', slot: "menu-trigger", position: "top" }, h("atui-button", { key: 'b00a2478991c3493e3c34934abf2a45ae21615c8', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '2985c9e0a7921a9cd2c262a32e4a9822936e2c6a', slot: "tooltip-content" }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: 'd90554b4b26ddab18581fd36b81457c5dda64307', slot: "menu-content" }, h("atui-button", { key: '7a177056498a73aa9d4ebdbea82786363c132710', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("atui-button", { key: 'dc1b5e4bdae345fc18cee6d78f97c6974a11eda8', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
