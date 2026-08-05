'use strict';

var index = require('./index-D7uTOurQ.js');
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
        return (index.h(index.Host, { key: '99e255427e94961ce3d5021a6a34553a703b5f8e', class: containerClassname }, index.h("div", { key: 'fbfef856fd08e757ebc773270a8252d765365e9f', class: `${headerClassname}` }, index.h("slot", { key: '3502c9d313234a7bee5fc2e60d4697b3b3f030e6', name: "card-header" }), (this.card_title || this.subtitle) && (index.h("div", { key: 'a70da95aecc9066935f732470ceec2c093eec511', class: "flex flex-col" }, this.card_title && (index.h("h4", { key: '01c9b37aaa08b422beb5e29120fc9bb2f341e9d6', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (index.h("h5", { key: '8031ea8f9522260e7dec778f63ae062ddc9e6ff9', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), index.h("slot", { key: '4b0f5306498eeffc71ef55e4390e9143f02c3d3d', name: "card-header-actions" })), index.h("div", { key: '4b256784eff3d8f620b02e5ca6dc495d517c3ea2', class: contentClassname, "data-name": "card-content" }, this.content, index.h("slot", { key: 'dc97e85b2a7ce828a8db7847a35336ec8c417696' })), index.h("div", { key: '11dba7fb506ed21daed476219548b13263a1fee4', class: footerClassname }, index.h("slot", { key: 'de6bd6a36eb588a1965a5653cceef37981403e52', name: "card-footer" }))));
    }
};

exports.at_card = AtCardComponent;
