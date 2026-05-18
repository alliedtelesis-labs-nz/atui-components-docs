import { r as registerInstance, h, H as Host } from './index-BAAX2Der.js';
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
        const getContainerClassname = classlist('relative z-1  bg-card-background border-muted flex flex-col overflow-hidden rounded-lg', containerVariantsConfig);
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
        return (h(Host, { key: 'f56fc99b5254336fe510d592778ae04eb25b73bc', class: containerClassname }, h("div", { key: '85a37f973b68df84a7ccc0ec73dd24b1d268ff59', class: `${headerClassname}` }, h("slot", { key: 'd9876a81c706a17afc842d6293be680bd5ea0b1a', name: "card-header" }), (this.card_title || this.subtitle) && (h("div", { key: '70d3b9a455202fab0cc2ab9a9a3d80adf1b6660c', class: "flex flex-col" }, this.card_title && (h("h4", { key: '3ae8898be2a49c2ce1bf8a3fb7261c17eaf872c5', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (h("h5", { key: 'ac0b9720818690bf0e7444f0a97181c1907d10bf', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), h("slot", { key: '3dcddfcb99d465110e6721fa12db15602eddb84b', name: "card-header-actions" })), h("div", { key: 'f4787612d1b0889c6f8bc79796027f3d0916e3b7', class: contentClassname, "data-name": "card-content" }, this.content, h("slot", { key: '8eb910c3f3467dcb42ee81ab269ab5a101844c24' })), h("div", { key: 'a954decfd4fb7dc0049890df81ca84d23c691ab1', class: footerClassname }, h("slot", { key: '88f546462c7e080f2b534e180ba3e2d1c9ce56e3', name: "card-footer" }))));
    }
};

export { AtCardComponent as at_card };
