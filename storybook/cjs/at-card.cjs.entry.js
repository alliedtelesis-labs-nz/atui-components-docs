'use strict';

var index = require('./index--r5sCsiV.js');
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
        const getContainerClassname = classlist.classlist('relative z-1  bg-card-background border-muted flex flex-col overflow-hidden rounded-lg', containerVariantsConfig);
        const containerClassname = getContainerClassname({
            shadow: this.shadow,
        });
        const getHeaderClassname = classlist.classlist('flex-wrap hide-empty relative z-2 flex items-center justify-between gap-8 rounded-t-lg p-16', headerVariantsConfig);
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
        return (index.h(index.Host, { key: 'f34d4f0a866fbefcc2ff4ea7c4fcbf7985dad8ff', class: containerClassname }, index.h("div", { key: '99328542e6b12885054b8131818f8c88a59edd6e', class: `${headerClassname}` }, index.h("slot", { key: 'a2705427d7aaa6d61acc9e892b3e42481e17dc41', name: "card-header" }), (this.card_title || this.subtitle) && (index.h("div", { key: 'b2a18435a4eeb6d58143346d656bca7986b905b7', class: "flex flex-col" }, this.card_title && (index.h("h4", { key: '6fd66d902ea3efb69a5523f21a4f8a6061e32adb', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (index.h("h5", { key: 'f9fb1f19c0b647e0e509ec74c3aba0bb2472a2d2', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), index.h("slot", { key: '77907088ec70fdbdf05e47d8fe621c14b04ba329', name: "card-header-actions" })), index.h("div", { key: '3a3fc6ab84d17f14959e94b64392ebc60fb48851', class: contentClassname, "data-name": "card-content" }, this.content, index.h("slot", { key: 'cf1310ce52a81426635875cb65725cdc5e5e9597' })), index.h("div", { key: 'c641352662ce35a9d71c781fd3047634590d87a6', class: footerClassname }, index.h("slot", { key: '45381e35f838aea6200a001d19fe9c412dc4a16d', name: "card-footer" }))));
    }
};

exports.at_card = AtCardComponent;
