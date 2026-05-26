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
        return (index.h(index.Host, { key: '90901a6ea32c96c7ca3bfb25ee7af8ce07159d0b', class: containerClassname }, index.h("div", { key: '3bfb47da76a5d43c74fe6fdbf15cf9468611b5e3', class: `${headerClassname}` }, index.h("slot", { key: '90cbc757bc3ddd42dbbc52a6f9f97ff4e36ece99', name: "card-header" }), (this.card_title || this.subtitle) && (index.h("div", { key: '9fbf5f1c665fd810ad30284e0b5caf41c0ad8c57', class: "flex flex-col" }, this.card_title && (index.h("h4", { key: 'aaa4d1f7c899869c47fd07a1abf2621ab56d2aff', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (index.h("h5", { key: '2e998675ec95e3fe8ee0564cd2c48ba2c6ba35c1', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), index.h("slot", { key: 'be5a1746e5de687a253fe1e78a78d26472ca64e0', name: "card-header-actions" })), index.h("div", { key: '8fba1addc0a18eac1b782af0c06e60dfe1482298', class: contentClassname, "data-name": "card-content" }, this.content, index.h("slot", { key: 'e0d946f2f2de24f665c0e9eb7c5b09f4629f858a' })), index.h("div", { key: '306a1949930209420ecd1fb7996db3d59c81c4b9', class: footerClassname }, index.h("slot", { key: '6a955c5de9d8d8812c65c847e0c3a02d00ca3b1d', name: "card-footer" }))));
    }
};

exports.at_card = AtCardComponent;
