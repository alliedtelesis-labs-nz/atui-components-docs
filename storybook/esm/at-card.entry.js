import { r as registerInstance, h, H as Host } from './index-BQWIFs0G.js';
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
        const getContainerClassname = classlist('relative z-1  bg-card-background border-muted flex flex-col overflow-hidden rounded-lg', containerVariantsConfig);
        const containerClassname = getContainerClassname({
            shadow: this.shadow,
        });
        const getHeaderClassname = classlist('flex-wrap hide-empty relative z-20 flex items-center justify-between gap-8 rounded-t-lg p-16', headerVariantsConfig);
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
        return (h(Host, { key: '09f83b2d46e3ba7612da5b70ace9102d985d8bba', class: containerClassname }, h("div", { key: '8b48a2968d4871d6a646dc074ff1c7a2bbad941f', class: `${headerClassname}` }, h("slot", { key: '7f3a465ee23bc009b1d4d82dcbc207760ae221e0', name: "card-header" }), (this.card_title || this.subtitle) && (h("div", { key: 'c8f7254d94d4234b1e6cb01819cc59fff2ef2d0d', class: "flex flex-col" }, this.card_title && (h("h4", { key: 'bce33b77b9a42d569133d7e631913c8fb4d069de', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (h("h5", { key: '008144b3679a460525ff981a527ed83445d4bdc2', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), h("slot", { key: 'cd1a6631b60d0fecfc1d251d908f44708c538591', name: "card-header-actions" })), h("div", { key: 'bf0911317330e5b3c0a5d56fba4f6478d1dedf3e', class: contentClassname, "data-name": "card-content" }, this.content, h("slot", { key: '6d907087ad1ebbd7e09bf87f68d121859dd8c6df' })), h("div", { key: '719ff2ffbe99c254f3af0761df6b8a8534d1f3d9', class: footerClassname }, h("slot", { key: 'fbda516113acf9c16d3b34021bd3e09d485f3315', name: "card-footer" }))));
    }
};

export { AtCardComponent as at_card };
