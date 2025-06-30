import { h, Host } from "@stencil/core";
import { cva } from "class-variance-authority";
const containerVariants = cva('flex flex-col rounded-lg bg-card', {
    variants: {
        shadow: {
            none: 'shadow-none',
            sm: 'shadow-sm',
            lg: 'shadow-lg',
        },
    },
});
const contentVariants = cva('relative flex flex-auto flex-col', {
    variants: {
        padding: {
            true: 'px-16 pb-16 pt-8',
            false: 'p-0',
        },
        overflow: {
            true: 'overflow-y-auto',
            false: '',
        },
    },
});
const headerVariants = cva('hide-empty z-10 flex items-center justify-between p-16', {
    variants: {
        sticky: {
            true: 'sticky top-0 bg-card/80 backdrop-blur',
            false: '',
        },
    },
});
const footerVariants = cva('hide-empty z-index-10 p-16', {
    variants: {
        sticky: {
            true: 'sticky bottom-0 bg-card/80 backdrop-blur',
            false: '',
        },
    },
});
/**
 * @category Layout
 * @description A flexible container component for organizing content with header, body, and footer sections. Features sticky headers/footers, configurable padding, shadows, and overflow handling.
 *
 * @slot card-header - Placed in the header of the card, above the header actions & before the icon and title
 * @slot card-header-actions - Placed in the header of the card, below the header content & after the icon and title
 * @slot - Placed in the content area of the card.
 * @slot card-footer - Placed below the content of the card
 */
export class AtuiCardComponent {
    constructor() {
        /**
         * Enables overflow on the content area. If false overflow will be applied on the host.
         */
        this.overflow_content = false;
        /**
         * Display header persistently at top of card.
         */
        this.sticky_header = true;
        /**
         * Display footer persistently at bottom of card.
         */
        this.sticky_footer = true;
        /**
         * Apply or remove padding form the card content area.
         */
        this.padding = true;
        /**
         * Box-shadow around card.
         */
        this.shadow = 'sm';
    }
    render() {
        const containerClassname = containerVariants({
            shadow: this.shadow,
        });
        const contentClassname = contentVariants({
            padding: this.padding,
            overflow: this.overflow_content,
        });
        const headerClassname = headerVariants({
            sticky: this.sticky_header,
        });
        const footerClassname = footerVariants({
            sticky: this.sticky_footer,
        });
        return (h(Host, { key: '334b6807f1b2d12498e15323fbb0354ad00137cd', class: containerClassname }, h("div", { key: '8c94e34f2fa96a1246d22d14a97c67d17d68aa32', class: headerClassname }, h("slot", { key: '9122cb34d1fe09a7277a5b81b5a07406de080c50', name: "card-header" }), (this.card_title || this.subtitle) && (h("div", { key: '34f96edbf80a532ca40e0352b74c3c1c4a02c9a8', class: "flex flex-col" }, this.card_title && (h("h4", { key: '2c87e705e782f29539acd72165cd8fd95210db5b', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (h("h5", { key: 'd25d42e9e94235a44d612df6bd24cbab6c9a4d3c', class: "text-sm text-light", "data-name": "card-subtitle" }, this.subtitle)))), h("slot", { key: 'a2f4ada16535e803402312872b57e3e7ebd1b7a8', name: "card-header-actions" })), h("div", { key: 'f5046fc26d604a19f1d9b8318244603b92e996e0', class: contentClassname, "data-name": "card-content" }, this.content, h("slot", { key: '8b643ef35b5d413f9044b26b345770c69ff67363' })), h("div", { key: '53543c3ff21950df3b41456665dcfb9fa16403fb', class: footerClassname }, h("slot", { key: '35fafa174c3568734c57c341c433c86a8a6739de', name: "card-footer" }))));
    }
    static get is() { return "atui-card"; }
    static get properties() {
        return {
            "card_title": {
                "type": "string",
                "attribute": "card_title",
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
                    "text": "Title of the card."
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
                    "text": "Subtitle of the card, placed below title."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "content": {
                "type": "string",
                "attribute": "content",
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
                    "text": "Content of the card, placed below title, and subtitle."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "overflow_content": {
                "type": "boolean",
                "attribute": "overflow_content",
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
                    "text": "Enables overflow on the content area. If false overflow will be applied on the host."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "sticky_header": {
                "type": "boolean",
                "attribute": "sticky_header",
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
                    "text": "Display header persistently at top of card."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "sticky_footer": {
                "type": "boolean",
                "attribute": "sticky_footer",
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
                    "text": "Display footer persistently at bottom of card."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
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
                    "text": "Apply or remove padding form the card content area."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "shadow": {
                "type": "string",
                "attribute": "shadow",
                "mutable": false,
                "complexType": {
                    "original": "'none' | 'sm' | 'lg'",
                    "resolved": "\"lg\" | \"none\" | \"sm\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Box-shadow around card."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'sm'"
            }
        };
    }
}
//# sourceMappingURL=atui-card.js.map
