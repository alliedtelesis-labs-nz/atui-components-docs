import { r as registerInstance, h, H as Host } from './index-jvbUuQtg.js';
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
        const getContainerClassname = classlist('relative z-1 border border-light bg-card flex flex-col overflow-hidden rounded-lg', containerVariantsConfig);
        const containerClassname = getContainerClassname({
            shadow: this.shadow,
        });
        const getHeaderClassname = classlist('hide-empty relative z-2 flex items-center justify-between gap-8 rounded-t-lg p-16', headerVariantsConfig);
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
        return (h(Host, { key: '5fb2e61a895d3fe19ced525d7b2b21a212104475', class: containerClassname }, h("div", { key: 'f26e5cc40bb7691a50c209c4c4948fba4af76b8f', class: headerClassname }, h("slot", { key: 'a4eea2409d5296a042e81287e6dda0e4ff68cd45', name: "card-header" }), (this.card_title || this.subtitle) && (h("div", { key: 'b426e99ba553c5edde1074622115b4e88ca86e07', class: "flex flex-col" }, this.card_title && (h("h4", { key: '7f30e07d5ff1b4e7fef8cf11e77be0c21f6e2dbd', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (h("h5", { key: '2ffd712a4df2112e58ff416f392c6dd75e6a5e87', class: "text-light text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), h("slot", { key: '97243bb41a25eb1663b733de56ae1d4ed6bc769d', name: "card-header-actions" })), h("div", { key: '73a57e039ce6fe5b52a2d4ca8b2d63e6a15b6b6d', class: contentClassname, "data-name": "card-content" }, this.content, h("slot", { key: '6c92bb867923ee2ebe691caaf50e3c22d9a26f67' })), h("div", { key: '3169de0da342b0fac533faa43f9cb06f0f014af3', class: footerClassname }, h("slot", { key: '771579be03f805205f35098c6e5c3f6899c84d1d', name: "card-footer" }))));
    }
};

export { AtCardComponent as at_card };
