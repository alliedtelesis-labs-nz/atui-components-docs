import { r as registerInstance, h, H as Host } from './index-CKYs7vaG.js';
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
     * When true the content area scrolls its own overflow (overflow-y auto),
     * keeping sticky headers/footers visible. When false, content that
     * exceeds the card is clipped by the card container.
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
        return (h(Host, { key: 'b11c377533dc8f52392acdf4ab577931fb3e80ad', class: containerClassname }, h("div", { key: 'b3e3d1595bc9b268d7ba86aec1b661aa77a29343', class: `${headerClassname}` }, h("slot", { key: 'fb90ce8cae1dc26d36ac80c54ce960d8d676279b', name: "card-header" }), (this.card_title || this.subtitle) && (h("div", { key: '6ac4209a5476e34eac6bfedc52c1709ac6108d65', class: "flex min-w-0 flex-1 flex-col break-words" }, this.card_title && (h("h4", { key: 'd30a4c889a47b01ae6101f5774069ef7971e752b', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (h("h5", { key: 'e923d6c90d784be66ee54c37d580b962f01f19ac', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), h("slot", { key: '41207df580b8a86b4873738be98949f1488fabd5', name: "card-header-actions" })), h("div", { key: '5d1e8421c7743d98f58a94f56ab402b8778cfeea', class: contentClassname, "data-name": "card-content" }, this.content, h("slot", { key: '647501d0ebb494ecf9f77110fe39dde08686059a' })), h("div", { key: 'd52383d5484d438b6dc1375c43afdc28f716126f', class: footerClassname }, h("slot", { key: '0ae63bec54b81f8be9ecd94c021568efe7a49629', name: "card-footer" }))));
    }
};

export { AtCardComponent as at_card };
