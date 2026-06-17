import { h, Host } from "@stencil/core";
/**
 * @category Navigation
 * @description A list selector item component for the list selector.
 * @internal
 *
 * @slot icon - Carbon icon placed at the left of the list item
 * @slot badge - Placed after the item-title
 * @slot info - Placed after the subtitle
 * @slot - Placed at the end the of the element
 */
export class AtListSelectorItem {
    /**
     * Id of the list item
     */
    item_id;
    /**
     * Title of the list item.
     */
    item_title;
    /**
     * Optional subtitle of the list item.
     */
    subtitle;
    /**
     * Optional prefix.
     */
    item_prefix;
    /**
     * Border below the list item.
     */
    has_border = false;
    /**
     * Visual indication of the selected item.
     */
    is_selected;
    render() {
        return (h(Host, { key: 'c5392ef43d07ac42bad4a0daeeab0855ebac19da', role: "menuitem", class: `outline-active-light hover:bg-surface-overlay/10 focus:bg-surface-overlay/20 rounded-menu-item flex flex-row items-center outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-active-background !text-active-foreground' : ''} ${this.has_border ? 'border-muted border-b' : ''}` }, h("span", { key: '75252b4ac3120e21888e6b254ba24a8159b634c6', class: "fill-light mr-8 ml-16" }, h("slot", { key: '327aa45e73f146fb541bf49152eef096fbfa050f', name: "icon" })), h("div", { key: '89a240be1d9a171ed2dfe7fb767f55a0c29a5b34', class: "flex flex-grow flex-col py-8" }, h("div", { key: '1f591729b3e940bcc9c8ae36062122c385057141', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (h("span", { key: '80a89dcd48c0c524c5429a467359cbf5e66b7714', class: "text-body text-muted mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), h("span", { key: 'c86b24997b5502a8ca379f201fca35b52f0dd64c', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '084ee46a6a3fa84b70bc1584c19d8e61d3533bb6', class: "flex flex-row" }, this.item_title && (h("span", { key: '66da06e6bdde4227d6eaa1e17dbc21abb8c723b5', "data-name": "item-title" }, `${this.item_title} `)), h("slot", { key: 'a1c4e9352ddc0d8df4270d6bebaa83ea73a40da5', name: "badge" })), this.item_prefix && this.subtitle && (h("span", { key: 'fb47f9df047eae2470ef6c086614598497cc8756', class: "text-body text-secondary font-normal", "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), h("slot", { key: 'f806a8405784c5e1c428130b89480a4bbb327475', name: "info" })), this.subtitle && !this.item_prefix && (h("span", { key: 'ce83f8bacc0038508188d5a48728664d7b41f2b3', class: "text-secondary inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), h("slot", { key: '7865a1fd6b9d30e5e07132f3d0316d6f31c70518' })));
    }
    static get is() { return "at-list-selector-item"; }
    static get properties() {
        return {
            "item_id": {
                "type": "string",
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
                "reflect": false,
                "attribute": "item_id"
            },
            "item_title": {
                "type": "string",
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
                "reflect": false,
                "attribute": "item_title"
            },
            "subtitle": {
                "type": "string",
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
                "reflect": false,
                "attribute": "subtitle"
            },
            "item_prefix": {
                "type": "string",
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
                "reflect": false,
                "attribute": "item_prefix"
            },
            "has_border": {
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
                    "text": "Border below the list item."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "has_border",
                "defaultValue": "false"
            },
            "is_selected": {
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
                    "text": "Visual indication of the selected item."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "is_selected"
            }
        };
    }
}
