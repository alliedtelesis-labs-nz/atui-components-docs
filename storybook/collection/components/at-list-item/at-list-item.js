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
        return (h(Host, { key: '784976065843bf437ed1c626e45252f29db22fad', role: "listitem", tabIndex: this.selectable ? 0 : undefined, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b` }, h("div", { key: 'e34504d1feae921fad1ab127bb1da6b7a0bef431', class: "flex flex-grow flex-col" }, h("div", { key: 'a725256fbfaea93915e28a3f96824b93d3e203b1', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, h("span", { key: '33a613d3693964e61a15471cc721aa3fb301779d', class: "fill-light" }, h("slot", { key: 'b14391d81ccb24e33a9ef3be820793f5d375e847', name: "icon" })), this.item_prefix && (h("span", { key: '77a259534a2c09bf87b3e9f123f60378f3a88cd2', class: "text-secondary mr-[4px] font-normal" }, this.item_prefix)), h("span", { key: '23ef3e9e2564b80278ec065cc6e5c5c4722ae114', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '63ece1a5d93123030ceb2f5b69a912ddf0ed7b21', class: "flex flex-row font-normal" }, h("span", { key: 'fc248e2b9d04b149d689745de77ff1a710b94d2e', class: "mr-4" }, this.item_title), h("slot", { key: 'e437daf88e05f4be104c1f2f7b0952cba3fee70b', name: "title" })), this.subtitle && (h("span", { key: '94b89f366c095469784c1fbe868a4ea53baa8e88', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: 'c781c459ef1bede988c28d4523bd347e9a2e3fae', class: "flex flex-wrap items-end justify-end gap-8 text-right" }, h("slot", { key: 'be24f69718ef130da77fad5bb7750d497df46d0c' }), this.content && (h("span", { key: '2bfe05ecfece81702178cf3221567b3aaefb2c6e', "data-name": "content" }, this.content)))));
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
