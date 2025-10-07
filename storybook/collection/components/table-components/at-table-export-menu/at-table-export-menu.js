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
        return (h("at-menu", { key: 'b7ca749f0da767dedd8c40c415ff06345db93ca4', width: 'auto', align: "end" }, h("at-tooltip", { key: '01d43e72f58aab6eec98c33d3714f4cde93a6625', slot: "menu-trigger", position: "top" }, h("at-button", { key: '2376f8accd88d361943b403f7132c15c47f4bfba', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: 'ad1101b918860e6d24853c48e55db89f4caed4ce' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '1bf7b05a2a3438e07d5979d98ba30cc593a6f542' }, h("at-button", { key: '56c37fb1bc0ef2fb14cd2c3216ff1b17df9b328f', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("at-button", { key: '9a6e9f6192819d54b3cb61adc50b950e15e1811c', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
