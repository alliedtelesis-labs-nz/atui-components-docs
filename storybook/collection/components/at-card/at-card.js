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
            // Scrolls only when the host resolved a scroll value from an
            // enclosing at-dialog; resolves to visible everywhere else.
            false: '[overflow-y:var(--at-card-body-overflow-resolved)]',
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
 * @description A flexible container component for organizing content with header, body, and footer sections. Features sticky headers/footers, configurable padding, shadows, and overflow handling. Inside an `at-dialog` the card is always bounded to the dialog and scrolls its body with the header and footer pinned; `max-h-*`, `max-w-*` and `min-h-*` on its host are ignored.
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
     * exceeds the card is clipped, except inside an `at-dialog`, where it
     * always scrolls.
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
        // Inside an at-dialog the host is capped by the `at-dialog at-card` rule
        // in directives.scss. Here it resolves the body's overflow from the var
        // at-dialog publishes; elsewhere the var is unset and it resolves to
        // visible, leaving the card unchanged.
        const getContainerClassname = classlist('relative z-1  bg-card-background border-muted flex flex-col overflow-hidden rounded-lg [--at-card-body-overflow-resolved:var(--at-card-content-overflow,visible)]', containerVariantsConfig);
        const containerClassname = getContainerClassname({
            shadow: this.shadow,
        });
        const getHeaderClassname = classlist('flex-wrap hide-empty relative z-20 flex items-center justify-between gap-8 rounded-t-lg p-16', headerVariantsConfig);
        const headerClassname = getHeaderClassname({
            sticky: this.sticky_header,
        });
        // The body resets the public vars so a nested card gets no cap and no
        // scrollbar of its own. The reset sits here, not on the host, so it
        // never overrides the value this card's host has already resolved.
        const getContentClassname = classlist('relative flex flex-auto flex-col min-h-0 [--at-dialog-max-height:initial] [--at-dialog-max-width:initial] [--at-card-content-overflow:initial]', contentVariantsConfig);
        const contentClassname = getContentClassname({
            padding: this.padding,
            overflow: this.overflow_content,
        });
        const getFooterClassname = classlist('hide-empty z-index-10 p-16', footerVariantsConfig);
        const footerClassname = getFooterClassname({
            sticky: this.sticky_footer,
        });
        return (h(Host, { key: '6feffefede16b54bd44567a4d070960f142e1c47', class: containerClassname }, h("div", { key: 'feda50917a494f39b7420d7f090598f064a6d139', class: `${headerClassname}` }, h("slot", { key: '2fe5784c1ce587570373826aad6405b68b109030', name: "card-header" }), (this.card_title || this.subtitle) && (h("div", { key: 'df15662e9d82d0b1f3d6c992bc88fc287e06acb4', class: "flex min-w-0 flex-1 flex-col break-words" }, this.card_title && (h("h4", { key: '3f9ea23abf7caf74a7468420ff567570dfe5d5d8', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (h("h5", { key: '60e807a57da1aac118e8eb172dd07577f5fe213b', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), h("slot", { key: '059fd26feeea33eb0be961240864eefc559d1300', name: "card-header-actions" })), h("div", { key: '4c6ab44a99a7a7df95d1c03efabb6e52524bec5f', class: contentClassname, "data-name": "card-content" }, this.content, h("slot", { key: '71b1909aba60e783e4c911a9e91a873125d0ff1a' })), h("div", { key: '8bf1728b27278de0565be564742eb5ff407040d8', class: footerClassname }, h("slot", { key: '125c54b3aa77db81a393eedff6d6418074cdb03e', name: "card-footer" }))));
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
                    "text": "When true the content area scrolls its own overflow (overflow-y auto),\nkeeping sticky headers/footers visible. When false, content that\nexceeds the card is clipped, except inside an `at-dialog`, where it\nalways scrolls."
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
