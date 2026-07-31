import { h, Host } from "@stencil/core";
/**
 * @category Layout
 * @description A header component for page and section titles with optional subtitle support. Provides consistent typography and spacing for content headers.
 * @slot title-prefix - Placed before the 'header_title'
 * @slot icon - Carbon icon placed before the 'header_title'
 * @slot title-suffix - Placed after the 'header_title'
 * @slot custom-title - Used instead of the 'header_title' prop to place your own title elements
 * @slot subtitle-content - Used to place your own subtitle content
 * @slot actions - Placed at the bottom of the element for additional actions
 */
export class AtHeader {
    /**
     * Size of the header.
     */
    size = 'h1';
    /**
     * Title of the header.
     */
    header_title;
    /**
     * Subtitle of the header.
     */
    subtitle;
    /**
     * Adds a border to the bottom of the header.
     */
    border;
    /**
     * Adds 16 pixels of padding to the header element
     */
    padding = true;
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
        return (h(Host, { key: '7d50bbbee5404a3d785d4cd6f0f4f4bfb26d3098', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, h("div", { key: '3e61987807814a371c50942337d6ff0295d585c5', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: 'ee9b0184f55c20f1b9a31d5f030a99507171c792', name: "title-prefix" }), h("div", { key: '4edbb0935ea14013f2a18badf1af118590f82246', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: '37408b597974d2a49da7f21cc0c942093abcc555', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: 'f1aba040252d85fb095fc89d364138a58d9c80bf', class: "flex items-center gap-8 truncate", "data-name": "header-title" }, h("slot", { key: '2c1516adc83aa2f13211214c7f15a274481f208d', name: "icon" }), this.header_title)), h("slot", { key: '74ba5032e7db65714a33ba57701fbd6b1089fa29', name: "title-suffix" })), h("slot", { key: '17acdf9a237ba9294d7f71ce14591cebe8edc2b3', name: "custom-title" }), this.subtitle && (h("span", { key: '6570d0406584ae8fb5e363781bcf7f999f59432b', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: 'f28aa4232795aa3c3af0ff2c03089000455b6d7d', name: "subtitle-content" }))), h("div", { key: 'c7543b6a5bbff213f2c825b609a2b5b924446608', class: 'flex items-center gap-8' }, h("slot", { key: 'fe94f2cba53465a8e6d6822cb923e72b3b18eb4e', name: 'actions' }))));
    }
    static get is() { return "at-header"; }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AtHeaderSizes",
                    "resolved": "\"h1\" | \"h2\" | \"h3\" | \"h4\" | \"h5\" | \"h6\"",
                    "references": {
                        "AtHeaderSizes": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-header/at-header.tsx",
                            "id": "src/components/at-header/at-header.tsx::AtHeaderSizes"
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
                "attribute": "size",
                "defaultValue": "'h1'"
            },
            "header_title": {
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
                    "text": "Title of the header."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "header_title"
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
                    "text": "Subtitle of the header."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "subtitle"
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
                    "text": "Adds a border to the bottom of the header."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "border"
            },
            "padding": {
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
                    "text": "Adds 16 pixels of padding to the header element"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "padding",
                "defaultValue": "true"
            }
        };
    }
}
