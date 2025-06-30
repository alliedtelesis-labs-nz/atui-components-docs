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
        return (h("atui-menu", { key: 'd661b503ad685a628f808747771971acbbf3fc4b', width: 'auto', align: "end" }, h("atui-tooltip", { key: 'eaca7b1f5c3837892d25cb874c6591e5a3d86696', slot: "menu-trigger", position: "top" }, h("atui-button", { key: '39798e36b89800615332b7d4f25b791b51ad5c1b', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: 'b30a788616f8108db4fcad6daa71aca78103c080', slot: "tooltip-content" }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: 'd7ff9c190c6ddf2381469d7a83cdb82b6dd37456', slot: "menu-content" }, h("atui-button", { key: 'c771a7945ce0f8450f811b0f1959b0519077233a', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("atui-button", { key: '51ff3f9dfdd8c35f776534d4500f6bb76ca5cddd', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
