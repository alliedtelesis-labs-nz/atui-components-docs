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
        return (h(Host, { key: 'e1fa474bd6b99632280b97e380787fba6be2eee7', class: containerClassname }, h("div", { key: 'd79a8aa4034b35aaa9229ee6f598b048c00d1558', class: headerClassname }, h("slot", { key: '73dfd447390122c60c68041bc404df3cdf3630d5', name: "card-header" }), (this.card_title || this.subtitle) && (h("div", { key: '4ead7cf75db6cbdc83286a3dd544b0d8eaed88a5', class: "flex flex-col" }, this.card_title && (h("h4", { key: '283768233cfac4eac381a666e4c59e47517c186d', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (h("h5", { key: '851c6d00e23586b6eef3dcadc4df1e94f082a3ef', class: "text-light text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), h("slot", { key: '7fa544e7826b191187d2a2976d73c7eab357e170', name: "card-header-actions" })), h("div", { key: 'bede09e7994e4a3e314e1b02768c3e0b26336f8f', class: contentClassname, "data-name": "card-content" }, this.content, h("slot", { key: '061e92ff9e70fb51d0f9685ce0d09a7a0f66d118' })), h("div", { key: '7fececff6810b689bbdf2c106b299c3a54b0c22f', class: footerClassname }, h("slot", { key: 'e1edcc2223b21067d3b318aba373741870d748df', name: "card-footer" }))));
    }
};

export { AtCardComponent as at_card };
