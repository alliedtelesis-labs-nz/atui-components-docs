'use strict';

var index = require('./index-nKeTsW5N.js');
var index$1 = require('./index-palgSxc9.js');

const containerVariants = index$1.cva('flex flex-col overflow-hidden rounded-lg bg-card', {
    variants: {
        shadow: {
            none: 'shadow-none',
            sm: 'shadow-sm',
            lg: 'shadow-lg',
        },
    },
});
const contentVariants = index$1.cva('relative flex flex-auto flex-col', {
    variants: {
        padding: {
            true: 'px-16 pb-16 pt-8',
            false: 'p-0',
        },
        overflow: {
            true: 'overflow-y-auto',
            false: '',
        },
    },
});
const headerVariants = index$1.cva('hide-empty z-10 flex items-center justify-between p-16', {
    variants: {
        sticky: {
            true: 'sticky top-0 bg-card/80 backdrop-blur',
            false: '',
        },
    },
});
const footerVariants = index$1.cva('hide-empty z-index-10 p-16', {
    variants: {
        sticky: {
            true: 'sticky bottom-0 bg-card/80 backdrop-blur',
            false: '',
        },
    },
});
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
        this.shadow = 'sm';
    }
    render() {
        const containerClassname = containerVariants({
            shadow: this.shadow,
        });
        const contentClassname = contentVariants({
            padding: this.padding,
            overflow: this.overflow_content,
        });
        const headerClassname = headerVariants({
            sticky: this.sticky_header,
        });
        const footerClassname = footerVariants({
            sticky: this.sticky_footer,
        });
        return (index.h(index.Host, { key: '569e08d70abfd7a2b8aa6a345ed3be8e4826761a', class: containerClassname }, index.h("div", { key: 'b28e574833492e955f3d6b6f19b9dc6a76289552', class: headerClassname }, index.h("slot", { key: '6fc1b3a86de1462cee6ad88c1dfae9cae5e19075', name: "card-header" }), (this.card_title || this.subtitle) && (index.h("div", { key: 'f7ab93aa292fc66330c2d65d44d84803dddd14ce', class: "flex flex-col" }, this.card_title && (index.h("h4", { key: '29f2686ee38371688d1d0caa65f9f4589fad000b', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (index.h("h5", { key: '5acd54676e27d80f5d94c45af8fa76ad35653652', class: "text-sm text-light", "data-name": "card-subtitle" }, this.subtitle)))), index.h("slot", { key: 'ed802ab617984ca5ac54e9d3261f085cd1694e02', name: "card-header-actions" })), index.h("div", { key: '5595c4b127a63da43616074c967cf91049958fc8', class: contentClassname, "data-name": "card-content" }, this.content, index.h("slot", { key: 'fb123b513146973b37393982bfb4be11ba0039a3' })), index.h("div", { key: '971047f4bbde10f3b33173d9a11d2245fe9e8984', class: footerClassname }, index.h("slot", { key: '74656943f39a9b442cd4ee56b2831d06eed9aa01', name: "card-footer" }))));
    }
};

exports.atui_card = AtuiCardComponent;
//# sourceMappingURL=atui-card.entry.cjs.js.map

//# sourceMappingURL=atui-card.cjs.entry.js.map