'use strict';

var index = require('./index-ToR1OkrH.js');
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
        return (index.h(index.Host, { key: '6caea9c8e8aaaadccca8986dddb385bb83176a05', class: containerClassname }, index.h("div", { key: '217f8d4e7010d7c22f83367ace879caa4942770d', class: `${headerClassname}` }, index.h("slot", { key: 'ebd53f12aa2bdeca78ab490552fc9de28a03df0c', name: "card-header" }), (this.card_title || this.subtitle) && (index.h("div", { key: '782ad3b2b683492c521550eb59465c73be3ef619', class: "flex flex-col" }, this.card_title && (index.h("h4", { key: '9c8a828aa405323a874d2292457f7f686be59ec3', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (index.h("h5", { key: '5b41263c1b179aacc12360acf436e1e820e37dc3', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), index.h("slot", { key: '6f98c2ed6981f17a2ff08a6688d0c71f9a3184fe', name: "card-header-actions" })), index.h("div", { key: 'a66096c530bb170e5fdb80356e72914f0e43f8d1', class: contentClassname, "data-name": "card-content" }, this.content, index.h("slot", { key: '91eb2b94dbd31860541121028c951c633df8c01f' })), index.h("div", { key: '90825a69f0ba9e0b692ee9b0a53a9e80f797c2f5', class: footerClassname }, index.h("slot", { key: '213132037936c6948d12c3af6706050b55214016', name: "card-footer" }))));
    }
};

exports.at_card = AtCardComponent;
