'use strict';

var index = require('./index-B7bW4GPk.js');
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
        return (index.h(index.Host, { key: '5505235f2199271c183e78201360c06381b417b1', class: containerClassname }, index.h("div", { key: 'eb8b68e551def033db8c037a4570c0692073cecc', class: `${headerClassname}` }, index.h("slot", { key: '5e1e840015c0d13e8346545d7fd586b1b0b5d5c2', name: "card-header" }), (this.card_title || this.subtitle) && (index.h("div", { key: '8ec866dc532da7484dfa7b2452f3d6f4f61f58ef', class: "flex flex-col" }, this.card_title && (index.h("h4", { key: '383052942358b156a532f2b752e9ef31e8cb3f06', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (index.h("h5", { key: '4914b5e6f1cb8f8e5932fe54ab807160ae8a8341', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), index.h("slot", { key: '132690376ac2bac9c6e3a026554161c8e1537935', name: "card-header-actions" })), index.h("div", { key: '49dfb6889a098d2a06e8589f8cce8ba2f0b048c3', class: contentClassname, "data-name": "card-content" }, this.content, index.h("slot", { key: '0f167301a0d8c7b5b564f79079222e60859c8981' })), index.h("div", { key: '93ed379a2f9d01430c7d2bd7c0618565bd174125', class: footerClassname }, index.h("slot", { key: '2f19f5dcb85281816266dee962b248335b6cd368', name: "card-footer" }))));
    }
};

exports.at_card = AtCardComponent;
