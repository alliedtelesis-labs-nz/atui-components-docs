import { h, Host } from "@stencil/core";
import { cva } from "class-variance-authority";
const containerVariants = cva('bg-card flex flex-col overflow-hidden rounded-lg', {
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
            true: 'px-16 pt-8 pb-16',
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
            true: 'bg-card/80 sticky top-0 backdrop-blur',
            false: '',
        },
    },
});
const footerVariants = cva('hide-empty z-index-10 p-16', {
    variants: {
        sticky: {
            true: 'bg-card/80 sticky bottom-0 backdrop-blur',
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
        return (h(Host, { key: '569e08d70abfd7a2b8aa6a345ed3be8e4826761a', class: containerClassname }, h("div", { key: 'b28e574833492e955f3d6b6f19b9dc6a76289552', class: headerClassname }, h("slot", { key: '6fc1b3a86de1462cee6ad88c1dfae9cae5e19075', name: "card-header" }), (this.card_title || this.subtitle) && (h("div", { key: 'f7ab93aa292fc66330c2d65d44d84803dddd14ce', class: "flex flex-col" }, this.card_title && (h("h4", { key: '29f2686ee38371688d1d0caa65f9f4589fad000b', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (h("h5", { key: '5acd54676e27d80f5d94c45af8fa76ad35653652', class: "text-light text-sm", "data-name": "card-subtitle" }, this.subtitle)))), h("slot", { key: 'ed802ab617984ca5ac54e9d3261f085cd1694e02', name: "card-header-actions" })), h("div", { key: '5595c4b127a63da43616074c967cf91049958fc8', class: contentClassname, "data-name": "card-content" }, this.content, h("slot", { key: 'fb123b513146973b37393982bfb4be11ba0039a3' })), h("div", { key: '971047f4bbde10f3b33173d9a11d2245fe9e8984', class: footerClassname }, h("slot", { key: '74656943f39a9b442cd4ee56b2831d06eed9aa01', name: "card-footer" }))));
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
