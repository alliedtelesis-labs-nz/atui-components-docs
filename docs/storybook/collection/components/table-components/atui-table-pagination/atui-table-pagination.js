import { h, Host } from "@stencil/core";
/**
 * @category Data Tables
 * @description Optional component for use with ```<atui-table>```.
 * Provides controls for pagination if you would like to
 * have control of the table's pagination.
 */
export class AtuiTablePagination {
    constructor() {
        /**
         * Current page number
         */
        this.current_page = 1;
        /**
         * Total number of pages
         */
        this.num_pages = 1;
        /**
         * Options provided in dropdown for page sizes.
         */
        this.page_size_options = [
            { value: '5' },
            { value: '10' },
            { value: '20' },
            { value: '50' },
            { value: '100' },
        ];
    }
    render() {
        return (h(Host, { key: '21890ad20be0c622751c5ba2cc8310d4c1c71857', class: "mt-8 flex items-center justify-end gap-8" }, h("span", { key: '5eab6277f2e0804db53a07515c690bd7cbb4bad1' }, "Page Size: "), h("atui-select", { key: '8c787d2269090248081807c7936a15ce4051457e', options: this.page_size_options, value: `${this.page_size_options[0]}`, clearable: false, onAtuiChange: (event) => this.atuiPageSizeChange.emit(parseInt(event.detail)) }), h("atui-button", { key: '50bbdbd4353c0876212aca13b0ddf300668e46cd', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atuiChange.emit(1) }), h("atui-button", { key: '241f9de2d37b281814ac5835ea1dd165b79a5317', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atuiChange.emit(this.current_page - 1) }), h("span", { key: 'adbcf2130c5e3eee8410793f91fa12263fa8f2a5' }, "Page ", this.current_page, " of ", this.num_pages), h("atui-button", { key: 'ef75930b3b01f672cbbdca8f667ad75c747952fc', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atuiChange.emit(this.current_page + 1) }), h("atui-button", { key: 'eef07a797288a86018041ee4bd63675f80d24de3', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atuiChange.emit(this.num_pages) })));
    }
    static get is() { return "atui-table-pagination"; }
    static get properties() {
        return {
            "current_page": {
                "type": "number",
                "attribute": "current_page",
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
                "defaultValue": "1"
            },
            "num_pages": {
                "type": "number",
                "attribute": "num_pages",
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
                "defaultValue": "1"
            },
            "page_size_options": {
                "type": "unknown",
                "attribute": "page_size_options",
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
                "method": "atuiChange",
                "name": "atuiChange",
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
                "method": "atuiPageSizeChange",
                "name": "atuiPageSizeChange",
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
//# sourceMappingURL=atui-table-pagination.js.map
