import { p as proxyCustomElement, H, h, c as Host } from './p-89eupKrN.js';
import { c as classlist } from './p-COG8_R0C.js';

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
const AtCardComponent = /*@__PURE__*/ proxyCustomElement(class AtCardComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
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
        const getContainerClassname = classlist('relative z-1 border border-light bg-card flex flex-col overflow-hidden rounded-lg', containerVariantsConfig);
        const containerClassname = getContainerClassname({
            shadow: this.shadow,
        });
        const getHeaderClassname = classlist('hide-empty relative z-2 flex items-center justify-between gap-8 rounded-t-lg p-16', headerVariantsConfig);
        const headerClassname = getHeaderClassname({
            sticky: this.sticky_header,
        });
        const getContentClassname = classlist('relative flex flex-auto flex-col', contentVariantsConfig);
        const contentClassname = getContentClassname({
            padding: this.padding,
            overflow: this.overflow_content,
        });
        const getFooterClassname = classlist('hide-empty z-index-10 p-16', footerVariantsConfig);
        const footerClassname = getFooterClassname({
            sticky: this.sticky_footer,
        });
        return (h(Host, { key: 'f932a166a7e7576f06617dbc2a935e51a1592058', class: containerClassname }, h("div", { key: 'd9da4e8b6aabd35212be8ab94d3d59afb5199399', class: headerClassname }, h("slot", { key: '4ea67dae790b3622264c5e48f8a778bdebb6f1bf', name: "card-header" }), (this.card_title || this.subtitle) && (h("div", { key: '6e8635321bb2e79d1f099e10de29ebccab7d00d3', class: "flex flex-col" }, this.card_title && (h("h4", { key: '63df00dc6049f253d8a2a0cdec1340af92f4fa48', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (h("h5", { key: 'e2d2945d204cf285ff930d963b4afe3f9c5bb625', class: "text-light text-sm", "data-name": "card-subtitle" }, this.subtitle)))), h("slot", { key: '18a2733aeb03e8af91fdf95bb7d7b56b7adca105', name: "card-header-actions" })), h("div", { key: 'c2d0d02df0df86c057ee4feb0ead5d69380e6309', class: contentClassname, "data-name": "card-content" }, this.content, h("slot", { key: 'f3b29ef30a1b0fc9362f6b4ad3168bebd102f7d0' })), h("div", { key: 'b43fd2ba59096711609b2b43d4402e3b8fe26431', class: footerClassname }, h("slot", { key: '59a9c0889151e9da77a70ef827fb40aaa80f00ac', name: "card-footer" }))));
    }
}, [260, "at-card", {
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
    const components = ["at-card"];
    components.forEach(tagName => { switch (tagName) {
        case "at-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtCardComponent);
            }
            break;
    } });
}

const AtCard = AtCardComponent;
const defineCustomElement = defineCustomElement$1;

export { AtCard, defineCustomElement };
//# sourceMappingURL=at-card.js.map

//# sourceMappingURL=at-card.js.map