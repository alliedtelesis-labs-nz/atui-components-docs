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
        return (index.h(index.Host, { key: '8e8eb1f0a8c0a82a223924b1817186671e1964a3', class: containerClassname }, index.h("div", { key: '82dbff5bf1eb6685c5d2cd8ecd037fc1303ff1e7', class: `${headerClassname}` }, index.h("slot", { key: 'f9950bc5fbc23e5200aabde663d5c00e8f409f90', name: "card-header" }), (this.card_title || this.subtitle) && (index.h("div", { key: '7b3fe4ccd63760241371f81033ea8b1bd6183f8c', class: "flex flex-col" }, this.card_title && (index.h("h4", { key: 'a193d4b71a1a65a08956d0f13619bce85d10c6c0', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (index.h("h5", { key: '76313dc94e0a94a8741e07653ce6b83e8dd6ba12', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), index.h("slot", { key: 'bb3c461b25f825c914db651a2a30e49e4df3b659', name: "card-header-actions" })), index.h("div", { key: 'cc54c979168f688c61a1c9435392037415a73127', class: contentClassname, "data-name": "card-content" }, this.content, index.h("slot", { key: '328d460a6e0e70b4ce3b391ced4839b8e9006b79' })), index.h("div", { key: 'd29b9ed3ea5d11a03e97285dba7d7050595a4c0a', class: footerClassname }, index.h("slot", { key: 'e9412ee2634080a8dbf98ad1e5473d1055a7e766', name: "card-footer" }))));
    }
};

exports.at_card = AtCardComponent;
