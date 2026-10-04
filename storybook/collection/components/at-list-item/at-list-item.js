import { h, Host } from "@stencil/core";
// Vertical padding only — the container (e.g. `at-card`, which already applies
// 16px of content padding) owns the horizontal inset, so rows sit flush with the
// container's title and other content instead of being double-indented.
const listItemVariants = {
    xs: 'min-h-16 text-sm py-4',
    sm: 'min-h-[32px] text-sm py-4',
    md: 'min-h-[40px] text-body py-4',
    lg: 'min-h-[48px] text-body py-4',
};
/**
 * @category Layout
 * @description A list item component for data in key:value format.
 *
 * @slot icon - Carbon icon placed at the left of the list item
 * @slot title - Placed in the title position
 * @slot - Place custom content or items before the content
 */
export class AtListItem {
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
     * Applied styling for hover background color and cursor.
     */
    selectable = false;
    get sizeClasses() {
        return listItemVariants[this.size];
    }
    render() {
        return (h(Host, { key: 'ab4462eac34b30e6aec071d0abfbb990d6efcb7c', role: "listitem", tabIndex: this.selectable ? 0 : undefined, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b`, "data-name": "list-item" }, h("div", { key: '5beb5ab36fd1321c01ac630cd6f69bf1776711a7', class: "flex flex-grow flex-col", "data-name": "list-item-details" }, h("div", { key: '405f6c0e099f8f19ce6b198220dcd3d2865af928', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, h("span", { key: '310f80cc3a7343c81e0008b36ca84bbd9a82cf5d' }, h("slot", { key: 'f263fad709efb445b0ea06011c5ae103eeeb51d4', name: "icon" })), this.item_prefix && (h("span", { key: '00965c99048c8ea7f98cc351d64d6a67795e8a34', class: "text-secondary mr-[4px] font-normal", "data-name": "prefix" }, this.item_prefix)), h("span", { key: 'e4c40b6526fcd0fd8d0008495aa3fcf992487f30', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: 'b5c3f6420c2aa2625037e362c7efb2b2cdcc03b6', class: "flex flex-row font-normal" }, h("span", { key: '762155586ba006299274371748b78fffbed581be', class: "mr-4", "data-name": "title" }, this.item_title), h("slot", { key: '09ae7b10abfcd576db75209012763ffcdb027c7a', name: "title" })), this.subtitle && (h("span", { key: '31013c4118391287c2cc381b10d2e9a10dbe5c52', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: '3a5c68cf79f3e1e9eefe80a2c574f139df05c076', class: "flex flex-wrap items-end justify-end gap-8 text-right", "data-name": "list-item-content" }, h("slot", { key: '7391a662e5b4d7220194cf0590b6f1379bc4d948' }), this.content && (h("span", { key: '9e5535f68b909f48db6493411d4479ecb6c4bb6a', "data-name": "content" }, this.content)))));
    }
    static get is() { return "at-list-item"; }
    static get properties() {
        return {
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
                    "resolved": "\"lg\" | \"md\" | \"sm\" | \"xs\"",
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
            "selectable": {
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
                    "text": "Applied styling for hover background color and cursor."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "selectable",
                "defaultValue": "false"
            }
        };
    }
}
