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
        return (h(Host, { key: '5fb2e61a895d3fe19ced525d7b2b21a212104475', class: containerClassname }, h("div", { key: 'a601bb3e2177aa528ef09dbdefb78951d4926df8', class: `flex-wrap ${headerClassname}` }, h("slot", { key: 'ceb88b8af1eb03b2910dfdc27863d65cae4fd139', name: "card-header" }), (this.card_title || this.subtitle) && (h("div", { key: 'fa90846a2b97dc690d2172396f4170adb86eb068', class: "flex flex-col" }, this.card_title && (h("h4", { key: 'd36ab0452fce24e0ec858f1f57f1303390cb7c37', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (h("h5", { key: '7aefcd0bb8e19c3bbba0bbdf203f0bf171d3a3d8', class: "text-light text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), h("slot", { key: 'dd0489c0af5f001ef1ee85c390dfb3d24cdb13cf', class: "flex-wrap", name: "card-header-actions" })), h("div", { key: '2d60c77caf87ca8ec8ee92e2a02b8b6f28c8788f', class: contentClassname, "data-name": "card-content" }, this.content, h("slot", { key: '6bc8aee7c00bddb01ab8c858a41ce670438171be' })), h("div", { key: 'e1cc9a0c1855011475318cf6f00c52e6fdfd32dd', class: footerClassname }, h("slot", { key: '1c68cc91421bbce14054a15638b2d35af26e5214', name: "card-footer" }))));
    }
};

export { AtCardComponent as at_card };
