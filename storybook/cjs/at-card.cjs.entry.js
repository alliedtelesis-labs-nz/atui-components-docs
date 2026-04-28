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
        return (index.h(index.Host, { key: '92db81591570a9f6cb67988c190ec6b6c568d6c1', class: containerClassname }, index.h("div", { key: '7656fe143722112fa0e4947b9b8159baa2c8351e', class: `${headerClassname}` }, index.h("slot", { key: '3e3798fcb34c5a5348127cd33d9600374e5a04b4', name: "card-header" }), (this.card_title || this.subtitle) && (index.h("div", { key: '3f5de30749a0460daba8864db6b6bdb17799279b', class: "flex flex-col" }, this.card_title && (index.h("h4", { key: 'dc218f94de02daf2e9543a9ca4728899861a5d90', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (index.h("h5", { key: 'bbd6a6ca917619d23309af2ab69be2b2c4c52ae9', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), index.h("slot", { key: 'f345d51b7f3f9065be8d3659b3638e838397f3da', name: "card-header-actions" })), index.h("div", { key: 'cd54952f2a080b74303fa08b26c7990d3dc40eb0', class: contentClassname, "data-name": "card-content" }, this.content, index.h("slot", { key: 'f9c1001a96dd0028e7b573c2340a92185da8ee12' })), index.h("div", { key: 'a66652c04230bbb17e5716f142a7abca0254ff3a', class: footerClassname }, index.h("slot", { key: '0262110fda4cf6119e3dd09918761e2167758022', name: "card-footer" }))));
    }
};

exports.at_card = AtCardComponent;
