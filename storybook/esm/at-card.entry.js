import { r as registerInstance, h, H as Host } from './index-CYwPWCYK.js';
import { c as classlist } from './classlist-COG8_R0C.js';

const validTitleSizes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
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
    /**
     * Size of the title. Sets both its heading level and its text size.
     */
    title_size = 'h4';
    render() {
        // Inside an at-dialog the host is capped by the `at-dialog at-card` rule
        // in directives.scss. Here it resolves the body's overflow from the var
        // at-dialog publishes; elsewhere the var is unset and it resolves to
        // visible, leaving the card unchanged.
        const getContainerClassname = classlist('relative bg-card-background border-muted flex flex-col overflow-hidden rounded-lg [--at-card-body-overflow-resolved:var(--at-card-content-overflow,visible)]', containerVariantsConfig);
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
        const getFooterClassname = classlist('hide-empty z-10 p-16', footerVariantsConfig);
        const footerClassname = getFooterClassname({
            sticky: this.sticky_footer,
        });
        const TitleHeading = validTitleSizes.includes(this.title_size)
            ? this.title_size
            : 'h4';
        return (h(Host, { key: 'dd5cc511bd2ddf7b07e487fc22c7b10a2752d96e', class: containerClassname }, h("div", { key: '989fad1de473eddb42fc98de50bba5d729474524', class: headerClassname, "data-name": "card-header" }, h("slot", { key: '487393ce49f00ea3ef8c7e092b8e3675724e5525', name: "card-header" }), (this.card_title || this.subtitle) && (h("div", { key: '78fbb1bb511adaf3346bee0fa2c87621deace6be', class: "flex min-w-0 flex-1 flex-col break-words" }, this.card_title && (h(TitleHeading, { key: '0f6d4fe7eeabf24be7a663e6c36d67c7323a6197', "data-name": "card-title", class: TitleHeading }, this.card_title)), this.subtitle && (h("p", { key: 'a113c9a7a81eae122b0eeb8cd44b6d664945adda', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), h("slot", { key: 'f6b41626c82146f5c3216161cb0992b4cc4f42fe', name: "card-header-actions" })), h("div", { key: '1e2954458417240f9a5af5db02134b0913b73e2c', class: contentClassname, "data-name": "card-content" }, this.content, h("slot", { key: '92fffd7a223b4342ab37a2fcefaaf06b8cb370f2' })), h("div", { key: '3e4f26f998ee6161732a9eaeedf21eb668038900', class: footerClassname, "data-name": "card-footer" }, h("slot", { key: '46a2031405d7480a3b07d244248bacff35844ecd', name: "card-footer" }))));
    }
};

export { AtCardComponent as at_card };
