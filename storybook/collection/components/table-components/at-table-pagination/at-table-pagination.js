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
        return (h(Host, { key: 'fc6513e73e7e6c242aebfa6d94a74808df7af5a0', class: "mt-8 flex items-center justify-end gap-8" }, h("span", { key: '5f14f01a5e15d98cddf93135d3796e9416b8a53d', "data-name": "pagination-page-size-label" }, labels.PAGE_SIZE), h("at-select", { key: '10883be86c3a2f8f85f9119eac8113771fb184b3', options: this.resolvedPageSizeOptions, value: String(this.page_size), clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), h("at-button", { key: 'c56d19d14631857d02f6d5e251c973b8027cffbc', "data-name": "pagination-first", "aria-label": labels.FIRST_PAGE, disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(1) }, h("at-icon", { key: '18dcf08f2e972e14ea8c06f2fe45f1a7afac85e8', slot: "icon", name: "first_page" })), h("at-button", { key: 'dc54eaa4a19ad703d3be3678870c6b19adfaac7b', "data-name": "pagination-previous", "aria-label": labels.PREVIOUS_PAGE, disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }, h("at-icon", { key: 'e5af2491efc6cab0d3bcc58054073e47096f8377', slot: "icon", name: "chevron_left" })), h("span", { key: 'f3092408edd67a5358e1504942e0258624e1e06a', "data-name": "pagination-page-status" }, interpolate(labels.PAGE_OF, {
            current: this.current_page,
            total: this.num_pages,
        })), h("at-button", { key: 'ee814e520a2002798e2a8b0ffc3113522d5525b0', "data-name": "pagination-next", "aria-label": labels.NEXT_PAGE, disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }, h("at-icon", { key: '643128fab5483b3ace6b48a2e29887fcdd23be8b', slot: "icon", name: "chevron_right" })), h("at-button", { key: 'c1db4b9384751f8e8c442dc391f791cb64b93235', "data-name": "pagination-last", "aria-label": labels.LAST_PAGE, disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.num_pages) }, h("at-icon", { key: '7cd61fb364ca617c13380fba7a75eb76f2870aae', slot: "icon", name: "last_page" }))));
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
