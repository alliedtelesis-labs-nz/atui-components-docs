import { r as registerInstance, h, H as Host } from './index-Baj27LS8.js';
import { c as classlist } from './classlist-COG8_R0C.js';

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
const AtCardComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
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
        return (h(Host, { key: 'b49dbca585e51170cd3cf52ebb54539f62d5adfa', class: containerClassname }, h("div", { key: '41d61c1a15cc0b3937f54ea8aae1885d5379ea82', class: `${headerClassname}` }, h("slot", { key: '8344596e343d69b5c8bc29a39a845a7eaec3df54', name: "card-header" }), (this.card_title || this.subtitle) && (h("div", { key: '1416dccf7ed3a157b2c228dadfb188edddd4738e', class: "flex min-w-0 flex-1 flex-col break-words" }, this.card_title && (h("h4", { key: '793e4c1ac49243ff5ae14e4f4de22dae371c7849', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (h("h5", { key: 'e55d45ea97117e504bcf5e2a0110cea9c34120fd', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), h("slot", { key: '3537b6aadf0a94fa22efd72215c962efdce7473f', name: "card-header-actions" })), h("div", { key: '436b8f01f40e3f110148c9a96b3f971a6b43a92c', class: contentClassname, "data-name": "card-content" }, this.content, h("slot", { key: '4905f8f9b6753e96463467dbb0669c9fff346777' })), h("div", { key: '701fac283434163c627c1fc6ce03dc163de7a876', class: footerClassname }, h("slot", { key: 'cef71f9b0b1da93078de03a2313ad0f3905e89c2', name: "card-footer" }))));
    }
};

export { AtCardComponent as at_card };
