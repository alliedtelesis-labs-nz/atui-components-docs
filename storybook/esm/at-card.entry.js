import { r as registerInstance, h, H as Host } from './index-Dm8LkzEZ.js';
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
        return (h(Host, { key: '42d70913743eb16825b00ee7f1d5ab8d8808560d', class: containerClassname }, h("div", { key: 'c923eec0da101e39744024b6f784d7b30e2130bc', class: `${headerClassname}` }, h("slot", { key: 'f6232de4b54292ca5e3b9802ec246d29b55fc0fb', name: "card-header" }), (this.card_title || this.subtitle) && (h("div", { key: 'b077f8d44d7ee1489ac155d5619758085ffea2ee', class: "flex flex-col" }, this.card_title && (h("h4", { key: '64b9cc2a446859756dd39f5e851563491d7f28b7', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (h("h5", { key: '43912dfd651dfede6d11b12d1fd061b16d65ac85', class: "text-light text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), h("slot", { key: 'fede9ef4d2dca24f0e43e38910f8db4581f0e2cd', name: "card-header-actions" })), h("div", { key: '942fddd54cca87531aac86f6cbd3533486bf0835', class: contentClassname, "data-name": "card-content" }, this.content, h("slot", { key: 'bf31f116d3205f7fb6d6ccdf87486c045148a509' })), h("div", { key: '9a841144345c4b48ef51bc6fadec03a07c508b86', class: footerClassname }, h("slot", { key: 'ffdcdaccd0e15886e47734206488d3ae72bc1495', name: "card-footer" }))));
    }
};

export { AtCardComponent as at_card };
