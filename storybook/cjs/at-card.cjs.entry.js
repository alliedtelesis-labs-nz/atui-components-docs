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
        return (index.h(index.Host, { key: '7fa215b3485700e08382209dab1053fd685bcf00', class: containerClassname }, index.h("div", { key: 'a6ec004623c01d5c666cfe9ac1c210f1b2889c20', class: `${headerClassname}` }, index.h("slot", { key: 'd63a5fe3a49061acfd21ded2ae7643e06b310daf', name: "card-header" }), (this.card_title || this.subtitle) && (index.h("div", { key: 'c352a07d1ff1cae4343190352f4a13c0815d7187', class: "flex flex-col" }, this.card_title && (index.h("h4", { key: 'aac4795b83078b9feb512500cc26ddec5dc8d7de', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (index.h("h5", { key: '10b66f6a207572a299fefe9b179af22418f3795f', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), index.h("slot", { key: 'a070dda7567aa6727b35b26a92e9f1c1ba134175', name: "card-header-actions" })), index.h("div", { key: '5292aa5a5cec30cf8fc68eb0419d478df71b4647', class: contentClassname, "data-name": "card-content" }, this.content, index.h("slot", { key: 'ed5338543a60f7fe3be2a899d9c0bceb528ac819' })), index.h("div", { key: '4eb6fa6233814c349a41266c792bff53e1b85ff8', class: footerClassname }, index.h("slot", { key: 'c4c4f801f9d0af73f547f7a5a7916e903d2bec57', name: "card-footer" }))));
    }
};

exports.at_card = AtCardComponent;
