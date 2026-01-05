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
     * Emits event with ```event.detail``` as the new page number
     */
    atChange;
    /**
     * Emits event with ```event.detail``` as the new page size
     */
    atPageSizeChange;
    render() {
        return (h(Host, { key: '64977a0d6a1471eab6f017a7a9d0b2affbb207f4', class: "mt-8 flex items-center justify-end gap-8" }, h("span", { key: '8b692a35663b533a76b2d237efaae495951bdf9d' }, "Page Size: "), h("at-select", { key: 'fba4d88bbe2fbe5c8414ecf19386b8b431174203', options: this.page_size_options, value: `${this.page_size_options[0].value}`, clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), h("at-button", { key: 'c90daa21be8d79b86634490959f55bd9930d7696', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atChange.emit(1) }), h("at-button", { key: 'fe2406d66a191deb4904fbcd0105ca4160e08f72', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }), h("span", { key: '4dc8b12e63113b9b0d6ba17371b2a41d08161f14' }, "Page ", this.current_page, " of ", this.num_pages), h("at-button", { key: '0c14dd3ec47f3d54b22656b109b5b2799ba309d1', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }), h("at-button", { key: 'cd14675a7a307a8be17bc490952ae147be6afd92', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atChange.emit(this.num_pages) })));
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
                    "original": "SelectOption[]",
                    "resolved": "SelectOption[]",
                    "references": {
                        "SelectOption": {
                            "location": "import",
                            "path": "../../../types/select",
                            "id": "src/types/select.ts::SelectOption"
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
//# sourceMappingURL=at-table-pagination.js.map
