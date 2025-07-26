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
        return (h(Host, { key: '6685d8a804a5a686afd4c3f9030407b358d39123', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-b border-light' : ''}` }, h("div", { key: '792da2681a30e28f39833031a1c976718301a882', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: '5537d96b8379e246a303c3c4a6e6ff130f591937', name: "title-prefix" }), h("div", { key: '16f4d001727da3776b698d884e2c9bc6df8cbeda', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: '7dd16a408fced9d7760ba83e33b49e4542e38ba3', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: 'b6b50c1278073a7b6f2465a09d1a7b324bf5e65d', class: "flex items-center truncate", "data-name": "header-title" }, this.icon && (h("i", { key: '2b8403c0416c3342587fa6a8afa1ab387d132140', class: "material-icons mr-8" }, this.icon)), this.header_title)), h("slot", { key: '4cdbb1de0c247c8086f5c4f40faba724e5028c84', name: "title-suffix" })), h("slot", { key: 'e4ecfe168e5546bf423d0aeb881cb8e29497b2be', name: "custom-title" }), this.subtitle && (h("span", { key: 'a87fed2790c2edde75575d6ac653c9036dbe76e2', class: "truncate text-sm font-normal text-med", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: '367f663aaca7ffd8b55dde10fe57420e00e9f750', name: "subtitle-content" }))), h("div", { key: '0a114e110daf073278694ad792d6f90c83ab43ab', class: 'flex items-center gap-8' }, h("slot", { key: 'f945a618e1951ac00fb425c1c5b0b10c987f0c9f', name: 'actions' }))));
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
