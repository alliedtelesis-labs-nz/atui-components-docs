'use strict';

var index = require('./index-ToR1OkrH.js');

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
        return (index.h(index.Host, { key: '52e55102662b537cb313b133bbe6186b7fdaed7b', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, index.h("div", { key: 'd365f4e2a91b1013a84e51648e4f9d168eeb08a3', class: "flex items-center gap-8 overflow-hidden" }, index.h("slot", { key: 'c8183049bedf3720d03b2618d3724bd2b4ba9923', name: "title-prefix" }), index.h("div", { key: '361f8f26911f3eec88af24b822f21e263c1acb28', class: "flex flex-grow flex-col overflow-hidden" }, index.h("div", { key: 'd659cb78d103e8e6cfa3cf6792d844364b7a22a4', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (index.h(HeadingTag, { key: '7d457fd00916461f77dac04bdfcb9ca851fc81be', class: "flex items-center gap-8 truncate", "data-name": "header-title" }, index.h("slot", { key: '61311b65eee857528570b411f15b18854732b0b4', name: "icon" }), this.header_title)), index.h("slot", { key: 'ea7288b421fb6a227e72b211765e558fd9bab000', name: "title-suffix" })), index.h("slot", { key: '5c99b92a46d7c09dc2aa76893d036670be6b7853', name: "custom-title" }), this.subtitle && (index.h("span", { key: 'e0947a2d95eec47dc9a418e4d59c23159c62002b', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), index.h("slot", { key: 'd47333d7d4d4cde4f67ac5b0bdbfc2b5f9a96c7c', name: "subtitle-content" }))), index.h("div", { key: 'f611c46ba317a3fda9993db2bebe490d180c4710', class: 'flex items-center gap-8' }, index.h("slot", { key: 'b5ee8e75d1bb16f31ae658476f696429533217be', name: 'actions' }))));
    }
};

exports.at_header = AtHeader;
