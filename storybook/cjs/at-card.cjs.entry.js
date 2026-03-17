'use strict';

var index = require('./index-CzDB71Wy.js');
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
        return (index.h(index.Host, { key: '2aad49b9c47c5ca0e202d23795164230fcd323b8', class: containerClassname }, index.h("div", { key: '0141c10a1c5a8b2cfb5846c0f6cf83f63ae80590', class: `${headerClassname}` }, index.h("slot", { key: 'ceb88b8af1eb03b2910dfdc27863d65cae4fd139', name: "card-header" }), (this.card_title || this.subtitle) && (index.h("div", { key: 'fa90846a2b97dc690d2172396f4170adb86eb068', class: "flex flex-col" }, this.card_title && (index.h("h4", { key: 'd36ab0452fce24e0ec858f1f57f1303390cb7c37', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (index.h("h5", { key: '7aefcd0bb8e19c3bbba0bbdf203f0bf171d3a3d8', class: "text-light text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), index.h("slot", { key: '9e2770353ecf26def1deee4ffbefce99714783f2', name: "card-header-actions" })), index.h("div", { key: 'd40b24e7ec90d81ed3d803ce461184acd3fdd5bd', class: contentClassname, "data-name": "card-content" }, this.content, index.h("slot", { key: '8006d297ab50c5c3bc71cddf2bb3beded5be2ca2' })), index.h("div", { key: 'c78e5dd0187195df54808262d243f0c579789616', class: footerClassname }, index.h("slot", { key: 'f1e59e02c1931f87525ebf603ae94cd626763a56', name: "card-footer" }))));
    }
};

exports.at_card = AtCardComponent;
