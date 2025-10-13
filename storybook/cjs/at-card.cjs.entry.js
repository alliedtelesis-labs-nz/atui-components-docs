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
        return (index.h(index.Host, { key: '3794b2cefe4f00892511f14b0eb7f9dd9a1bdeab', class: containerClassname }, index.h("div", { key: 'b06291de9c9b1d91d5e32d41f9c9375d7c26d9dc', class: headerClassname }, index.h("slot", { key: 'd101ad3bf00576e5df4524ea6129d15ef5df0ed1', name: "card-header" }), (this.card_title || this.subtitle) && (index.h("div", { key: 'c4d4e9730f4c46a19dc0feb590d6d5914ef1fd80', class: "flex flex-col" }, this.card_title && (index.h("h4", { key: '966906e73b3d0949b87d29f6a47234a008fcbd39', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (index.h("h5", { key: '9b2034451681ac4783ad07195db39f0f0b4853a1', class: "text-light text-sm", "data-name": "card-subtitle" }, this.subtitle)))), index.h("slot", { key: 'f059c6af234c9a4d0c1c97391b46bee939081734', name: "card-header-actions" })), index.h("div", { key: '44427271634d6d39d71bb7a0a5fe072267a90070', class: contentClassname, "data-name": "card-content" }, this.content, index.h("slot", { key: 'b82549393697181d36ed6bd8c74da61769fc606a' })), index.h("div", { key: '06726f6de4586e0fd6b91a62397788ceca3b9145', class: footerClassname }, index.h("slot", { key: 'e57a8c5149f8f5d134eacee8fd5043416d94e245', name: "card-footer" }))));
    }
};

exports.at_card = AtCardComponent;
//# sourceMappingURL=at-card.entry.cjs.js.map
