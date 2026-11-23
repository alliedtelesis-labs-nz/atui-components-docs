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
        return (h(Host, { key: '6087ff784ac8f34ed36666eba5d84a95b41de6e4', role: "menuitem", class: `outline-active-light hover:bg-surface-overlay/10 focus:bg-surface-overlay/20 rounded-menu-item flex flex-row items-center outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-active-background !text-active-foreground' : ''} ${this.has_border ? 'border-muted border-b' : ''}` }, h("span", { key: 'f4b8afd1c770a78beb7b38876f9082e5739abba4', class: "mr-8 ml-16" }, h("slot", { key: 'fa6234b419fe94252a5fa1905b701f00ec448cf6', name: "icon" })), h("div", { key: 'f186a052483b0f77b66c0f9d386e084840058fa3', class: "flex min-w-0 flex-grow flex-col py-8" }, h("div", { key: '5b7deecd62199941053674764acf7aa681e93552', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (h("span", { key: '83662544908ac0dbf28cef8e115725b1db53f1e2', class: "text-body text-muted mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), h("span", { key: '8c88e20a99da03d106aef5af2d11724beab0ddb4', class: `text-body flex min-w-0 flex-grow overflow-hidden pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '1067aba93bb68221190f70e93b74e50074080f7c', class: "flex min-w-0 flex-row" }, this.item_title && (h("span", { key: 'ce45e449ab8dcff94fa4dd3fa6cb53b20a74d946', "data-name": "item-title", class: "line-clamp-2 min-w-0 flex-1 break-words whitespace-normal" }, `${this.item_title} `)), h("slot", { key: 'c7a58b3c10309d5c5cef0467227c000263c02f5e', name: "badge" })), this.item_prefix && this.subtitle && (h("span", { key: '0d1fbf27bf1d1fdf15a258e33e2a2bedb947367a', class: "text-body text-secondary overflow-hidden font-normal", "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), h("slot", { key: '68d54f8df87e3bb5b2491fb7f284803a0a6f06c7', name: "info" })), this.subtitle && !this.item_prefix && (h("span", { key: '051a5fd62812779ed57b4a036465bf904b6fd1ac', class: "text-secondary inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), h("slot", { key: '6340513d1d22efeaaf75c52a0dca513881f3a708' })));
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
