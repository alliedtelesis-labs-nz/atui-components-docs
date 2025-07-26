import { h, Host } from "@stencil/core";
/**
 * @category Navigation
 * @description A list selector item component for the list selector.
 * @internal
 *
 * @slot badge - Placed after the item-title
 * @slot info - Placed after the subtitle
 * @slot - Placed at the end the of the element
 */
export class AtuiListSelectorItem {
    constructor() {
        /**
         * Border below the list item.
         */
        this.has_border = false;
    }
    render() {
        return (h(Host, { key: 'd44d0ee1bca49711ba40d4108ab3f7de812ae8b2', role: "menuitem", class: `flex flex-row items-center rounded outline-none outline-0 outline-active-light hover:cursor-pointer hover:bg-surface-1 focus:bg-surface-1 focus:outline-2 ${this.is_selected ? 'bg-surface-1 !text-active-dark' : ''} ${this.has_border ? 'border-b' : ''}` }, h("i", { key: '12353a2ef62c1500fec28a86d38246e7f3773e4a', class: "material-icons ml-16 mr-8 items-center text-sm text-light", "data-name": "item-icon" }, this.icon), h("div", { key: 'c2f7fbb3b21d978b9156365d0ef9ed3c11f81307', class: "flex flex-grow flex-col py-8" }, h("div", { key: '927a1beef6d12847890c303d14c14aa6a8c33bbd', class: "flex items-center whitespace-nowrap text-body font-medium" }, this.item_prefix && (h("span", { key: '9044cb4d6187ceab49977b25431871da490c455e', class: "mr-[16px] text-body font-normal text-light", "data-name": "item-prefix" }, this.item_prefix)), h("span", { key: 'f5b5a31cb2a69b00fb931f57efce3caab90ad414', class: `flex flex-grow truncate pr-8 text-body font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: 'fc8840b837ba989c0022dd9dfa588305aedd4fe4', class: "flex flex-row" }, this.item_title && (h("span", { key: '9c67deb6e070041024d997f56a7574afa1f559e7', "data-name": "item-title" }, `${this.item_title} `)), h("slot", { key: 'ec4b524022921f0cdefe835f34b765e1c35a8125', name: "badge" })), this.item_prefix && this.subtitle && (h("span", { key: '677e6b4682f6d6bc54c5769dc1337d597811abc8', class: `text-body font-normal ${this.is_selected ? 'text-active-dark' : 'text-med'}`, "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), h("slot", { key: '461a8d2fa75b7e8f9e31ae744e06bff2322886dc', name: "info" })), this.subtitle && !this.item_prefix && (h("span", { key: 'fe8ae764b10e0bacc6116fec69fe3e9932faf0d0', class: "inline text-sm font-normal text-med", "data-name": "item-subtitle" }, this.subtitle))), h("slot", { key: '24dcd9621f7b00a5cbd76bdb1ccd1377c7cc4ec9' })));
    }
    static get is() { return "atui-list-selector-item"; }
    static get properties() {
        return {
            "item_id": {
                "type": "string",
                "attribute": "item_id",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Id of the list item"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "item_title": {
                "type": "string",
                "attribute": "item_title",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Title of the list item."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "subtitle": {
                "type": "string",
                "attribute": "subtitle",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Optional subtitle of the list item."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "icon": {
                "type": "string",
                "attribute": "icon",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Optional icon shown to the left of the list item - use mat-icon name."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "item_prefix": {
                "type": "string",
                "attribute": "item_prefix",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Optional prefix."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "has_border": {
                "type": "boolean",
                "attribute": "has_border",
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
                    "text": "Border below the list item."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "is_selected": {
                "type": "boolean",
                "attribute": "is_selected",
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
                    "text": "Visual indication of the selected item."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=atui-list-selector-item.js.map
