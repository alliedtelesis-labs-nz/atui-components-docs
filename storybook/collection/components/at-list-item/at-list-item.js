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
        return (h(Host, { key: 'ff55dd39af53eb9cf043e1206a1fedac92f44106', role: "listitem", tabIndex: this.selectable ? 0 : undefined, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b` }, h("div", { key: 'a49c9b63ea2a753ed90fd70be3905e0918409c57', class: "flex flex-grow flex-col" }, h("div", { key: '84a41e5da39e123f0124ffccaf8837058cb5b4f2', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, h("span", { key: '8ec8d9662cf611a05afdc3cdd24e7f73e98f5b1f', class: "fill-light" }, h("slot", { key: 'ea90e40c6db2b0ba6f60fe7abcccc819ca2318c9', name: "icon" })), this.item_prefix && (h("span", { key: '0789a603c5b815265cb53cb927f0df5745f663c3', class: "text-secondary mr-[4px] font-normal" }, this.item_prefix)), h("span", { key: 'da9ddfc950eb99bfc45196fb7d079439576bd045', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '0e503efa089f8436e2137a733ecc9eb71ecbe873', class: "flex flex-row font-normal" }, h("span", { key: '9bcc7a8aa131ebb826020ad35019726482ed0110', class: "mr-4" }, this.item_title), h("slot", { key: '6aae6633787324b8aaccb83f488917866c1cce3a', name: "title" })), this.subtitle && (h("span", { key: 'e4ce15b80d3ea6832446271dca3495d59de82f6d', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: 'dd362679370c7a4e23687a5685bfade197be4ef1', class: "flex flex-wrap items-end justify-end gap-8 text-right" }, h("slot", { key: '9b4679cc245608734dc347073e70e6f2dd9b9a27' }), this.content && (h("span", { key: '5e70ce8f3fc31dec949644a9d5ef8e6ff63ff221', "data-name": "content" }, this.content)))));
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
