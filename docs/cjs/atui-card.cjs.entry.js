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
        return (index.h(index.Host, { key: '334b6807f1b2d12498e15323fbb0354ad00137cd', class: containerClassname }, index.h("div", { key: '8c94e34f2fa96a1246d22d14a97c67d17d68aa32', class: headerClassname }, index.h("slot", { key: '9122cb34d1fe09a7277a5b81b5a07406de080c50', name: "card-header" }), (this.card_title || this.subtitle) && (index.h("div", { key: '34f96edbf80a532ca40e0352b74c3c1c4a02c9a8', class: "flex flex-col" }, this.card_title && (index.h("h4", { key: '2c87e705e782f29539acd72165cd8fd95210db5b', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (index.h("h5", { key: 'd25d42e9e94235a44d612df6bd24cbab6c9a4d3c', class: "text-sm text-light", "data-name": "card-subtitle" }, this.subtitle)))), index.h("slot", { key: 'a2f4ada16535e803402312872b57e3e7ebd1b7a8', name: "card-header-actions" })), index.h("div", { key: 'f5046fc26d604a19f1d9b8318244603b92e996e0', class: contentClassname, "data-name": "card-content" }, this.content, index.h("slot", { key: '8b643ef35b5d413f9044b26b345770c69ff67363' })), index.h("div", { key: '53543c3ff21950df3b41456665dcfb9fa16403fb', class: footerClassname }, index.h("slot", { key: '35fafa174c3568734c57c341c433c86a8a6739de', name: "card-footer" }))));
    }
};

exports.atui_card = AtuiCardComponent;
//# sourceMappingURL=atui-card.entry.cjs.js.map

//# sourceMappingURL=atui-card.cjs.entry.js.map