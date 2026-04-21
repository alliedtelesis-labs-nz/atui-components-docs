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
        return (h(Host, { key: '04508b400a2ba7046b41dcdbf53f3c9908af9da0', class: containerClassname }, h("div", { key: 'd289106320d484cedd4f4e8514dc7e209ba16c11', class: `${headerClassname}` }, h("slot", { key: 'c32be26b3c2909ff8beba0732d701069c4e7835c', name: "card-header" }), (this.card_title || this.subtitle) && (h("div", { key: '1c6dbf3cf8a4a2e983a0b2a762a72592ca25ce2f', class: "flex flex-col" }, this.card_title && (h("h4", { key: '356ee9008d5d63f682831644a1cd6e89c03d77df', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (h("h5", { key: '5d986b1f636457173e73c2984cce9944c80b09ba', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), h("slot", { key: 'c3f37e85e72169666860de97c06319ccf599066e', name: "card-header-actions" })), h("div", { key: '7ef64c1e8d1c6f65185e74ec4ade89a8d4f50655', class: contentClassname, "data-name": "card-content" }, this.content, h("slot", { key: '87db69059cd7d668a013ac3b3c9a3b9f9fbfef09' })), h("div", { key: '8a03e54a5d205873e375e889d837056257dbe286', class: footerClassname }, h("slot", { key: '7504e569d4d31246ec124752f118424ba77b9ce7', name: "card-footer" }))));
    }
};

export { AtCardComponent as at_card };
