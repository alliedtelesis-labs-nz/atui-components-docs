'use strict';

var index = require('./index-CWfGEe1_.js');
var classlist = require('./classlist-BPb95vgj.js');

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
            // Scrolls only when the host resolved a scroll value from an
            // enclosing at-dialog; resolves to visible everywhere else.
            false: '[overflow-y:var(--at-card-body-overflow-resolved)]',
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
        index.registerInstance(this, hostRef);
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
     * exceeds the card is clipped, except inside an `at-dialog`, where it
     * always scrolls.
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
        // Inside an at-dialog the host is capped by the `at-dialog at-card` rule
        // in directives.scss. Here it resolves the body's overflow from the var
        // at-dialog publishes; elsewhere the var is unset and it resolves to
        // visible, leaving the card unchanged.
        const getContainerClassname = classlist.classlist('relative z-1  bg-card-background border-muted flex flex-col overflow-hidden rounded-lg [--at-card-body-overflow-resolved:var(--at-card-content-overflow,visible)]', containerVariantsConfig);
        const containerClassname = getContainerClassname({
            shadow: this.shadow,
        });
        const getHeaderClassname = classlist.classlist('flex-wrap hide-empty relative z-20 flex items-center justify-between gap-8 rounded-t-lg p-16', headerVariantsConfig);
        const headerClassname = getHeaderClassname({
            sticky: this.sticky_header,
        });
        // The body resets the public vars so a nested card gets no cap and no
        // scrollbar of its own. The reset sits here, not on the host, so it
        // never overrides the value this card's host has already resolved.
        const getContentClassname = classlist.classlist('relative flex flex-auto flex-col min-h-0 [--at-dialog-max-height:initial] [--at-dialog-max-width:initial] [--at-card-content-overflow:initial]', contentVariantsConfig);
        const contentClassname = getContentClassname({
            padding: this.padding,
            overflow: this.overflow_content,
        });
        const getFooterClassname = classlist.classlist('hide-empty z-index-10 p-16', footerVariantsConfig);
        const footerClassname = getFooterClassname({
            sticky: this.sticky_footer,
        });
        return (index.h(index.Host, { key: '844effd2de115277a055ce1d55752e6a8ccef53b', class: containerClassname }, index.h("div", { key: 'ff51d3b6c5838618c644d945802ce7be8b3f21e0', class: `${headerClassname}` }, index.h("slot", { key: '3644f94ac5adb96259595bf48ed21366af18119b', name: "card-header" }), (this.card_title || this.subtitle) && (index.h("div", { key: '957876edbe446ed81128c1bde748b7b9813dc248', class: "flex min-w-0 flex-1 flex-col break-words" }, this.card_title && (index.h("h4", { key: 'b8d97e0b58d1d9ced2007d9fbd9fbcce89e88662', "data-name": "card-title", class: "text-h4 font-medium" }, this.card_title)), this.subtitle && (index.h("h5", { key: '69e61b20b2e08a979c01e6a61976b632787a4626', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), index.h("slot", { key: '75db0211b4b00fd906fbddc37d6a99db1fca5d71', name: "card-header-actions" })), index.h("div", { key: 'af12c27f0b0d03aa238a2e89a0e99dec4ce1e88d', class: contentClassname, "data-name": "card-content" }, this.content, index.h("slot", { key: '823f983572987d6c872f4c9ca5d9a3a28625c96e' })), index.h("div", { key: '6967e66727d390494663153ba258232c3d69a794', class: footerClassname }, index.h("slot", { key: '14575b2b6acfa6a3f5f2aabc06933de98b5eab11', name: "card-footer" }))));
    }
};

exports.at_card = AtCardComponent;
