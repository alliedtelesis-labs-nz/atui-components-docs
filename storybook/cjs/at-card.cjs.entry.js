'use strict';

var index = require('./index-GH7gxrjy.js');
var classlist = require('./classlist-BPb95vgj.js');

const validTitleSizes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
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
    /**
     * Size of the title. Sets both its heading level and its text size.
     */
    title_size = 'h4';
    render() {
        // Inside an at-dialog the host is capped by the `at-dialog at-card` rule
        // in directives.scss. Here it resolves the body's overflow from the var
        // at-dialog publishes; elsewhere the var is unset and it resolves to
        // visible, leaving the card unchanged.
        const getContainerClassname = classlist.classlist('relative bg-card-background border-muted flex flex-col overflow-hidden rounded-lg [--at-card-body-overflow-resolved:var(--at-card-content-overflow,visible)]', containerVariantsConfig);
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
        const getFooterClassname = classlist.classlist('hide-empty z-10 p-16', footerVariantsConfig);
        const footerClassname = getFooterClassname({
            sticky: this.sticky_footer,
        });
        const TitleHeading = validTitleSizes.includes(this.title_size)
            ? this.title_size
            : 'h4';
        return (index.h(index.Host, { key: 'af8594375acc2b639ef545280fc3c2dcc1a340d0', class: containerClassname }, index.h("div", { key: '35ca49ca2040ff2603a519044ae6012f9d1ec5bb', class: headerClassname, "data-name": "card-header" }, index.h("slot", { key: '50ffb8de1340c693212777f7ab0ba9808efe1da3', name: "card-header" }), (this.card_title || this.subtitle) && (index.h("div", { key: '74dd9f959cd57704c2478cdb5a4abb5dc0bfa05f', class: "flex min-w-0 flex-1 flex-col break-words" }, this.card_title && (index.h(TitleHeading, { key: '55f2386d528952604d77b71b519be98e7c07708b', "data-name": "card-title", class: TitleHeading }, this.card_title)), this.subtitle && (index.h("p", { key: '486cde70a61e74139ba1691e59c6dd082d0d3925', class: "text-muted text-sm font-normal", "data-name": "card-subtitle" }, this.subtitle)))), index.h("slot", { key: '76088095c479b4a92fef01f9f031bc1866c0859b', name: "card-header-actions" })), index.h("div", { key: '34e4095d9471ed4bbee5615327b9d6566b36c009', class: contentClassname, "data-name": "card-content" }, this.content, index.h("slot", { key: '94f399c00fa42f74ccbace5c9ec00660abe8537e' })), index.h("div", { key: '56124e0ba01189c4f9f31484daed091aa86ed259', class: footerClassname, "data-name": "card-footer" }, index.h("slot", { key: '5a7aa81130c24c183d4e9e79bb473457594af396', name: "card-footer" }))));
    }
};

exports.at_card = AtCardComponent;
