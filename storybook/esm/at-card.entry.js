import { r as registerInstance, h, H as Host } from './index-jvbUuQtg.js';
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
        const getHeaderClassname = classlist('hide-empty relative z-2 flex items-center justify-between gap-8 rounded-t-lg p-16', headerVariantsConfig);
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
        return (h(Host, { key: 'ffa59c90bc08164ca90d6589075203a823c3f8c1', class: containerClassname }, h("div", { key: 'f505d22e31d1d67acf04648a9b189d29aa436d8a', class: headerClassname }, h("slot", { key: 'a84bcfe522500c5235791337aa67ea4c320088bb', name: "card-header" }), (this.card_title || this.subtitle) && (h("div", { key: 'f149d4a76e13b932f1a215f3064083b1aede254a', class: "flex flex-col" }, this.card_title && (h("h4", { key: 'dfaaa79da0edaf2830be818e5589353935676ca8', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (h("h5", { key: '5788c2bde87e4098e3291aad890871c6cc1d7796', class: "text-light text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), h("slot", { key: 'ab8ae7900f5d8387da35ce68e617c9d067389b7f', name: "card-header-actions" })), h("div", { key: '4aecb4f4289f88a29c68082193ba9198091e334c', class: contentClassname, "data-name": "card-content" }, this.content, h("slot", { key: '14b16b3aea6b78544c40ce5565587e52e7d3b61d' })), h("div", { key: 'd05dd3ff11c6f5079f6b4bf12ae4703c366a68c1', class: footerClassname }, h("slot", { key: 'dadd95b37fff9aacf1acb9ca9b751d6f6a7bbf1c', name: "card-footer" }))));
    }
};

export { AtCardComponent as at_card };
