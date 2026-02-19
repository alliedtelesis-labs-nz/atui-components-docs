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
        return (h(Host, { key: '8c51f3af97accfe002f8047358086b039a679d8e', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-light border-b' : ''}` }, h("div", { key: '3c56d4ed2270175120c8eeec71f8166633d8853c', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: 'ae68bf6e5ca7fe9661a1962f1416f223209962bf', name: "title-prefix" }), h("div", { key: 'e08970404e82c3440db451617566902f0b2b4e1f', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: 'f96d56fc41a99b36dc3fe74e0259c01650c90f8d', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: 'b44dd1d2845ab7de22df82761f9aa5a9bc3cd560', class: "flex items-center truncate", "data-name": "header-title" }, this.icon && (h("i", { key: 'd111de27e1719ba974b5186d6855fef9eed9260d', class: "material-icons mr-8" }, this.icon)), this.header_title)), h("slot", { key: 'e7c17c0d6f075f61f9e7b27ab85f00b25bf798cb', name: "title-suffix" })), h("slot", { key: 'ff782a6c2312c14aeaf95c035e1e88d718662c15', name: "custom-title" }), this.subtitle && (h("span", { key: 'ac0de803c2e6b1ae4481998f362fe75826225304', class: "text-med truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: '3e44c29adc12453c2785fc12bef3c280dfe82047', name: "subtitle-content" }))), h("div", { key: 'fbedde29c58ef3a6254274c0643bc5c3807de104', class: 'flex items-center gap-8' }, h("slot", { key: '914d2984682fb57ceacbfb74854fd4825691c37c', name: 'actions' }))));
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
            "icon": {
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
                    "text": "Icon of header. Must use mat-icon name."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon"
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
