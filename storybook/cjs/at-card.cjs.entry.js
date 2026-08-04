'use strict';

var index = require('./index-EXiXggWw.js');
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
        return (index.h(index.Host, { key: '5bd8bb7451befad28377405257104a1a7454917f', class: containerClassname }, index.h("div", { key: 'a9990f9c91bcba1a24bf5e309015a4a0b96c3b9a', class: `${headerClassname}` }, index.h("slot", { key: 'f3dd28e7447403c30c740b980051bfbe9c9e89a0', name: "card-header" }), (this.card_title || this.subtitle) && (index.h("div", { key: 'c0ca62dd0cb287b9962189d4ca13b0bc7b145012', class: "flex flex-col" }, this.card_title && (index.h("h4", { key: 'd1be4fbab42e21220346f2ba68a4e992aa594cbb', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (index.h("h5", { key: 'a71ff454b950a343bf8eb1ac9450003982252da9', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), index.h("slot", { key: '4953f94d0679a014145abf767ccf8feea59ac914', name: "card-header-actions" })), index.h("div", { key: '893b454d979e9f98005d0e6a1a04d104191ac0ee', class: contentClassname, "data-name": "card-content" }, this.content, index.h("slot", { key: '446b3e9b7a7de41f913e0ffd0c0c9eef3f1b70ee' })), index.h("div", { key: 'ade0f5dd1542fdf22869f90af624afd109dc532f', class: footerClassname }, index.h("slot", { key: '665caab91f0517dfb8f29e89dc5f0aa361bc589e', name: "card-footer" }))));
    }
};

exports.at_card = AtCardComponent;
