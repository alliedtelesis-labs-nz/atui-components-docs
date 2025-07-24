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
        return (h("atui-menu", { key: 'bb147da252a9621d4e9ada81f676da3eae119b1d', width: 'auto', align: "end" }, h("atui-tooltip", { key: '15ea60fc5c3fd4a1482deecc67188350efb9e77e', slot: "menu-trigger", position: "top" }, h("atui-button", { key: '187f59d7eb5ceee45f837314dd3ff2f035c05bca', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '8348d4315c36b63c112a9a6e728dc6c651783812', slot: "tooltip-content" }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '7a396f66cf39794ba67f4e9925a55473ac5b950a', slot: "menu-content" }, h("atui-button", { key: 'a6c86a2a19124cd0f29fe8e614d6cc32bfd5f918', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("atui-button", { key: 'e7082243faaec3a1ca63a3a7671a9c900abfc395', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
