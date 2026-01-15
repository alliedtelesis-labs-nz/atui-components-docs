import { h, Host } from "@stencil/core";
const listItemVariants = {
    sm: 'py-4 text-sm',
    md: 'py-8 text-body',
    lg: 'py-[12px] text-body',
};
/**
 * @category Layout
 * @description A list item component for data in key:value format.
 *
 * @slot title - Placed in the title position
 * @slot - PLace custom content or items before the content
 */
export class AtListItem {
    /**
     * Optional icon shown to the left of the list item - use mat-icon name.
     */
    icon;
    /**
     * Optional prefix.
     */
    item_prefix;
    /**
     * Title of the list item.
     */
    item_title;
    /**
     * Optional subtitle of the list item.
     */
    subtitle;
    /**
     * Content of the list item placed at the right of the item.
     */
    content;
    /**
     * Size of the list item.
     */
    size = 'sm';
    /**
     * Border below the list item.
     */
    border = true;
    get sizeClasses() {
        return listItemVariants[this.size];
    }
    render() {
        return (h(Host, { key: 'ddefc57042851ffd6592f7e7470862169558bebf', role: "listitem", tabIndex: 0, class: `flex items-center gap-3 px-4 ${this.sizeClasses} ${this.border ? 'border-border border-b border-solid' : ''}` }, h("div", { key: 'a2ba3758b3fd12a0ef504a4649b97efec69eb1b7', class: "flex flex-grow flex-col" }, h("div", { key: '9f67502e84f396d811dd62900c200d742264650d', class: `flex items-center justify-start gap-8 whitespace-nowrap` }, this.icon && (h("span", { key: '10130f3945015bcec8b3ac46a5d572daec26b0ba', class: "material-icons text-light items-center text-sm" }, this.icon)), this.item_prefix && (h("span", { key: '4599c30687b29cfaeee343409ddb940e13896feb', class: "text-med mr-[4px] font-normal" }, this.item_prefix)), h("span", { key: 'edcf69be2cb32cdbd802db238a6e8f7b68acb6a3', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: 'c2c3f766d9408838043eb4cbb6136d929ae3bd32', class: "flex flex-row font-normal" }, h("span", { key: 'bfebf4c664a6090183466ff570d2702c2015f3ea', class: "mr-4" }, this.item_title), h("slot", { key: '9909c964442a9efa3610b7216f7ccc3d600d1744', name: "title" })), this.subtitle && (h("span", { key: 'e032ad975c6b78ede9acb603a908b42f053c7e32', class: "text-med inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: 'c53235dc05e082df7ae1ee2a7572e3742a776788', class: "flex flex-wrap items-end justify-end gap-8" }, h("slot", { key: '4ecc13cb83b27a9c914cd295b726317828c6dc0e' }), this.content && (h("span", { key: 'fd3a82d0fffd1cec1a77e42074b828fc91037654', "data-name": "content" }, this.content)))));
    }
    static get is() { return "at-list-item"; }
    static get properties() {
        return {
            "icon": {
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
                    "text": "Optional icon shown to the left of the list item - use mat-icon name."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon"
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
            "content": {
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
                    "text": "Content of the list item placed at the right of the item."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "content"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Size",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "Size": {
                            "location": "global",
                            "id": "global::Size"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Size of the list item."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'sm'"
            },
            "border": {
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
                "attribute": "border",
                "defaultValue": "true"
            }
        };
    }
}
