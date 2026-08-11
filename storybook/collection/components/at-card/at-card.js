import { h, Host } from "@stencil/core";
import { classlist } from "../../utils/classlist";
const containerVariantsConfig = {
    variants: {
        shadow: {
            none: 'shadow-none',
            sm: 'shadow-sm',
            lg: 'shadow-lg',
        },
    },
};
const contentVariantsConfig = {
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
};
const headerVariantsConfig = {
    variants: {
        sticky: {
            true: 'bg-card-background sticky top-0 backdrop-blur',
            false: '',
        },
    },
};
const footerVariantsConfig = {
    variants: {
        sticky: {
            true: 'bg-card-background/80 sticky bottom-0 backdrop-blur',
            false: '',
        },
    },
};
/**
 * @category Layout
 * @description A flexible container component for organizing content with header, body, and footer sections. Features sticky headers/footers, configurable padding, shadows, and overflow handling.
 *
 * @slot card-header - Placed in the header of the card, above the header actions & before the icon and title
 * @slot card-header-actions - Placed in the header of the card, below the header content & after the icon and title
 * @slot - Placed in the content area of the card.
 * @slot card-footer - Placed below the content of the card
 */
export class AtCardComponent {
    /**
     * Title of the card.
     */
    card_title;
    /**
     * Subtitle of the card, placed below title.
     */
    subtitle;
    /**
     * Content of the card, placed below title, and subtitle.
     */
    content;
    /**
     * When true the content area scrolls its own overflow (overflow-y auto),
     * keeping sticky headers/footers visible. When false, content that
     * exceeds the card is clipped by the card container.
     */
    overflow_content = false;
    /**
     * Display header persistently at top of card.
     */
    sticky_header = true;
    /**
     * Display footer persistently at bottom of card.
     */
    sticky_footer = true;
    /**
     * Apply or remove padding form the card content area.
     */
    padding = true;
    /**
     * Box-shadow around card.
     */
    shadow = 'none';
    render() {
        const getContainerClassname = classlist('relative z-1  bg-card-background border-muted flex flex-col overflow-hidden rounded-lg', containerVariantsConfig);
        const containerClassname = getContainerClassname({
            shadow: this.shadow,
        });
        const getHeaderClassname = classlist('flex-wrap hide-empty relative z-20 flex items-center justify-between gap-8 rounded-t-lg p-16', headerVariantsConfig);
        const headerClassname = getHeaderClassname({
            sticky: this.sticky_header,
        });
        const getContentClassname = classlist('relative flex flex-auto flex-col min-h-0', contentVariantsConfig);
        const contentClassname = getContentClassname({
            padding: this.padding,
            overflow: this.overflow_content,
        });
        const getFooterClassname = classlist('hide-empty z-index-10 p-16', footerVariantsConfig);
        const footerClassname = getFooterClassname({
            sticky: this.sticky_footer,
        });
        return (h(Host, { key: 'b5ff75557894619c98653f63099596471131310c', class: containerClassname }, h("div", { key: 'd0f866015b0126beab6c45f7db21ea41bc97eddc', class: `${headerClassname}` }, h("slot", { key: '0db77c817e845a88e9cdc074b00769c2d61b8c20', name: "card-header" }), (this.card_title || this.subtitle) && (h("div", { key: '339665f0cf3dd3460ab92da04718dc8e8d521bc7', class: "flex flex-col" }, this.card_title && (h("h4", { key: '75e72b23dba10ac4a24b4dc893740937d8a67253', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (h("h5", { key: '2c2de6a87d4567e3de6a339e864915f6606dee2a', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), h("slot", { key: 'f012dac851f87baa57dfc30afeee8d12127aeb3a', name: "card-header-actions" })), h("div", { key: 'aef5f728cd0a4b6481485546109b327ac8e032be', class: contentClassname, "data-name": "card-content" }, this.content, h("slot", { key: '2629d1f2b8129cd81ddee2349108e967d6695a29' })), h("div", { key: 'd1459f6ed476be122b560f80c7a732d609ae5799', class: footerClassname }, h("slot", { key: 'dbf58e7528f9739d11303d5f9993abeac330e313', name: "card-footer" }))));
    }
    static get is() { return "at-card"; }
    static get properties() {
        return {
            "card_title": {
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
                    "text": "Title of the card."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "card_title"
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
                    "text": "Subtitle of the card, placed below title."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "subtitle"
            },
            "content": {
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
                    "text": "Content of the card, placed below title, and subtitle."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "content"
            },
            "overflow_content": {
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
                    "text": "When true the content area scrolls its own overflow (overflow-y auto),\nkeeping sticky headers/footers visible. When false, content that\nexceeds the card is clipped by the card container."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "overflow_content",
                "defaultValue": "false"
            },
            "sticky_header": {
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
                    "text": "Display header persistently at top of card."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "sticky_header",
                "defaultValue": "true"
            },
            "sticky_footer": {
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
                    "text": "Display footer persistently at bottom of card."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "sticky_footer",
                "defaultValue": "true"
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
                    "text": "Apply or remove padding form the card content area."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "padding",
                "defaultValue": "true"
            },
            "shadow": {
                "type": "string",
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
                "attribute": "shadow",
                "defaultValue": "'none'"
            }
        };
    }
}
