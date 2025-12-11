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
     * Emits id of the clicked menu item, either 'CSV' or 'PDF'.
     */
    atChange;
    render() {
        return (h("at-menu", { key: 'ba1e9cd425fb6ea88ec41af83868cea7b50812e3', width: "fit-content", align: "end" }, h("at-tooltip", { key: 'f86876852f6f1adbf97e97c073b927569d4e90ec', slot: "menu-trigger", position: "top" }, h("at-button", { key: 'cfcacf884037fcc2d068da9bd91fad6db095e72f', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '07da416d05fb44105b478b5c6284b8d9bef65078' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '10c3182411a53c4da069c10e93b516f801673ce2' }, h("at-menu-item", { key: 'eed5e80065df3f9eac582a8ad229c0b36a7cd5ab', label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') }), h("at-menu-item", { key: 'aa0fd42a87d38a5c95eb16f52dc6d0307dbda8b1', label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') }))));
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
                    "text": "Emits id of the clicked menu item, either 'CSV' or 'PDF'."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=at-table-export-menu.js.map
