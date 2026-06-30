'use strict';

var index = require('./index-l94cJki_.js');
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
        return (index.h(index.Host, { key: '47189d38b01d2336f997751f82011853373bab7b', class: containerClassname }, index.h("div", { key: 'f224d4ca2e3e1ef978a4a72d984d6246fa7c95d8', class: `${headerClassname}` }, index.h("slot", { key: '676851f0bcb1a0d97225733f3d5b9095084492ce', name: "card-header" }), (this.card_title || this.subtitle) && (index.h("div", { key: '738d6df4e4c528f24d5c22f0f8568dae75785bb1', class: "flex flex-col" }, this.card_title && (index.h("h4", { key: '9c4d51925c83766d6146cdaf1658e1d72fde7880', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (index.h("h5", { key: '0dbb85b39753ebcfe2f5e8f7cfa20f244ba3f158', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), index.h("slot", { key: '91892de32d88f769cc1cf817270e004aaf335b80', name: "card-header-actions" })), index.h("div", { key: 'cb22b2bf3cb9a789cf12bc5406e93643d74e5c36', class: contentClassname, "data-name": "card-content" }, this.content, index.h("slot", { key: 'a146ab2306bcf05a3d1766fd2076cae85365abc7' })), index.h("div", { key: '3a71911a82d7988c0ce08ee892678d49d51e50ae', class: footerClassname }, index.h("slot", { key: '8d4d88d90d1e1d0eedaf65506ffba56d3dbddeae', name: "card-footer" }))));
    }
};

exports.at_card = AtCardComponent;
