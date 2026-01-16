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
        return (h("at-menu", { key: 'ab456eaef718474084bce8cc04090093f05169aa', width: "fit-content", align: "end" }, h("at-tooltip", { key: '542c8d1b2d35ed844100f67a718c91552a25ee13', slot: "menu-trigger", position: "top" }, h("at-button", { key: 'c276fb65c6418fe1d3cc212d321b7f502a534564', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '6c8febc1bef3d449992a7f5b9b18e76f8f1a8c6d' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: 'e1c7c5ba6c216c4d7d4550880116c8352de3f082' }, h("at-menu-item", { key: 'ab304e9ab70f97dfc913677b2553a2904962382b', label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') }), h("at-menu-item", { key: '61084621cc09e7aa504d470c5234532925bb3aee', label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') }))));
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
