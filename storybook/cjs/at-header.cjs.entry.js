'use strict';

var index = require('./index-Bc1nzv_X.js');

const AtHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Size of the header.
     */
    size = 'h1';
    /**
     * Title of the header.
     */
    header_title;
    /**
     * Subtitle of the header.
     */
    subtitle;
    /**
     * Adds a border to the bottom of the header.
     */
    border;
    /**
     * Adds 16 pixels of padding to the header element
     */
    padding = true;
    render() {
        const validHeadings = [
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
        ];
        const HeadingTag = validHeadings.includes(this.size)
            ? this.size
            : 'div';
        return (index.h(index.Host, { key: 'ac10da4091cfef214a05338d8ff9f34e81dfc3cf', class: `flex flex-row flex-wrap items-center justify-between gap-8 overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, index.h("div", { key: 'edb64f78780cd6ead422aca559008a4ed9541a1e', class: "flex items-center gap-8 overflow-hidden" }, index.h("slot", { key: '3a6f7c3466ba4af356d8806eceabc534ac9f0618', name: "title-prefix" }), index.h("div", { key: 'b8c572d0b41f120412217f9b7372d4b0de0c993c', class: "flex flex-grow flex-col overflow-hidden" }, index.h("div", { key: 'c5072b88bef71d9779af27091eb6db11f1e3773b', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (index.h(HeadingTag, { key: 'c662e6379c8cf4321b49e38f2abeea5852af0bdb', class: "flex items-center gap-8 truncate", "data-name": "header-title" }, index.h("slot", { key: '3457769d00c165e3986cbe96462b014b7c1ac66f', name: "icon" }), this.header_title)), index.h("slot", { key: '461f0a20a392698a417f6a3f9c78f6bf3fcef32c', name: "title-suffix" })), index.h("slot", { key: 'e3564124f3281b162ef94f48862edab1ac883d99', name: "custom-title" }), this.subtitle && (index.h("span", { key: '14c557bb1fd049a1f92fa926aec56abd27b2af77', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), index.h("slot", { key: 'fd9d949ddb9343c2ccd5d29bc8597a2344bfac99', name: "subtitle-content" }))), index.h("div", { key: '329028b295e9d4d5bc469fd1036dee4d1029339e', class: 'flex items-center gap-8' }, index.h("slot", { key: '217ba73f731b2d028830131589af754c89e4a296', name: 'actions' }))));
    }
};

exports.at_header = AtHeader;
