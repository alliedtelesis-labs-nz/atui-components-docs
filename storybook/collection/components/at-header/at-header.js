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
        return (h(Host, { key: 'fbb35c4a2191d2c964ab893c6b9449c9cb4ab5c8', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, h("div", { key: '8976f540bef7fddc1b55f7b242caf0706c8f0c3f', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: '886766de6a34b91f611c4f1f45e7ffd0217d49d3', name: "title-prefix" }), h("div", { key: 'e3b2f9b80cc299381b8be49675a891388403254c', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: '0e1fa899e196ba659c32fe13e0cb6490edfe3809', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: 'a449b46b6f1ae5f4ab3cce48e7715ed1c2d0738b', class: "flex items-center gap-8 truncate", "data-name": "header-title" }, h("slot", { key: '8429f0ca5bc429bf9c55eab82f462a7ac7f52afa', name: "icon" }), this.header_title)), h("slot", { key: '058dc2f6c89c504e6f079e4a41de6ae17f68f7f3', name: "title-suffix" })), h("slot", { key: '8695fe85d7999ed6c36db94b8bbbbafe91fa9c90', name: "custom-title" }), this.subtitle && (h("span", { key: '6925702bc546c35ee63daa4b860e032240c04257', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: '5ae63e5e974950a7b40bee60c55bcc06aebb8b0a', name: "subtitle-content" }))), h("div", { key: '40269bffefa1a9325975e27ba7e07aef8f8a10fc', class: 'flex items-center gap-8' }, h("slot", { key: 'd8a7078eab3f008a461f28223605ac88d5f66dc4', name: 'actions' }))));
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
