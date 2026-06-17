'use strict';

var index = require('./index-D93m6lxs.js');
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
        return (index.h(index.Host, { key: '16c2c69afc7c0c8d0d020fb2516e38fd212998b4', class: containerClassname }, index.h("div", { key: '6338759aebf9b84a37c8c8c1712311c37b09d96b', class: `${headerClassname}` }, index.h("slot", { key: '2127b90a5d96c47807f73d36e73208722fa3f679', name: "card-header" }), (this.card_title || this.subtitle) && (index.h("div", { key: '58092cc14713c7ba6b8e8fe2cdff8a71c516b682', class: "flex flex-col" }, this.card_title && (index.h("h4", { key: '7ad0362a40359408496318112a50c0a17fd85515', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (index.h("h5", { key: '53d3e26ca08b20ea88caa0f4fbd23dfa07f39887', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), index.h("slot", { key: '6fa267745fee88ed409a3a0ad6df71d9f9cb57f4', name: "card-header-actions" })), index.h("div", { key: 'e9808867505ae18db79dee3324e98b4d901a5868', class: contentClassname, "data-name": "card-content" }, this.content, index.h("slot", { key: 'aad3c389009e62c319cdd2c6c89ba6e4891c13e6' })), index.h("div", { key: 'ef6f3108eba401d666cc8e28c4329b1e3e9d308f', class: footerClassname }, index.h("slot", { key: '3f4bc807f85eecf523608394d77197efc776a294', name: "card-footer" }))));
    }
};

exports.at_card = AtCardComponent;
