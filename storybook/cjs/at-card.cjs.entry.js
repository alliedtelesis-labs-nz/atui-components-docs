'use strict';

var index = require('./index-Bo1AxtqW.js');
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
        return (index.h(index.Host, { key: 'd390cd440af9469c60d48af803e02bd1c54ef638', class: containerClassname }, index.h("div", { key: '0156bef73440eacd6911bf1777028a0e0fec0bdd', class: `${headerClassname}` }, index.h("slot", { key: '62b357dbe9e2ab1b6ca53c2d51effdecb0a86cd0', name: "card-header" }), (this.card_title || this.subtitle) && (index.h("div", { key: 'ac83e8b0a01104ab41df13180b5ab44a8c1aea5b', class: "flex min-w-0 flex-1 flex-col break-words" }, this.card_title && (index.h("h4", { key: '6cb9bb560e7eddf189a91e34df3186629afe929b', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (index.h("h5", { key: '42cfca56e6838e656ffd040d0166dd7f66470ef0', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), index.h("slot", { key: '572f740356750fb92c514943b75fb35207ae469c', name: "card-header-actions" })), index.h("div", { key: '2523b0a927351aec0465f6562358f35679107438', class: contentClassname, "data-name": "card-content" }, this.content, index.h("slot", { key: 'ade579cf6913f8562e2da2af31b15d5c6eed524a' })), index.h("div", { key: 'ea6bebc8c95a94f6009ce5d542e1aa5790d3ca99', class: footerClassname }, index.h("slot", { key: '7d9efd3a8e2e12609cc7bf7e415a86e8d6b6f086', name: "card-footer" }))));
    }
};

exports.at_card = AtCardComponent;
