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
        return (h(Host, { key: 'e0919b03b610cf568378bf34bbcc23a07c06dd19', role: "menuitem", class: `outline-active-light hover:bg-surface-overlay/10 focus:bg-surface-overlay/20 rounded-menu-item flex flex-row items-center outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-active-background !text-active-foreground' : ''} ${this.has_border ? 'border-muted border-b' : ''}` }, h("span", { key: '54b78a6fcd6b6705332d73525d6e4d87a3adc078', class: "fill-light mr-8 ml-16" }, h("slot", { key: 'dcfeeb9636074095674fe919b0dfec0f0d4fa5d8', name: "icon" })), h("div", { key: '90a606ec3f778161e54e16ec097fd2307c1f05b0', class: "flex flex-grow flex-col py-8" }, h("div", { key: '1f14c894b91bae51818e1dc2388b3c0b03ae5dda', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (h("span", { key: '083e3cdb9a53a43139bd931a7c12566cdb07d0f1', class: "text-body text-muted mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), h("span", { key: '984d15c88d49e0b907d1a6543daed0526ef9e2b3', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: 'ac01882b88a5218f5d94fe5f566cd184a28165a7', class: "flex flex-row" }, this.item_title && (h("span", { key: '2e80e253af9495d26d661afa4616162ff056dd91', "data-name": "item-title" }, `${this.item_title} `)), h("slot", { key: 'fbbde9bb6234e2882b93767cd177856743950006', name: "badge" })), this.item_prefix && this.subtitle && (h("span", { key: '43ac654965c9d4be25f849e9f352a6070735868c', class: "text-body text-secondary font-normal", "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), h("slot", { key: '55aa4ede1e90429154d34da5df178a67a60f90c4', name: "info" })), this.subtitle && !this.item_prefix && (h("span", { key: '6a2459c494be20b99a9ecddeba543871cf60e83f', class: "text-secondary inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), h("slot", { key: '63c9509475d2324fcbe3f9cfc3db5e4f6fa02f78' })));
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
