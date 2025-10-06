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
        return (h("at-menu", { key: '708c9a46c3474e8459331170cf2a82ebaf2427ff', width: 'auto', align: "end" }, h("at-tooltip", { key: '57b1937be65c34d6337b0922c6b3470a2e1cdd55', slot: "menu-trigger", position: "top" }, h("at-button", { key: '18d2bd50d4cede62555aa02b7f969e00b8ae7616', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '4efe2ff549e3a009c159a97230b6fc11e221437f' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '7264ec0c8aa98d10347e8892e3d5cf410c4c9c5d' }, h("at-button", { key: '76714a9779abd29df0a027fc4a872f4c4768fde5', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("at-button", { key: '9d1c9d20a5d12453d110ca747760c29938558278', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
