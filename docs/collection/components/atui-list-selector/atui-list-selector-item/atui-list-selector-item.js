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
        return (h(Host, { key: '84f49d8b1691b2f4365dc4962548d2fcf629dedc', role: "menuitem", class: `flex flex-row items-center rounded outline-none outline-0 outline-active-light hover:cursor-pointer hover:bg-surface-1 focus:bg-surface-1 focus:outline-2 ${this.is_selected ? 'bg-surface-1 !text-active-dark' : ''} ${this.has_border ? 'border-b' : ''}` }, h("i", { key: '1d4512d60516ec99333c3d57bb645a4da8dd71c1', class: "material-icons ml-16 mr-8 items-center text-sm text-light", "data-name": "item-icon" }, this.icon), h("div", { key: '7248c96c56491388e3f9b073fadabe8653a1aeb0', class: "flex flex-grow flex-col py-8" }, h("div", { key: '7120bb155588f0c8113159cbfcef86bca7c3990c', class: "flex items-center whitespace-nowrap text-body font-medium" }, this.item_prefix && (h("span", { key: '7f2d8727a4cacf811e791eb8345c4d20afcd0c69', class: "mr-[16px] text-body font-normal text-light", "data-name": "item-prefix" }, this.item_prefix)), h("span", { key: '51fe0c190d7079ba83818f984081034984f24d53', class: `flex flex-grow truncate pr-8 text-body font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '8625f3190a5b332daf61b35e2897880b9e6948b4', class: "flex flex-row" }, this.item_title && (h("span", { key: '996621ede17945d79436821bc4321bc878d76984', "data-name": "item-title" }, `${this.item_title} `)), h("slot", { key: 'ecba135182dec512430edddd0857eb9853fd8d3e', name: "badge" })), this.item_prefix && this.subtitle && (h("span", { key: '245b11e07dff21266392eeabcc328085dbf9b553', class: `text-body font-normal ${this.is_selected ? 'text-active-dark' : 'text-med'}`, "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), h("slot", { key: '964ab3a3b60241c26150323a50e941b6a72e9a4c', name: "info" })), this.subtitle && !this.item_prefix && (h("span", { key: '11399dcb7e072ecdfa93b85d764b0c942e5537af', class: "inline text-sm font-normal text-med", "data-name": "item-subtitle" }, this.subtitle))), h("slot", { key: '70f038dfc774a5111a8718feabd41354ea681554' })));
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
