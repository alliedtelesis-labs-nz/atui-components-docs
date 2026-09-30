import { r as registerInstance, h, H as Host } from './index-B7T1fCND.js';
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
        return (h(Host, { key: '40671bf0bbafd012c1faef3fb94ad8ce76583f0f', class: containerClassname }, h("div", { key: 'cc9954296814f5c430faa5ec3cbf84676b392663', class: `${headerClassname}` }, h("slot", { key: '40457a18920bc1045e7d434a066d681541cef4ae', name: "card-header" }), (this.card_title || this.subtitle) && (h("div", { key: '3de899a714a14457689db871ae3c393e3a5385e7', class: "flex min-w-0 flex-1 flex-col break-words" }, this.card_title && (h("h4", { key: 'b64f851b2074c45469140e6d893f1e70fac04c15', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (h("h5", { key: '5c0b546aeda087b2dcecca0f3aa06654ae522609', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), h("slot", { key: '2be694ab35acb7671961ec00278aa58a7707d062', name: "card-header-actions" })), h("div", { key: 'c4b65d4fd9f9a1d057e98ddea2dae9c4efab411b', class: contentClassname, "data-name": "card-content" }, this.content, h("slot", { key: '0a75f935e2b037f8a95fa30d16e9f1d3873de807' })), h("div", { key: '24d39eef42fe45d668ea32abe831adee5c1d71ec', class: footerClassname }, h("slot", { key: 'c52c0f45fe59bd2214ed1807867acb3baaf5fa01', name: "card-footer" }))));
    }
};

export { AtCardComponent as at_card };
