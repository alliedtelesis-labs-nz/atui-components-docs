'use strict';

var index = require('./index-i7hIKTeN.js');
var classlist = require('./classlist-BddvonaD.js');

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
const AtuiCardComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Enables overflow on the content area. If false overflow will be applied on the host.
         */
        this.overflow_content = false;
        /**
         * Display header persistently at top of card.
         */
        this.sticky_header = true;
        /**
         * Display footer persistently at bottom of card.
         */
        this.sticky_footer = true;
        /**
         * Apply or remove padding form the card content area.
         */
        this.padding = true;
        /**
         * Box-shadow around card.
         */
        this.shadow = 'none';
    }
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
        return (index.h(index.Host, { key: 'b86a4202992014d9bed779cacee11479d19d8ba2', class: containerClassname }, index.h("div", { key: 'd58a6cd4ea1e0e8b769f58e16f02ce04d083dc7b', class: headerClassname }, index.h("slot", { key: '2a48db1ef318d5ada535af8c6f6b49f646f6cbdd', name: "card-header" }), (this.card_title || this.subtitle) && (index.h("div", { key: '1b2bcb07a27c3a7c4589ce24c8c570eb5a6e20fe', class: "flex flex-col" }, this.card_title && (index.h("h4", { key: 'ddf2653e347f09c4149342c8a672ba4146f398d2', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (index.h("h5", { key: 'aa4206b6da219c95d68391996eade119c2c60779', class: "text-light text-sm", "data-name": "card-subtitle" }, this.subtitle)))), index.h("slot", { key: 'bf14b7c57e42006fcf467fa19e6d770f2b124d54', name: "card-header-actions" })), index.h("div", { key: 'ea4785380d7e7ce36ec572c1a54174cc15349243', class: contentClassname, "data-name": "card-content" }, this.content, index.h("slot", { key: '30fba60c17a43eec0ea36038bd68c8933e295b58' })), index.h("div", { key: '8bc16950940a44e58166d74190a7362324716e86', class: footerClassname }, index.h("slot", { key: '83fb2766e2a5e793d8091f92f986d50e702a61de', name: "card-footer" }))));
    }
};

exports.atui_card = AtuiCardComponent;
//# sourceMappingURL=atui-card.entry.cjs.js.map

//# sourceMappingURL=atui-card.cjs.entry.js.map