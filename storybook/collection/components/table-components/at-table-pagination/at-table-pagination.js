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
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
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
        return (h(Host, { key: '99a5d725d740f9c9db34cde60a55e410a7e38a7e', class: "mt-8 flex items-center justify-end gap-8" }, h("span", { key: 'e3044975e4355d20d7819838573ae35583398e80', "data-name": "pagination-page-size-label" }, labels.PAGE_SIZE), h("at-select", { key: '7017f95966e8908b922d27f409b1e83a4d776d00', options: this.resolvedPageSizeOptions, value: String(this.page_size), clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), h("at-button", { key: '8662880b6a5c0d746aa464a56c36c670a5ef140f', "data-name": "pagination-first", "aria-label": labels.FIRST_PAGE, disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(1) }, h("at-icon", { key: '908beb11ddd1a6dcce3457e703030c75f6c02a90', slot: "icon", name: "first_page" })), h("at-button", { key: '7ac2656a77d86b342c774a5b815945df77c6d7c9', "data-name": "pagination-previous", "aria-label": labels.PREVIOUS_PAGE, disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }, h("at-icon", { key: 'df16bee18c1f8c4101838c77bd006a200d246e1b', slot: "icon", name: "chevron_left" })), h("span", { key: '722581a7565f5dbe240090bdf5751141af9eb5eb', "data-name": "pagination-page-status" }, interpolate(labels.PAGE_OF, {
            current: this.current_page,
            total: this.num_pages,
        })), h("at-button", { key: '3ffcdf3fbbaf0dc175daae452872214547b35a5e', "data-name": "pagination-next", "aria-label": labels.NEXT_PAGE, disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }, h("at-icon", { key: '276eb11bf215839395f24d6c26c0a477f43df18a', slot: "icon", name: "chevron_right" })), h("at-button", { key: '8ff653a5bb87634776d0f655f38cf8b80d52efb1', "data-name": "pagination-last", "aria-label": labels.LAST_PAGE, disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.num_pages) }, h("at-icon", { key: 'e9fc5cfef85a3bf12f3890e4fe55d81086ce14fd', slot: "icon", name: "last_page" }))));
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
