import { r as registerInstance, h, H as Host } from './index-HD-uhvb8.js';
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
        return (h(Host, { key: '19ba8d1d523c939708d685fa6889b4aadbeabdc2', class: containerClassname }, h("div", { key: '2d66038837a3ab7576ff0dd260a26ae6d7cb1c9b', class: `${headerClassname}` }, h("slot", { key: 'e4cb32b9daef2ad19f9916554be7dcdfdfff20e3', name: "card-header" }), (this.card_title || this.subtitle) && (h("div", { key: '80ee1aad4171d393e176f58c0ba461ae02b05c37', class: "flex flex-col" }, this.card_title && (h("h4", { key: 'e2223b78a5652e619f76f8ac07345e533d56ad9f', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (h("h5", { key: 'bf797c6a973e5051b7716f17007ae45cfea9ada2', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), h("slot", { key: '4d28445631073cf5fda15ea7ded28c87f0b60bcd', name: "card-header-actions" })), h("div", { key: '40ea9f0ed318ccad2f833b9fec7e41c478e26e4d', class: contentClassname, "data-name": "card-content" }, this.content, h("slot", { key: 'd97830e02ba47541d19d369d6f8ca9f1aefe7586' })), h("div", { key: 'a42c8b202e2f33b9a40960df3c1259a0680d32d3', class: footerClassname }, h("slot", { key: '97c652bd65ea8604cceb99d52de17d1b8ae7c386', name: "card-footer" }))));
    }
};

export { AtCardComponent as at_card };
