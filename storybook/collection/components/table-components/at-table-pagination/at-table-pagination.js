import { h, Host } from "@stencil/core";
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
     * Options provided in dropdown for page sizes.
     */
    page_size_options = [
        { value: '5' },
        { value: '10' },
        { value: '20' },
        { value: '50' },
        { value: '100' },
    ];
    /**
     * The number of table rows displayed per page
     */
    page_size = 10;
    /**
     * Emits event with ```event.detail``` as the new page number
     */
    atChange;
    /**
     * Emits event with ```event.detail``` as the new page size
     */
    atPageSizeChange;
    render() {
        return (h(Host, { key: '80c45c3b9ff0543512223bb273419a86235d94e0', class: "mt-8 flex items-center justify-end gap-8" }, h("span", { key: 'b4dc358e91ce088db0c3b9e8b1904db441d224a2' }, "Page Size: "), h("at-select", { key: '8475f722ea5069fa3dd588211c47ecda2922f45b', options: this.page_size_options, value: String(this.page_size), clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), h("at-button", { key: '677bc485780210cdf3abe730dfeedfb747cc312a', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atChange.emit(1) }), h("at-button", { key: '783c94d6f313b09b3543e4a0d6c14870cf857a54', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }), h("span", { key: 'af8c2df635b4c59041b306d8544b57063bdbee15' }, "Page ", this.current_page, " of ", this.num_pages), h("at-button", { key: '9c9e80ca79250b10c448872109992d2e79c9ba61', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }), h("at-button", { key: '0eeff0c7a61d908c691637598d8e87908c062008', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atChange.emit(this.num_pages) })));
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Options provided in dropdown for page sizes."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[\n        { value: '5' },\n        { value: '10' },\n        { value: '20' },\n        { value: '50' },\n        { value: '100' },\n    ]"
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
                "defaultValue": "10"
            }
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
}
