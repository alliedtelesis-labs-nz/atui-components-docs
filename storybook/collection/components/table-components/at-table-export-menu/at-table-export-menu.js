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
        return (h("at-menu", { key: 'a41b85dd4f6eb8ef8bebf166f143a70aa842ce51', width: '200px', align: "end" }, h("at-tooltip", { key: '192f633f5b0a60418b242f3229317959591d842f', slot: "menu-trigger", position: "top" }, h("at-button", { key: '83ff5e02abb4508cb13bb9ba1870b537d71bdc81', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '7ebf0723c588312269eab8f14719324ca4edcee1' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: 'bd1f95a828cc454d12695e30ff61139704ced1da' }, h("at-button", { key: 'a23082ee616cc1771831bec0507404bc7a6eecef', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("at-button", { key: '8066809ff9cabb481c521503cf01df6a38c6ad88', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
