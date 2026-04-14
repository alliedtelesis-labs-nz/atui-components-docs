'use strict';

var index = require('./index-BRms7T38.js');
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
        return (index.h(index.Host, { key: '3bd0d913cc80cffd22cf89be7b63f51eb63d3078', class: containerClassname }, index.h("div", { key: 'cb729d08b21473ac11e54bb1dc25eb7e371b95b5', class: `${headerClassname}` }, index.h("slot", { key: 'ff55495dc7490f6b61855603cd4b0cf8b05708e6', name: "card-header" }), (this.card_title || this.subtitle) && (index.h("div", { key: '4679f16b1650d4cc5a07256313d3826326ca911f', class: "flex flex-col" }, this.card_title && (index.h("h4", { key: 'ea18cc1af0d1a055f5f8d8cac958d5ce9d7860bf', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (index.h("h5", { key: '67b3697eda28f9e654d35e689a5b6025f528187a', class: "text-light text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), index.h("slot", { key: 'cc39dc7959e701a10c983cafeabb7eb83b4ac49f', name: "card-header-actions" })), index.h("div", { key: 'fb58d8558dc200732827544a9fd1285d1c5f1d69', class: contentClassname, "data-name": "card-content" }, this.content, index.h("slot", { key: '9db55bc13a7755f1dbb5d0e958ddedac8d829c31' })), index.h("div", { key: '1eca7b45f5f9ede2590e8f35a84f81f27e9f2bfa', class: footerClassname }, index.h("slot", { key: '1416c3a83e5ec1aaa8d12cfe6b6cfa593489e38f', name: "card-footer" }))));
    }
};

exports.at_card = AtCardComponent;
