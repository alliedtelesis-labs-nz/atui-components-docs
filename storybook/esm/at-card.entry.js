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
        return (h(Host, { key: '6c14866ba0b5d0bde38fa44ed9d0aeed9f80d263', class: containerClassname }, h("div", { key: '5802f4783fcab5a8516d335b1ab640e1ad9af675', class: `${headerClassname}` }, h("slot", { key: 'c3093122ee9ac5dcaaf55d0fa0a314ee3480b823', name: "card-header" }), (this.card_title || this.subtitle) && (h("div", { key: '68cf7c7b3db188611129c05e23f6a892b36d3cbb', class: "flex flex-col" }, this.card_title && (h("h4", { key: 'cd5bc811f06075fd1c7b0698674b2b06dbcbb267', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (h("h5", { key: '75430dabbaeec6aa2d279ce80639caa8848061ab', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), h("slot", { key: 'bb5337b7cf0fca8c07ed89a6a0232d6baba71e60', name: "card-header-actions" })), h("div", { key: '076db8c8ca9b5a4a3d952a32de47f373569fcab3', class: contentClassname, "data-name": "card-content" }, this.content, h("slot", { key: 'f0cd75c542c8a94e4df1e93810373445b268d609' })), h("div", { key: '8b6e013e099bb1cb631b44c87d47b58dc6724543', class: footerClassname }, h("slot", { key: 'e82530b13f636a68b8092d7dca1aa7807e474fb5', name: "card-footer" }))));
    }
};

export { AtCardComponent as at_card };
