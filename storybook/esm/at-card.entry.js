import { r as registerInstance, h, H as Host } from './index-BAAX2Der.js';
import { c as classlist } from './classlist-COG8_R0C.js';

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
        registerInstance(this, hostRef);
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
        const getContainerClassname = classlist('relative z-1  bg-card-background border-subtle flex flex-col overflow-hidden rounded-lg', containerVariantsConfig);
        const containerClassname = getContainerClassname({
            shadow: this.shadow,
        });
        const getHeaderClassname = classlist('flex-wrap hide-empty relative z-2 flex items-center justify-between gap-8 rounded-t-lg p-16', headerVariantsConfig);
        const headerClassname = getHeaderClassname({
            sticky: this.sticky_header,
        });
        const getContentClassname = classlist('relative flex flex-auto flex-col min-h-0', contentVariantsConfig);
        const contentClassname = getContentClassname({
            padding: this.padding,
            overflow: this.overflow_content,
        });
        const getFooterClassname = classlist('hide-empty z-index-10 p-16', footerVariantsConfig);
        const footerClassname = getFooterClassname({
            sticky: this.sticky_footer,
        });
        return (h(Host, { key: 'd246faef54f2677532e0e4101d51d085fe824a93', class: containerClassname }, h("div", { key: '0be1c94a0fa9744f4c9901c929df62744baf621f', class: `${headerClassname}` }, h("slot", { key: 'd431d305c437f5027047cfbb7daf6eccfce65588', name: "card-header" }), (this.card_title || this.subtitle) && (h("div", { key: 'c0c96fd14c1c91b2ea4e761d885499ab303d6fcc', class: "flex flex-col" }, this.card_title && (h("h4", { key: 'ba7e6358378ef60c1a7a1a5105f9deba20671a70', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (h("h5", { key: '9890e35fc2bbdcb14ef4bf72f4a29316d1551154', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), h("slot", { key: '053f88ff8ef558f1778c240e86f7ed587d4b4ec2', name: "card-header-actions" })), h("div", { key: '43673b67aab1a032498df2ce0b97a9c89523b62d', class: contentClassname, "data-name": "card-content" }, this.content, h("slot", { key: '30fa21b168457d3c2a11077c577739ef168ad929' })), h("div", { key: 'be9868918884ca2903fcce733048f269438321bf', class: footerClassname }, h("slot", { key: '909b84a0c163af1efcc3f56739cfc6a6d9d5b7e0', name: "card-footer" }))));
    }
};

export { AtCardComponent as at_card };
