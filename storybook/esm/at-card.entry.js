import { r as registerInstance, h, H as Host } from './index-BEGRcYEc.js';
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
        return (h(Host, { key: '7ba52254967f336bf0b90fa5b95a8b28eb9877d0', class: containerClassname }, h("div", { key: '1c32a0cd15454567ea64250620ccbc70250c1c31', class: `${headerClassname}` }, h("slot", { key: '09113ccf9da4ff2bc095d85b07e2c3c737c13742', name: "card-header" }), (this.card_title || this.subtitle) && (h("div", { key: '2c9dc2672a62e29da25080bc30e4b223b881660d', class: "flex flex-col" }, this.card_title && (h("h4", { key: '960d4f3a5027e4a7dba5c4f4ff5816b6da17fc73', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (h("h5", { key: '757bf081de3843e186abce5d6243b82e0c389e70', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), h("slot", { key: '509279d5cfcd1f0e172132cb18b49a528cec3d80', name: "card-header-actions" })), h("div", { key: 'ece57363fa01ff4feb31da82569d9ac440003c3c', class: contentClassname, "data-name": "card-content" }, this.content, h("slot", { key: 'b085362a29ae4557842386611fa4e937c28198df' })), h("div", { key: '1f537dd058f8ec9dfefa8a7b62c157643897eca7', class: footerClassname }, h("slot", { key: 'e3a6200ea9a8a0fc3c1c2f7a840f1394ff49482c', name: "card-footer" }))));
    }
};

export { AtCardComponent as at_card };
