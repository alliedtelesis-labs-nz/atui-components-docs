'use strict';

var index = require('./index-DK-3iCCu.js');
var classlist = require('./classlist-BPb95vgj.js');

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
const AtCardComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        const getContainerClassname = classlist.classlist('relative z-1  bg-card-background border-muted flex flex-col overflow-hidden rounded-lg', containerVariantsConfig);
        const containerClassname = getContainerClassname({
            shadow: this.shadow,
        });
        const getHeaderClassname = classlist.classlist('flex-wrap hide-empty relative z-20 flex items-center justify-between gap-8 rounded-t-lg p-16', headerVariantsConfig);
        const headerClassname = getHeaderClassname({
            sticky: this.sticky_header,
        });
        const getContentClassname = classlist.classlist('relative flex flex-auto flex-col min-h-0', contentVariantsConfig);
        const contentClassname = getContentClassname({
            padding: this.padding,
            overflow: this.overflow_content,
        });
        const getFooterClassname = classlist.classlist('hide-empty z-index-10 p-16', footerVariantsConfig);
        const footerClassname = getFooterClassname({
            sticky: this.sticky_footer,
        });
        return (index.h(index.Host, { key: '4af2a0cdb4f6689d4b21f7b8677bd5cd864dda04', class: containerClassname }, index.h("div", { key: '0e84327358661943524f5385f1b8dcb08975e04a', class: `${headerClassname}` }, index.h("slot", { key: 'e50e6836952a0dd1d4778a847680bec8a727dd9c', name: "card-header" }), (this.card_title || this.subtitle) && (index.h("div", { key: '8662545761f058beb71a14f9b0f994764c5afcd8', class: "flex flex-col" }, this.card_title && (index.h("h4", { key: '49929bfe598435cb12a3d5b2c2477dc095d5b43e', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (index.h("h5", { key: '3c009fb02ecb83a91ebf54ed9b7cebb6e08579d1', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), index.h("slot", { key: '5aa148e3f6d12141cebc5e16ca5885ce07cd7a6d', name: "card-header-actions" })), index.h("div", { key: '47b7d0f6569f14625e865b4ef57fd0cca5af9f66', class: contentClassname, "data-name": "card-content" }, this.content, index.h("slot", { key: '432c64363beaa69e42ba40911363219a35a9c561' })), index.h("div", { key: 'b819273a6cad83dca323cd42de536de2e0c86278', class: footerClassname }, index.h("slot", { key: '56e3daa550d93984bb2870cda202b4b2594ffd69', name: "card-footer" }))));
    }
};

exports.at_card = AtCardComponent;
