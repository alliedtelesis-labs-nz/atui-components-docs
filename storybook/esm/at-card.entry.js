import { r as registerInstance, h, H as Host } from './index-lWb16Ay7.js';
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
        return (h(Host, { key: 'd390cd440af9469c60d48af803e02bd1c54ef638', class: containerClassname }, h("div", { key: '0156bef73440eacd6911bf1777028a0e0fec0bdd', class: `${headerClassname}` }, h("slot", { key: '62b357dbe9e2ab1b6ca53c2d51effdecb0a86cd0', name: "card-header" }), (this.card_title || this.subtitle) && (h("div", { key: '2211a88ee24ac005b0a12a17641de0c4904081f6', class: "flex flex-col" }, this.card_title && (h("h4", { key: 'ed6e6ed2e06781b1c2db78ae1ddf73f36feaf5ac', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (h("h5", { key: '85483d755c6082d68ce384de7112e285e3731789', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), h("slot", { key: '6af87527b9b9545d7ee3f30e3d7bbe84eec2243b', name: "card-header-actions" })), h("div", { key: '72f900ec02fdd07bd086e3a8eebcd3ad9eb8dc0c', class: contentClassname, "data-name": "card-content" }, this.content, h("slot", { key: '0cb83d1ca500cfffa2fd647906fb0c85f1480d0b' })), h("div", { key: 'd479a3b8de2c20c4f67be9afa28a561fda0a9163', class: footerClassname }, h("slot", { key: 'b6ad811f30c951f2adca2e800765d3d59d174210', name: "card-footer" }))));
    }
};

export { AtCardComponent as at_card };
