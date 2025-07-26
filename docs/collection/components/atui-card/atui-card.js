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
        return (h(Host, { key: '05ddb139674692e0b106d4807ccf0a5d6918cdd2', class: containerClassname }, h("div", { key: '6d2daabbe0a7c5800cf53feb7d30ba8fdefa9f08', class: headerClassname }, h("slot", { key: '5dbb408e138e7319b7c3dd50d744314aea9e8854', name: "card-header" }), (this.card_title || this.subtitle) && (h("div", { key: '561467ce791d7af5fc3b70ad964fadfbf0f84faf', class: "flex flex-col" }, this.card_title && (h("h4", { key: '50b6c3c531227805f50ce76e87a90802d77a1003', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (h("h5", { key: '725c9e084255a8320c49fa53f0c4be0e5f40397d', class: "text-sm text-light", "data-name": "card-subtitle" }, this.subtitle)))), h("slot", { key: 'a3308917e2691e2d2bcd94c01bd195e7b7837655', name: "card-header-actions" })), h("div", { key: '198bf89f2530437db0e9db4ec8f0e194c61aedef', class: contentClassname, "data-name": "card-content" }, this.content, h("slot", { key: 'fcb9d02d77a9a478234b6083765996fcedb7cf50' })), h("div", { key: '232b29ca74bac0e53e394f9b8542e91440b004ef', class: footerClassname }, h("slot", { key: '8adcdd40c1ba6e06cca8fe68c402cc5f1793360a', name: "card-footer" }))));
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
