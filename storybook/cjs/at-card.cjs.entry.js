'use strict';

var index = require('./index-Bc1nzv_X.js');
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
        return (index.h(index.Host, { key: '6ab4f2d29ef090b08eee4a289858ee855dc30c35', class: containerClassname }, index.h("div", { key: '453dd458444b49f3f3f21c2067f3424d7d8f3abe', class: `${headerClassname}` }, index.h("slot", { key: '8892034539f51aa72c78c2cc9cae5ad20b898cd9', name: "card-header" }), (this.card_title || this.subtitle) && (index.h("div", { key: 'b1c821b723ab04b463f210ee912f3baaccf643b7', class: "flex min-w-0 flex-1 flex-col break-words" }, this.card_title && (index.h("h4", { key: '894cac6b6049888c0f694f8e99e4df10aae9ecf4', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (index.h("h5", { key: 'f26ce740ef2b73da92e2cc545c25636e3a5e073f', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), index.h("slot", { key: '5f6bd39a4a954b23c188c353f982848c189e04f9', name: "card-header-actions" })), index.h("div", { key: 'd50a153dcad2f0afe1ef4b58c7b20906bb5672c3', class: contentClassname, "data-name": "card-content" }, this.content, index.h("slot", { key: 'f01784d0399ca1caa2f05a170e0109d33de11d10' })), index.h("div", { key: '0498096922535550efcc0e49a9f364c5da296f3a', class: footerClassname }, index.h("slot", { key: 'fda53cc0524ffa0afb542c0bfa00731578b8b60d', name: "card-footer" }))));
    }
};

exports.at_card = AtCardComponent;
