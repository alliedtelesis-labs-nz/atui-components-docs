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
 * @description A list item component for data in key:value format. It takes the `listitem` role only
 * inside a list (`role="list"`, `ul` or `ol`), so wrap a set of rows in `<div role="list">`.
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
     * Applied styling for hover background color and cursor. Makes the item focusable, and Enter or
     * Space activates it as a click does.
     */
    selectable = false;
    el;
    get inList() {
        const parent = this.el.parentElement;
        return (!!parent &&
            (parent.getAttribute('role') === 'list' ||
                parent.tagName === 'UL' ||
                parent.tagName === 'OL'));
    }
    handleKeyDown(event) {
        if (!this.selectable || event.target !== this.el)
            return;
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.el.click();
        }
    }
    showTitleWhenTruncated(event) {
        const span = event.currentTarget;
        span.title =
            span.scrollWidth > span.clientWidth ? (this.item_title ?? '') : '';
    }
    get sizeClasses() {
        return listItemVariants[this.size];
    }
    render() {
        return (h(Host, { key: '39c89a477f1761bb4aff668fb2420019d3ca580e', role: this.inList ? 'listitem' : undefined, tabIndex: this.selectable ? 0 : undefined, onKeyDown: (event) => this.handleKeyDown(event), class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b`, "data-name": "list-item" }, h("div", { key: '29864b62857055a918a3e6a77eeb39c4e3e5ed3a', class: "flex max-w-[60%] min-w-0 shrink-0 flex-col", "data-name": "list-item-details" }, h("div", { key: '25d26af7215caf2812f3daa4aa447771b5708b59', class: "flex min-w-0 items-center justify-start gap-8 whitespace-nowrap" }, h("span", { key: '3b4abf631568edc3ee7ce1657ed896aca76a4551' }, h("slot", { key: 'd90c219f10373aeff6d21bc3c2a6836c04ecdd94', name: "icon" })), this.item_prefix && (h("span", { key: '0bc313a1887409d647973d3712eb90d3de4c155d', class: "text-secondary mr-[4px] font-normal", "data-name": "prefix" }, this.item_prefix)), h("span", { key: '7ef94c1c953c03d28deef81dd8e93cf9538db408', class: `flex min-w-0 flex-grow pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '52e8032c1321a5ab0e6f908df084e99328600241', class: "flex max-w-full min-w-0 shrink-0 flex-row font-normal" }, h("span", { key: '84a787da5313d78927962d19ebde17a941c88aa1', class: "mr-4 truncate", "data-name": "title", onMouseEnter: (event) => this.showTitleWhenTruncated(event) }, this.item_title), h("slot", { key: 'a70ae1e0d68edf4b49c57b328a2bb8b3e13c45d6', name: "title" })), this.subtitle && (h("span", { key: '1a70d65abfb5b17c2721698e2dc4e7192f493aed', class: "text-secondary inline min-w-0 truncate text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: '1419c3501964caee0e2299571fb0c4ce4743b821', class: "flex min-w-0 flex-1 flex-wrap items-end justify-end gap-8 text-right", "data-name": "list-item-content" }, h("slot", { key: '40936c08c7de97e2c5fb9767b781388cc69f3d85' }), this.content && (h("span", { key: 'b914b77d0040552bbd6f426a58aa53e893e92e15', "data-name": "content" }, this.content)))));
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
                    "text": "Applied styling for hover background color and cursor. Makes the item focusable, and Enter or\nSpace activates it as a click does."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "selectable",
                "defaultValue": "false"
            }
        };
    }
    static get elementRef() { return "el"; }
}
