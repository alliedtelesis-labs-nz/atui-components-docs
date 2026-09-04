'use strict';

var index = require('./index-ChtkW4Eq.js');
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
        return (index.h(index.Host, { key: 'b4aa08ef05331ddb2ea4ea8794e5bc1109f63573', class: containerClassname }, index.h("div", { key: '1e404e0919cbc5c2b3f39c5334cffc91e1bda648', class: `${headerClassname}` }, index.h("slot", { key: 'cab00496f2afdca6ce3691399d5583390b9319fd', name: "card-header" }), (this.card_title || this.subtitle) && (index.h("div", { key: '6de2f386be6d116e8e73b33388bb211fd56d756e', class: "flex min-w-0 flex-1 flex-col break-words" }, this.card_title && (index.h("h4", { key: '24c3089094da7f238143ba11bff4400443a1ccfd', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (index.h("h5", { key: '14bbc7412ab9ce01673de4608690e83c25ca6126', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), index.h("slot", { key: 'f5e0752bc858806bddd2da9c2456822b98c15738', name: "card-header-actions" })), index.h("div", { key: 'b118e84e686ddd2c9fac9622792926ea43e1dc9f', class: contentClassname, "data-name": "card-content" }, this.content, index.h("slot", { key: '7ad07bd8c35c6b4e3c97b87f16d3d5e129a88f43' })), index.h("div", { key: '242f6fe1bc35668e53a134fbdf5db07dcad0b6ac', class: footerClassname }, index.h("slot", { key: 'c39b57720064bf5ba486ff82e4a486ff5051efcd', name: "card-footer" }))));
    }
};

exports.at_card = AtCardComponent;
