import { p as proxyCustomElement, H, h, c as Host } from './p-DzGFYGds.js';
import { c as cva } from './p-CVoOBWGd.js';

const containerVariants = cva('flex flex-col overflow-hidden rounded-lg bg-card', {
    variants: {
        shadow: {
            none: 'shadow-none',
            sm: 'shadow-sm',
            lg: 'shadow-lg',
        },
    },
});
const contentVariants = cva('relative flex flex-auto flex-col', {
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
const headerVariants = cva('hide-empty z-10 flex items-center justify-between p-16', {
    variants: {
        sticky: {
            true: 'sticky top-0 bg-card/80 backdrop-blur',
            false: '',
        },
    },
});
const footerVariants = cva('hide-empty z-index-10 p-16', {
    variants: {
        sticky: {
            true: 'sticky bottom-0 bg-card/80 backdrop-blur',
            false: '',
        },
    },
});
const AtuiCardComponent = /*@__PURE__*/ proxyCustomElement(class AtuiCardComponent extends H {
    constructor() {
        super();
        this.__registerHost();
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
        return (h(Host, { key: '569e08d70abfd7a2b8aa6a345ed3be8e4826761a', class: containerClassname }, h("div", { key: 'b28e574833492e955f3d6b6f19b9dc6a76289552', class: headerClassname }, h("slot", { key: '6fc1b3a86de1462cee6ad88c1dfae9cae5e19075', name: "card-header" }), (this.card_title || this.subtitle) && (h("div", { key: 'f7ab93aa292fc66330c2d65d44d84803dddd14ce', class: "flex flex-col" }, this.card_title && (h("h4", { key: '29f2686ee38371688d1d0caa65f9f4589fad000b', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (h("h5", { key: '5acd54676e27d80f5d94c45af8fa76ad35653652', class: "text-sm text-light", "data-name": "card-subtitle" }, this.subtitle)))), h("slot", { key: 'ed802ab617984ca5ac54e9d3261f085cd1694e02', name: "card-header-actions" })), h("div", { key: '5595c4b127a63da43616074c967cf91049958fc8', class: contentClassname, "data-name": "card-content" }, this.content, h("slot", { key: 'fb123b513146973b37393982bfb4be11ba0039a3' })), h("div", { key: '971047f4bbde10f3b33173d9a11d2245fe9e8984', class: footerClassname }, h("slot", { key: '74656943f39a9b442cd4ee56b2831d06eed9aa01', name: "card-footer" }))));
    }
}, [260, "atui-card", {
        "card_title": [1],
        "subtitle": [1],
        "content": [1],
        "overflow_content": [4],
        "sticky_header": [4],
        "sticky_footer": [4],
        "padding": [4],
        "shadow": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-card"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiCardComponent);
            }
            break;
    } });
}

const AtuiCard = AtuiCardComponent;
const defineCustomElement = defineCustomElement$1;

export { AtuiCard, defineCustomElement };
//# sourceMappingURL=atui-card.js.map

//# sourceMappingURL=atui-card.js.map