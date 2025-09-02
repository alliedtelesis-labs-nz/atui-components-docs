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
        return (h(Host, { key: '13fe2fca8cc2aa3d041901b8a1baaf2d53e63fd0', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-light border-b' : ''}` }, h("div", { key: '7903ad35ab62be29e419eb4734e58498267a7707', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: '3eb9b7d36b6b94ddd677b91b29e9b085b021b043', name: "title-prefix" }), h("div", { key: '66269d3b57fbf94acf585a57029b6ab24d161add', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: 'bbca7b7bed52d602d9b4e6da40f4bd3659b0d201', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: 'e902687889d77111f217b386c91ee795ab029b1d', class: "flex items-center truncate", "data-name": "header-title" }, this.icon && (h("i", { key: 'e7a9c09adfaf0152d2c7b920434125237b95154d', class: "material-icons mr-8" }, this.icon)), this.header_title)), h("slot", { key: '9af7c6555cf3fd3108eb400e1da9903555e789af', name: "title-suffix" })), h("slot", { key: '52ae1063f8756add84f37394d57a1e5a87716b2e', name: "custom-title" }), this.subtitle && (h("span", { key: '85f463bd97b9af3d73cdc7a7954b5c081a579ece', class: "text-med truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: '544245fd536e3eba6a18c6246adef727d9cbfe0d', name: "subtitle-content" }))), h("div", { key: '4cf17e4104233aa5b55b14afb3ac5ebea560e1ee', class: 'flex items-center gap-8' }, h("slot", { key: 'b6d96801672cebf6cd00c5f09a2475db2142a50d', name: 'actions' }))));
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
