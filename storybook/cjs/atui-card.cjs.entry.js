'use strict';

var index = require('./index-DGivrgtr.js');
var index$1 = require('./index-palgSxc9.js');

const containerVariants = index$1.cva('flex flex-col rounded-lg bg-card', {
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
        return (index.h(index.Host, { key: 'e21ddb892b611a6835b6793157e85b4d78ae5f8e', class: containerClassname }, index.h("div", { key: 'abacc10becccf8beaeca7db98c59dfddf22627ae', class: headerClassname }, index.h("slot", { key: 'f35a0f5c8efb95e9319f6d14633796882f621e6d', name: "card-header" }), (this.card_title || this.subtitle) && (index.h("div", { key: 'df40b5335b1845574e6a94845bbf83cdb4b248bc', class: "flex flex-col" }, this.card_title && (index.h("h4", { key: '2971b555f73def51efc2e41474f24ed85887b314', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (index.h("h5", { key: '143b34c31f32edb620b94eab918ec267a7931412', class: "text-sm text-light", "data-name": "card-subtitle" }, this.subtitle)))), index.h("slot", { key: '2f1e73887410730103cb6843e4b6016411e46dbe', name: "card-header-actions" })), index.h("div", { key: 'f4a4a45ab3d53e99a6355829954e473887c85690', class: contentClassname, "data-name": "card-content" }, this.content, index.h("slot", { key: '80c5945bd6690f79e36ea6b05716f44a3e2c1cba' })), index.h("div", { key: '349e2d6a969c7d44aca9addbbeb982441cfd006a', class: footerClassname }, index.h("slot", { key: '775fcdbb6b08706c7f1ff2911305bb0895eb5427', name: "card-footer" }))));
    }
};

exports.atui_card = AtuiCardComponent;
//# sourceMappingURL=atui-card.entry.cjs.js.map

//# sourceMappingURL=atui-card.cjs.entry.js.map