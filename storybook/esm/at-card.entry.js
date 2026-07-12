import { r as registerInstance, h, H as Host } from './index-8e2OpwTu.js';
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
        return (h(Host, { key: '15cc7a0e3aa9454029354ee9f3421f4662c8824c', class: containerClassname }, h("div", { key: '20d0090ebf840d69ff321af05915927c26dffc46', class: `${headerClassname}` }, h("slot", { key: '599f12f99bc249c2e5fcba2268e51c53f986d209', name: "card-header" }), (this.card_title || this.subtitle) && (h("div", { key: '0b2e0730b4625c0f04789bfa228c4d89ea9801a5', class: "flex flex-col" }, this.card_title && (h("h4", { key: '43da2b107360b1d0f14f70d2e8a3ba80fa29aa05', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (h("h5", { key: '94f0f10b60e2dbd0df8f55d49b755eb5a4449c42', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), h("slot", { key: '69120a3d030477a9bf9ceb737a2ea9ac5f1b09be', name: "card-header-actions" })), h("div", { key: '258eb9d1d855c099929dd08791c4f7399e99e5bd', class: contentClassname, "data-name": "card-content" }, this.content, h("slot", { key: 'd20b40bc825adf39611dbd154ae11625eceb8e35' })), h("div", { key: '3821b97e939a9c836d7eb1a39a121688093d97fc', class: footerClassname }, h("slot", { key: '749495006d72509178840e1cb366eeab0f7f13b9', name: "card-footer" }))));
    }
};

export { AtCardComponent as at_card };
