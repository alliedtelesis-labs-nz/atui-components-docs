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
        return (h("at-menu", { key: '6e873ab59cf2f7c95717d744e83676b4803713c0', width: 'auto', align: "end" }, h("at-tooltip", { key: '64a660a2d3fcc6878799041c243c18884d280fc2', slot: "menu-trigger", position: "top" }, h("at-button", { key: '29f4e9f57e92395542e5287cbb0a694e66c644d2', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '33eb172cad9d3fb1ca90c1d0e93538efe939ddbc' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: 'aeff5dac94979ea05430e06433c98a5b5863133f' }, h("at-button", { key: '965b82ffbcd25e64f00db2624521512d0601271d', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("at-button", { key: 'fed3f7d4e78bc73cb922aa683682c7bdd33a4d40', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
