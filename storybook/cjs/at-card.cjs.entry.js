'use strict';

var index = require('./index-DLWZuLsW.js');
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
     * When true the content area scrolls its own overflow (overflow-y auto),
     * keeping sticky headers/footers visible. When false, content that
     * exceeds the card is clipped by the card container.
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
        return (index.h(index.Host, { key: '4e33b01e6c8cf78817add4d54f073b1737d663b9', class: containerClassname }, index.h("div", { key: '60198f2f81430b9f8fba9b74072c4ba5c27ecd83', class: `${headerClassname}` }, index.h("slot", { key: '870197603b4144771b0c5195c40f8df1db44b8aa', name: "card-header" }), (this.card_title || this.subtitle) && (index.h("div", { key: 'd32702f4611984db149d296f3f63d498a17ea947', class: "flex min-w-0 flex-1 flex-col break-words" }, this.card_title && (index.h("h4", { key: '181edded0594cabad5ac429242ec3904c9102759', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (index.h("h5", { key: '6a0f1ee05dfeab5db595fb3142aa4ac037bac1e2', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), index.h("slot", { key: '877368ccbb39ba892e1e5fcd1edfbe76ac0dec0b', name: "card-header-actions" })), index.h("div", { key: '159e547358d93c2dadccf7f05e5d8e404183757a', class: contentClassname, "data-name": "card-content" }, this.content, index.h("slot", { key: 'af45becbd5e0b5455f8cff812ee365d27b87f490' })), index.h("div", { key: 'e675840ee6fcda420e8d190a3e731fae4b06c579', class: footerClassname }, index.h("slot", { key: '38df58eafeb05925cb765121bb88cb167ece215f', name: "card-footer" }))));
    }
};

exports.at_card = AtCardComponent;
