import { h, Host, } from "@stencil/core";
import { fetchTranslations, interpolate } from "../../../utils/translation";
const DEFAULT_PAGE_SIZE_OPTIONS = [
    { value: '5' },
    { value: '10' },
    { value: '20' },
    { value: '50' },
    { value: '100' },
];
/**
 * @category Data Tables
 * @description Optional component for use with ```<at-table>```.
 * Provides controls for pagination if you would like to
 * have control of the table's pagination.
 */
export class AtTablePagination {
    /**
     * Current page number
     */
    current_page = 1;
    /**
     * Total number of pages
     */
    num_pages = 1;
    /**
     * Options provided in dropdown for page sizes. When omitted a standard set
     * is used.
     */
    page_size_options;
    /**
     * The number of table rows displayed per page
     */
    page_size = 20;
    el;
    translations;
    langObserver;
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    connectedCallback() {
        this.langObserver = new MutationObserver(async () => {
            this.translations = await fetchTranslations(this.el);
        });
        this.langObserver.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['lang'],
            subtree: true,
        });
    }
    disconnectedCallback() {
        this.langObserver?.disconnect();
        this.langObserver = undefined;
    }
    /**
     * The options actually rendered in the selector: the provided (or default)
     * options, with the active `page_size` guaranteed to be present so the
     * selected value always matches the number of rows loaded — even when it
     * isn't one of the listed steps.
     */
    get resolvedPageSizeOptions() {
        const base = this.page_size_options && this.page_size_options.length > 0
            ? this.page_size_options
            : DEFAULT_PAGE_SIZE_OPTIONS;
        return base.some((option) => Number(option.value) === this.page_size)
            ? base
            : [...base, { value: String(this.page_size) }].sort((a, b) => Number(a.value) - Number(b.value));
    }
    /**
     * Emits event with ```event.detail``` as the new page number
     */
    atChange;
    /**
     * Emits event with ```event.detail``` as the new page size
     */
    atPageSizeChange;
    render() {
        const labels = this.translations.ATUI.TABLE.PAGINATION;
        return (h(Host, { key: '9fe83146b444d336129e5c5256b276ffc28888e3', class: "mt-8 flex items-center justify-end gap-8" }, h("span", { key: '6df92227b98e1a9f970fd061b10d6fb7eb092800', "data-name": "pagination-page-size-label" }, labels.PAGE_SIZE), h("at-select", { key: 'ba1d34e62c9b9b2579351744e6563b40cc5fb371', options: this.resolvedPageSizeOptions, value: String(this.page_size), clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), h("at-button", { key: '35f11ecf628aedd429944ec7f2b342dee2ac4fd8', "data-name": "pagination-first", "aria-label": labels.FIRST_PAGE, disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(1) }, h("at-icon", { key: '6d0420cbcb657b07fa5a56f472d2f7595ca5eebe', slot: "icon", name: "first_page" })), h("at-button", { key: '2110d1f0bdc9ba44b48e445816bf6ec9c00d4c0e', "data-name": "pagination-previous", "aria-label": labels.PREVIOUS_PAGE, disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }, h("at-icon", { key: '090e1d23f3adb3e7f247d58c1dac0aec350a3a1a', slot: "icon", name: "chevron_left" })), h("span", { key: '2478cb7581346929dac43e999390e6b26b434150', "data-name": "pagination-page-status" }, interpolate(labels.PAGE_OF, {
            current: this.current_page,
            total: this.num_pages,
        })), h("at-button", { key: '78fd73c15d9d55d3eaef059243387edcc2a3d6ca', "data-name": "pagination-next", "aria-label": labels.NEXT_PAGE, disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }, h("at-icon", { key: '6842b2864171e5d7364d706309769e98a6b1bc42', slot: "icon", name: "chevron_right" })), h("at-button", { key: '9ea0369b8f49627ddfa8371630ab6226f10b2f32', "data-name": "pagination-last", "aria-label": labels.LAST_PAGE, disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.num_pages) }, h("at-icon", { key: '57316a15a49dc4a4f3767abd622ddf4a2f99030f', slot: "icon", name: "last_page" }))));
    }
    static get is() { return "at-table-pagination"; }
    static get properties() {
        return {
            "current_page": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Current page number"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "current_page",
                "defaultValue": "1"
            },
            "num_pages": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Total number of pages"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "num_pages",
                "defaultValue": "1"
            },
            "page_size_options": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AtISelectOption[]",
                    "resolved": "AtISelectOption[]",
                    "references": {
                        "AtISelectOption": {
                            "location": "import",
                            "path": "../../../types/select",
                            "id": "src/types/select.ts::AtISelectOption",
                            "referenceLocation": "AtISelectOption"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Options provided in dropdown for page sizes. When omitted a standard set\nis used."
                },
                "getter": false,
                "setter": false
            },
            "page_size": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The number of table rows displayed per page"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "page_size",
                "defaultValue": "20"
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
                    "text": "Emits event with ```event.detail``` as the new page number"
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }, {
                "method": "atPageSizeChange",
                "name": "atPageSizeChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits event with ```event.detail``` as the new page size"
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
