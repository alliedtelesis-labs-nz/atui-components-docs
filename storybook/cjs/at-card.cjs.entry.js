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
        return (index.h(index.Host, { key: '0f33739d95f69fead2f11f682008b180b6b67053', class: containerClassname }, index.h("div", { key: '7c1621b2b354e169b01489d795f1f2dc43d97e9d', class: headerClassname }, index.h("slot", { key: 'ed8792a4f6d6352ad5dd2ea228b51a9940fff16a', name: "card-header" }), (this.card_title || this.subtitle) && (index.h("div", { key: '44302d7c95d5de3b91a867f71744ac33584923a0', class: "flex flex-col" }, this.card_title && (index.h("h4", { key: 'ac60f4b79621c0ed5c437b8a40f295d6fe843294', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (index.h("h5", { key: '6249beebc6feb0e5324b2eef103cb30784bfea98', class: "text-light text-sm", "data-name": "card-subtitle" }, this.subtitle)))), index.h("slot", { key: 'fe281ca7ecc2d1bf68e18bf258222c502790cf35', name: "card-header-actions" })), index.h("div", { key: '08e8fe60458018165de2c9b7b44945278ab39e90', class: contentClassname, "data-name": "card-content" }, this.content, index.h("slot", { key: '693f6d4fcb79d80ce7b086d11570248b79466a56' })), index.h("div", { key: 'b7e82cbe517161bfe1c078f2e3630f73e8a9566b', class: footerClassname }, index.h("slot", { key: '8a3749a5ba2a1593f07cd8a9322823a8f4f012a0', name: "card-footer" }))));
    }
};

exports.at_card = AtCardComponent;
//# sourceMappingURL=at-card.entry.cjs.js.map
