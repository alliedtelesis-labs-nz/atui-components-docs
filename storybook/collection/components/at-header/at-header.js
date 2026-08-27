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
        return (h(Host, { key: '91be828429e74c583dcd3f2ae12a867dfbbd9c9c', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, h("div", { key: '087ec8366f26740af70816a1b1850b8121ec121d', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: 'e167ce4ccba3b4e256a221b56b050251600fb749', name: "title-prefix" }), h("div", { key: 'a4860ab9bd80ea35e3a9238029621f5419c76f62', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: '59c6d35af1393c97089f42ab9f1ce0ecec9a554f', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: 'ece69cf743dad7e4c3de451266f82cbf40f4fadf', class: "flex items-center gap-8 truncate", "data-name": "header-title" }, h("slot", { key: 'c97922c8531aeaaeb185603f88209f99edea80b8', name: "icon" }), this.header_title)), h("slot", { key: '3e66cb2c24eadec66aa6851cade67894002c84ca', name: "title-suffix" })), h("slot", { key: 'bba5194f5e39f0ea4468c31118b4346a98f28521', name: "custom-title" }), this.subtitle && (h("span", { key: '1ed498d79bc7d81d817faba230a6c250a2b8db63', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: 'ea6c44bd01b6b2429e90cccc1fcfeec0a091feeb', name: "subtitle-content" }))), h("div", { key: '061d1ca5a7acdd3405415bfd61130b73582f1e65', class: 'flex items-center gap-8' }, h("slot", { key: 'c6c0734e66f73c8d0f0a1f1a6d1051fa06b1b548', name: 'actions' }))));
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
