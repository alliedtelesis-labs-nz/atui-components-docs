'use strict';

var index = require('./index-CzDB71Wy.js');
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
            true: 'bg-card/80 sticky top-0 backdrop-blur',
            false: '',
        },
    },
};
const footerVariantsConfig = {
    variants: {
        sticky: {
            true: 'bg-card/80 sticky bottom-0 backdrop-blur',
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
     * Enables overflow on the content area. If false overflow will be applied on the host.
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
        const getContainerClassname = classlist.classlist('relative z-1 border border-light bg-card flex flex-col overflow-hidden rounded-lg', containerVariantsConfig);
        const containerClassname = getContainerClassname({
            shadow: this.shadow,
        });
        const getHeaderClassname = classlist.classlist('hide-empty relative z-2 flex items-center justify-between gap-8 rounded-t-lg p-16', headerVariantsConfig);
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
        return (index.h(index.Host, { key: 'd1754397709361a29ba5288c33543be55462e08d', class: containerClassname }, index.h("div", { key: '8292eaeed1a5179ddefb34c89f11fa4a19bff66e', class: headerClassname }, index.h("slot", { key: '1a54ece2b83141362390bafec891e5d896fe0ee8', name: "card-header" }), (this.card_title || this.subtitle) && (index.h("div", { key: 'e3f4cae7ea8ea1087f47abe1cc4576e4c5550b32', class: "flex flex-col" }, this.card_title && (index.h("h4", { key: '4a69d61f728a10c3836272a170ecc2b975495415', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (index.h("h5", { key: 'c82c798a738ce5b8a295e0ebf1d45724f3d542e4', class: "text-light text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), index.h("slot", { key: 'e05982ee5a60a7773e3825fcc75a474216b04da0', name: "card-header-actions" })), index.h("div", { key: '56b7a70b17ad7a73848e469db7574f7c7dda64bd', class: contentClassname, "data-name": "card-content" }, this.content, index.h("slot", { key: '741b11c449a58cadaa1e109bfc4e8fb15c21cb46' })), index.h("div", { key: 'c9303e3cbb6669000c60a606947aa14a66a21443', class: footerClassname }, index.h("slot", { key: 'a3abe6ca475f28a0a5353b20105a12a64208759b', name: "card-footer" }))));
    }
};

exports.at_card = AtCardComponent;
