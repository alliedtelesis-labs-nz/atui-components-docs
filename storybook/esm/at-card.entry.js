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
        return (h(Host, { key: '4d3125187fa4dc730ac1e92524ac8c8ac6a509e3', class: containerClassname }, h("div", { key: '0a7866a3f955968a57ad550bc0425a7c6370b010', class: `${headerClassname}` }, h("slot", { key: '528b76b101f7114d2a7d2ded763ce36784d34efe', name: "card-header" }), (this.card_title || this.subtitle) && (h("div", { key: '6605e3ba7d5bc2b72f7f5330df5ea6ccd65c7923', class: "flex flex-col" }, this.card_title && (h("h4", { key: 'b24910386220e05abf68523246407074d859fb9d', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (h("h5", { key: '82c54fb81eb150c1fa4f3a54200917f11d3a0a72', class: "text-light text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), h("slot", { key: '259e942dfb65123e3c07145d183a8a8b19840835', name: "card-header-actions" })), h("div", { key: '1113ba7c3184c802bf900a74f1892141b9a28e4e', class: contentClassname, "data-name": "card-content" }, this.content, h("slot", { key: '8353f1cee24e94e287415be60f645cecdebd5bee' })), h("div", { key: '9cbe2f580810a5a01314512511aa624ee797e077', class: footerClassname }, h("slot", { key: '154cea4981cfaf172324ddef704f950b2d8e7b67', name: "card-footer" }))));
    }
};

export { AtCardComponent as at_card };
