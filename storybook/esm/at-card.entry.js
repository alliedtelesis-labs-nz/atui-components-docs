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
        return (h(Host, { key: '5c22204af0789c246a4393d7a7179be82afa9d7c', class: containerClassname }, h("div", { key: '71ba313a8a370af6d7379041e97e7f69e55df74a', class: `${headerClassname}` }, h("slot", { key: 'f402892a6830500224a67634b79e3c258a56edd0', name: "card-header" }), (this.card_title || this.subtitle) && (h("div", { key: 'b96d5d76b92370231e5d88c3cddff1da48596723', class: "flex flex-col" }, this.card_title && (h("h4", { key: 'e1f2bee4a5a6abc3c93c6ef512baff3652f170c1', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (h("h5", { key: '16f7ab6bfe3ecb1bec65c6c0545fe521f40fb8d7', class: "text-light text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), h("slot", { key: 'c737b30a5f8e872a80add6f13bda5a8b5e4c8874', name: "card-header-actions" })), h("div", { key: '7941518e74e4158833f1d23cdfb9fef763471275', class: contentClassname, "data-name": "card-content" }, this.content, h("slot", { key: '086f4174d34da296b216ad5e7a68b03a4ab3135a' })), h("div", { key: '080eaae85f4c6cc436fe83ecf2eb3512f32935b4', class: footerClassname }, h("slot", { key: 'bd757397f748c1b6208507710f2d781d7d9810c1', name: "card-footer" }))));
    }
};

export { AtCardComponent as at_card };
