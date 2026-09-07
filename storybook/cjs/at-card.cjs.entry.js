'use strict';

var index = require('./index-ByfMXhOa.js');
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
        return (index.h(index.Host, { key: 'c9fe91250f0d79026dc8cdd2ee747c83f38a95f8', class: containerClassname }, index.h("div", { key: 'f36e5d1ee23e5f614d0e0f38a0e1ebf30dc1477e', class: `${headerClassname}` }, index.h("slot", { key: '3195801e6d7e3f09cd487b848e022f8d80102b1c', name: "card-header" }), (this.card_title || this.subtitle) && (index.h("div", { key: 'a678d6f052c9482d1fd6fcefad8fe2ffd31c7724', class: "flex min-w-0 flex-1 flex-col break-words" }, this.card_title && (index.h("h4", { key: '665a5f7b9f48e40c9906ec52137b9570e843e846', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (index.h("h5", { key: '03d498d2a5c72aa484e8fbfa470ad7200a47378b', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), index.h("slot", { key: 'b4740aaa9375d4b822f176b15caa2c2b87d2a1f2', name: "card-header-actions" })), index.h("div", { key: '3299dd9e5a40daf4ef2d1c00c13fc12b81de59c3', class: contentClassname, "data-name": "card-content" }, this.content, index.h("slot", { key: '6f166c24a47048ff5afd0f7f0a0efc9c06df96e4' })), index.h("div", { key: '701753d1260c89ade899f6d05f98458f10e7f717', class: footerClassname }, index.h("slot", { key: '3998ca7dbd71d14b74a76202f1a7c2fa2020232d', name: "card-footer" }))));
    }
};

exports.at_card = AtCardComponent;
