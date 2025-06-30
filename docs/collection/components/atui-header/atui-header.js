import { h, Host } from "@stencil/core";
/**
 * @category Layout
 * @description A header component for page and section titles with optional subtitle support. Provides consistent typography and spacing for content headers.
 * @slot title-prefix - Placed before the 'header_title'
 * @slot title-suffix - Placed after the 'header_title'
 * @slot custom-title - Used instead of the 'header_title' prop to place your own title elements
 * @slot subtitle-content - Used to place your own subtitle content
 * @slot actions - Placed at the bottom of the element for additional actions
 */
export class AtuiHeader {
    constructor() {
        /**
         * Size of the header.
         */
        this.size = 'h1';
        /**
         * Adds 16 pixels of padding to the header element
         */
        this.padding = true;
    }
    render() {
        const validHeadings = [
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
        ];
        const HeadingTag = validHeadings.includes(this.size)
            ? this.size
            : 'div';
        return (h(Host, { key: '38b921b99e198e8567a24ede071819f81a675b60', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-b border-light' : ''}` }, h("div", { key: 'fb53ae61877c556dbeeee31fa0ed0889f2658aa1', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: '0845ef30bae885593e32fe7b44c9005d971faddd', name: "title-prefix" }), h("div", { key: 'd9ad687cd0deccfd76980b2c1b4fca6eba1ebc6c', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: '306b03896f2c506291e4df7a365d33ec04d5ae53', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: '626d890138ea57b867015040a7defd5759692bbd', class: "flex items-center truncate", "data-name": "header-title" }, this.icon && (h("i", { key: '0c4ec291c8b37f4b25e5086fe86bbd4d879cc07d', class: "material-icons mr-8" }, this.icon)), this.header_title)), h("slot", { key: '930edd87373c9db67ba8b825a26eddffff6ae4e6', name: "title-suffix" })), h("slot", { key: '3cba6e9620ae267122314667c56745f5cc90cf0a', name: "custom-title" }), this.subtitle && (h("span", { key: 'e6c99c553eafd0c251445ea5591e3b3fa438e856', class: "truncate text-sm font-normal text-med", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: 'f91228926c96726f18206e275cd6c19aee44210c', name: "subtitle-content" }))), h("div", { key: '9c7f34a86b3e7d637297e991961071e477f7d4f2', class: 'flex items-center gap-8' }, h("slot", { key: 'f77b0bbb0930ae39ac1ceb6e82408fab1da4144e', name: 'actions' }))));
    }
    static get is() { return "atui-header"; }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "HeaderSizes",
                    "resolved": "\"h1\" | \"h2\" | \"h3\" | \"h4\" | \"h5\" | \"h6\"",
                    "references": {
                        "HeaderSizes": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/atui-header/atui-header.tsx",
                            "id": "src/components/atui-header/atui-header.tsx::HeaderSizes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size of the header."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'h1'"
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
                    "text": "Icon of header. Must use mat-icon name."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "header_title": {
                "type": "string",
                "attribute": "header_title",
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
                    "text": "Title of the header."
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
                    "text": "Subtitle of the header."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "border": {
                "type": "boolean",
                "attribute": "border",
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
                    "text": "Adds a border to the bottom of the header."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "padding": {
                "type": "boolean",
                "attribute": "padding",
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
                    "text": "Adds 16 pixels of padding to the header element"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
}
//# sourceMappingURL=atui-header.js.map
