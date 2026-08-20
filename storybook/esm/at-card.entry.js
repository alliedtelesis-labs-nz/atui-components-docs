import { r as registerInstance, h, H as Host } from './index-_QbJz5mf.js';
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
        return (h(Host, { key: 'ce82ae458115ede8ea79ce52eab812200fd375cc', class: containerClassname }, h("div", { key: '675cfe7e4f7de5fc428055327727382b906ce928', class: `${headerClassname}` }, h("slot", { key: 'a1a22e8e93132396942019aaae15dfbd12cc49d9', name: "card-header" }), (this.card_title || this.subtitle) && (h("div", { key: 'a8659368cee6619bfe768ed0199054fc5a16ac32', class: "flex flex-col" }, this.card_title && (h("h4", { key: 'b93f68f720aba6ef7230e76f382136d0357cae49', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (h("h5", { key: '904dbd701fbac27526355562dc64f4cb360b9692', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), h("slot", { key: 'ddda3af248ef9aeb1f89a1f5a8c0bd4b22cb1eed', name: "card-header-actions" })), h("div", { key: '4fa16a7de23a2ae2fe6c5c5d952b23c9c994fa4b', class: contentClassname, "data-name": "card-content" }, this.content, h("slot", { key: '2df7090d74e5b9c3408ffbf5c00f03590077daf9' })), h("div", { key: 'b492768bce952614db156bde5c6b8da875bf0aed', class: footerClassname }, h("slot", { key: 'c1e22e634052d8833a51da59775374441ccae4fd', name: "card-footer" }))));
    }
};

export { AtCardComponent as at_card };
