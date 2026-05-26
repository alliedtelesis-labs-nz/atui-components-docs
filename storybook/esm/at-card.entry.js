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
        return (h(Host, { key: 'a1a27eb63af0720c042f155092b70a37496196eb', class: containerClassname }, h("div", { key: '76a4aeeba8fefead154c928c6d46c1161028b4ac', class: `${headerClassname}` }, h("slot", { key: '192dcc66bd9c2673ad67d542a9c43af79a156ac6', name: "card-header" }), (this.card_title || this.subtitle) && (h("div", { key: 'ea82312d423f0795cf55c537e3823732f6c0317a', class: "flex flex-col" }, this.card_title && (h("h4", { key: '4a688b7e30a9c738dec68c76785c978b3df601c8', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (h("h5", { key: '1bef68cea94e0c54b4b98e98739fde0defd43d6c', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), h("slot", { key: 'bab1c8688ca8bab49c19dd2ba9a6f5c3a1223c75', name: "card-header-actions" })), h("div", { key: 'f8b2080def2ceab471b29a0962d36b393cd09ad6', class: contentClassname, "data-name": "card-content" }, this.content, h("slot", { key: 'f517efa9faa57d8939d1a0a65366e077fb5b4f28' })), h("div", { key: 'c2bcd7470214b86a4c64ac6369196c1c4f16470e', class: footerClassname }, h("slot", { key: 'a6c2e8d9d240dd1800e19e7b30482be29a7cb7d3', name: "card-footer" }))));
    }
};

export { AtCardComponent as at_card };
