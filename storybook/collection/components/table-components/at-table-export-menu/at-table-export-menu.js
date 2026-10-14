import { h, } from "@stencil/core";
import { fetchTranslations } from "../../../utils/translation";
/**
 * @category Data Tables
 * @description Exports table data as CSV or PDF. With both formats offered it opens a menu; with one, its button exports that format directly.
 */
export class AtTableExportMenu {
    /**
     * Offers the CSV export option in the export menu. On by default.
     */
    show_csv = true;
    /**
     * Offers the PDF export option in the export menu. On by default.
     * @deprecated PDF export is being removed. Set it to false and offer CSV export.
     */
    show_pdf = true;
    el;
    translations;
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    /**
     * Emits the chosen format, either 'CSV' or 'PDF'.
     */
    atChange;
    renderTrigger(tooltip, slot, onClick) {
        return (h("at-tooltip", { slot: slot, position: "top" }, h("at-button", { slot: "tooltip-trigger", type: "secondaryText", "data-name": "export-trigger", onAtuiClick: onClick }, h("at-icon", { slot: "icon", name: "download" })), h("span", null, tooltip)));
    }
    render() {
        if (!this.show_csv && !this.show_pdf) {
            return null;
        }
        const labels = this.translations.ATUI.TABLE;
        if (this.show_csv !== this.show_pdf) {
            const format = this.show_csv ? 'CSV' : 'PDF';
            return this.renderTrigger(this.show_csv ? labels.EXPORT_AS_CSV : labels.EXPORT_AS_PDF, undefined, () => this.atChange.emit(format));
        }
        return (h("at-menu", { width: "fit-content", position: "left", align: "end" }, this.renderTrigger(labels.EXPORT_TO_FILE, 'menu-trigger'), h("div", null, h("at-menu-item", { label: labels.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') }), h("at-menu-item", { label: labels.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') }))));
    }
    static get is() { return "at-table-export-menu"; }
    static get properties() {
        return {
            "show_csv": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Offers the CSV export option in the export menu. On by default."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show_csv",
                "defaultValue": "true"
            },
            "show_pdf": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [{
                            "name": "deprecated",
                            "text": "PDF export is being removed. Set it to false and offer CSV export."
                        }],
                    "text": "Offers the PDF export option in the export menu. On by default."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show_pdf",
                "defaultValue": "true"
            }
        };
    }
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
                    "text": "Emits the chosen format, either 'CSV' or 'PDF'."
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
