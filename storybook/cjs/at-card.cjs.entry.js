'use strict';

var index = require('./index-COiLLAKF.js');
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
        const getContentClassname = classlist.classlist('relative flex flex-auto flex-col', contentVariantsConfig);
        const contentClassname = getContentClassname({
            padding: this.padding,
            overflow: this.overflow_content,
        });
        const getFooterClassname = classlist.classlist('hide-empty z-index-10 p-16', footerVariantsConfig);
        const footerClassname = getFooterClassname({
            sticky: this.sticky_footer,
        });
        return (index.h(index.Host, { key: 'f932a166a7e7576f06617dbc2a935e51a1592058', class: containerClassname }, index.h("div", { key: 'd9da4e8b6aabd35212be8ab94d3d59afb5199399', class: headerClassname }, index.h("slot", { key: '4ea67dae790b3622264c5e48f8a778bdebb6f1bf', name: "card-header" }), (this.card_title || this.subtitle) && (index.h("div", { key: '6e8635321bb2e79d1f099e10de29ebccab7d00d3', class: "flex flex-col" }, this.card_title && (index.h("h4", { key: '63df00dc6049f253d8a2a0cdec1340af92f4fa48', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (index.h("h5", { key: 'afd390adc94a90fd3f24b996a610bec689bbf264', class: "text-light text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), index.h("slot", { key: '72e05d40e30602248abf7d781a87e74fc71669b5', name: "card-header-actions" })), index.h("div", { key: 'ece2d07011a4712f657ce34ebe821cbd46f69380', class: contentClassname, "data-name": "card-content" }, this.content, index.h("slot", { key: '444d828795feb54e707d6eb270f722837aaddea7' })), index.h("div", { key: 'eb7e3903291b016d1ce7f422b6b611f888477068', class: footerClassname }, index.h("slot", { key: '236d38ed95c0dc0d780599933a0e3cf59a10a24e', name: "card-footer" }))));
    }
};

exports.at_card = AtCardComponent;
//# sourceMappingURL=at-card.entry.cjs.js.map
