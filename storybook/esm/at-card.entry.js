import { r as registerInstance, h, H as Host } from './index-BQWIFs0G.js';
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
        return (h(Host, { key: '192bdbca240ac17a967270fa6a64527357e2ed43', class: containerClassname }, h("div", { key: '2d6b312f31635691ec3dad8597eaa31f1a9ba86e', class: `${headerClassname}` }, h("slot", { key: 'ab6272f08c8a451afd33d4a7fd835d93e0244548', name: "card-header" }), (this.card_title || this.subtitle) && (h("div", { key: '9eccbbabb348bcc01684b137efd9d58522520537', class: "flex flex-col" }, this.card_title && (h("h4", { key: '064e58a8ca3f7fdc75166978d72f5f8362bd1363', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (h("h5", { key: 'f9c7b33d8831b51b9e2650a61fdb52a28d5c0be3', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), h("slot", { key: 'd6e2f3455fa569da76479839befe99944b790ec5', name: "card-header-actions" })), h("div", { key: 'bada8cdc2386ee2d5237747b44119892e6a77ec8', class: contentClassname, "data-name": "card-content" }, this.content, h("slot", { key: '97052f13f60765bb07143080d186243010d3cf2d' })), h("div", { key: '7d4abd0ca29a479f9d0e2a1a44ff576d3cb6c82e', class: footerClassname }, h("slot", { key: 'fe1b1e7869199889ee68ee8b1eca31df5a59dff6', name: "card-footer" }))));
    }
};

export { AtCardComponent as at_card };
