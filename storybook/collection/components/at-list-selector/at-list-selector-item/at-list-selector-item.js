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
        return (h(Host, { key: 'ae9201a28312b46558076190f0197adeceeace7c', role: "menuitem", class: `outline-active-light hover:bg-surface-overlay/10 focus:bg-surface-overlay/20 rounded-menu-item flex flex-row items-center outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-active-background !text-active-foreground' : ''} ${this.has_border ? 'border-muted border-b' : ''}` }, h("span", { key: '9304669a8d179bfeb109383c5c4225dacf16de7b', class: "fill-foreground mr-8 ml-16" }, h("slot", { key: '22e3dc40bd2f157c14e6eeddba4272766482f12a', name: "icon" })), h("div", { key: 'e4343c0069830a4e7ee958247d47ccce40c02bbd', class: "flex min-w-0 flex-grow flex-col py-8" }, h("div", { key: '6d68b8ec80747a8b835132b6410a28e360e97fe6', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (h("span", { key: '26f7b2fa869fc5f74b73e0cffd1277400f11009a', class: "text-body text-muted mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), h("span", { key: '91912bb1d1b377e66c1c5abbf042860d97f44a4d', class: `text-body flex min-w-0 flex-grow overflow-hidden pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: 'd0c70a0d6294afb470d6bdb9684fd396ac43861a', class: "flex min-w-0 flex-row" }, this.item_title && (h("span", { key: '6e070ba00fff5127765e739dfe59982e95c2976f', "data-name": "item-title", class: "line-clamp-2 min-w-0 flex-1 break-words whitespace-normal" }, `${this.item_title} `)), h("slot", { key: '11ab6ff936b86237c744c1f8d5125ecadf13f725', name: "badge" })), this.item_prefix && this.subtitle && (h("span", { key: 'f7b2f1139f027720a2acec95cb5d3a89c60046ee', class: "text-body text-secondary overflow-hidden font-normal", "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), h("slot", { key: '535f908bfae82c3b88d23809cb838bdd20acce7c', name: "info" })), this.subtitle && !this.item_prefix && (h("span", { key: 'df3cf27a5d5b80fd0effa1d1eafec0d458933864', class: "text-secondary inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), h("slot", { key: 'e14e8028117215bdd468d10d07a8e84417db3736' })));
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
