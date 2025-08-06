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
        return (h(Host, { key: '66d4c594df46a92a4763e01515abc285f9e06847', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-b border-light' : ''}` }, h("div", { key: '81567bafca51b0a875f1bc41a0fd9f74f47fa181', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: '40c0d60205a3912d7fcb4b3705d26d5dc9ca6b5a', name: "title-prefix" }), h("div", { key: '10490e469440b32f0e69ec8298bead979f298e63', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: '926df9c2f08c4e10d13baf8223b4a9438c6aa943', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: 'c3ded168c2027ce19d507af535452bea976de29d', class: "flex items-center truncate", "data-name": "header-title" }, this.icon && (h("i", { key: '7c1d75157a5271dbbbb7918bd508f66168805868', class: "material-icons mr-8" }, this.icon)), this.header_title)), h("slot", { key: 'd2530362ccf137b4cb4dceb5e3339a3585348350', name: "title-suffix" })), h("slot", { key: '2c0d10f1005b4a833ab562cef3feab829d9b2062', name: "custom-title" }), this.subtitle && (h("span", { key: 'e8ee9235dcb49825114b9244d5d50eccd573482c', class: "truncate text-sm font-normal text-med", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: '746d4e3287c9ad3bf9f7d25ee4e9c546f3968de8', name: "subtitle-content" }))), h("div", { key: '0982414fb50e912f23695d0e6d4d5436446e13fe', class: 'flex items-center gap-8' }, h("slot", { key: '13bfe0e8bea56a220eb7cd027c54b6a6acd7284d', name: 'actions' }))));
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
