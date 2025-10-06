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
export class AtHeader {
    /**
     * Size of the header.
     */
    size = 'h1';
    /**
     * Icon of header. Must use mat-icon name.
     */
    icon;
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
        return (h(Host, { key: 'e9882a94cf62dd290d96aa9dd3fd3b04fc18fdd1', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-light border-b' : ''}` }, h("div", { key: '706a93dfec18d162fa744544e25dd4d90fb7691f', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: '5acab88e0dcd408ec1bd2fd7e0631c050cd2cddc', name: "title-prefix" }), h("div", { key: '3ca0f9433c9855b88bfd3bf623e042b1abbd31c6', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: '0613ba574ed9801ffa22e4cbcdc45f6bf3f12917', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: '4a6d4a638769f55229376847a4a0f7ebb2d533db', class: "flex items-center truncate", "data-name": "header-title" }, this.icon && (h("i", { key: 'edc8307bd1f50e4e2397c527d92ef629cb08c709', class: "material-icons mr-8" }, this.icon)), this.header_title)), h("slot", { key: '9dda39ed10d8e6e410380d023db6073433c07249', name: "title-suffix" })), h("slot", { key: '8b04a36dc01a5ecc80e0a03acf8cc7aede31b1e1', name: "custom-title" }), this.subtitle && (h("span", { key: '09504279946a6151c0157ef1f51fa854b94036b7', class: "text-med truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: '5c89b1e0a2dff109b651f6dbbeaf3c01ff9dc069', name: "subtitle-content" }))), h("div", { key: 'bd53b4f71436d564c6e2cafd8567d6d25b60a8dd', class: 'flex items-center gap-8' }, h("slot", { key: '26ce811b4517ff38de30b26d650ad2c8df1faa07', name: 'actions' }))));
    }
    static get is() { return "at-header"; }
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
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-header/at-header.tsx",
                            "id": "src/components/at-header/at-header.tsx::HeaderSizes"
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
//# sourceMappingURL=at-header.js.map
