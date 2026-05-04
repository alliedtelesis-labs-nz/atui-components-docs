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
        return (h(Host, { key: '670bfbaee8652cc935a4c0705c26d4a270606641', class: containerClassname }, h("div", { key: '577337da964e14f7173a927dfe006d04d2cbc25d', class: `${headerClassname}` }, h("slot", { key: '9bbb461ad873bc74efdbf8105300a882ff87a5b0', name: "card-header" }), (this.card_title || this.subtitle) && (h("div", { key: '74f60156eba9ed241a8ad7fd390d30a0b201d0e6', class: "flex flex-col" }, this.card_title && (h("h4", { key: '4b734f0614904bf5b2d2bc8e7b79e7f98fb6c388', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (h("h5", { key: '05d06eee467d29e8ad74d3119f3ca6cb416019e7', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), h("slot", { key: 'a5c1bcf0ec42144299be0ed049da4b1ad951c166', name: "card-header-actions" })), h("div", { key: 'f41f4dc4af21c9da11cd8680fa0d3c0dc3524f2e', class: contentClassname, "data-name": "card-content" }, this.content, h("slot", { key: '21133fbeec85f0938a9ed23f32a286269bd28773' })), h("div", { key: '26d2de45549b2abaaff713d678c0ea740c14997e', class: footerClassname }, h("slot", { key: '063438559149f3bc979a228cd003945fedd64cee', name: "card-footer" }))));
    }
};

export { AtCardComponent as at_card };
