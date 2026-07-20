'use strict';

var index = require('./index-e0g5edej.js');
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
        return (index.h(index.Host, { key: '4bd5ab9c6e70fc68397834572328ec7ca1085a62', class: containerClassname }, index.h("div", { key: '0d2e29206c3c62f6efca6c605c69c5579913991d', class: `${headerClassname}` }, index.h("slot", { key: '59ad864702178c56e11289f04ab1fc0487826a57', name: "card-header" }), (this.card_title || this.subtitle) && (index.h("div", { key: 'ce9e3034e395b89b4f328827c054a1f0d91049a7', class: "flex flex-col" }, this.card_title && (index.h("h4", { key: 'e72220c99dac21e4e553cf65867b3c5469670ab0', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (index.h("h5", { key: '2fff3a0a5a89c4fa0d48eea03216220e6bf964ed', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), index.h("slot", { key: '038c4a9cca65dce91f895c0e97d406628e3d1217', name: "card-header-actions" })), index.h("div", { key: 'b69c940c931e30386183b0723dbc1f1f0cc05764', class: contentClassname, "data-name": "card-content" }, this.content, index.h("slot", { key: 'e53a980d0caf756598c678fb467436e78cd8de14' })), index.h("div", { key: 'c9e90c58d8d7f0492bbee9e8a55708213d86db45', class: footerClassname }, index.h("slot", { key: '29654bdd15b35838b8a40316ffc2b45a97297aa7', name: "card-footer" }))));
    }
};

exports.at_card = AtCardComponent;
