'use strict';

var index = require('./index-V7Urjg2R.js');

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
        return (index.h(index.Host, { key: 'e63d4da965d9a802e496cdd9ddf45e849f71af05', class: `flex flex-row flex-wrap items-center justify-between gap-8 overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, index.h("div", { key: 'f6624beda732472133b8af9bfe868d72730cb977', class: "flex items-center gap-8 overflow-hidden" }, index.h("slot", { key: '00a7ecbf5c2cb297df364c7f6b3108ca1555a045', name: "title-prefix" }), index.h("div", { key: '16eece9e44ce4ba8f03ee58d1236aed7f72fad44', class: "flex flex-grow flex-col overflow-hidden" }, index.h("div", { key: 'a38fcd1f8d9b24d39b1423816c2ce79629256641', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (index.h(HeadingTag, { key: 'e860270570e6df2e0482bd9e95af069fa766337e', class: "flex items-center gap-8 truncate", "data-name": "header-title" }, index.h("slot", { key: '50071ba025592a360403ee987364e6f395b3af64', name: "icon" }), this.header_title)), index.h("slot", { key: '475707994489722f09c5fc234c092f92ec8bfbae', name: "title-suffix" })), index.h("slot", { key: '8c39f729cc3a1bda94b98be9c57332b088356d11', name: "custom-title" }), this.subtitle && (index.h("span", { key: '3720318c60c46f25c2cb242e6a017e03a13883bd', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), index.h("slot", { key: '709e48a283c8849da0e1aafc5643fe62ed972e2d', name: "subtitle-content" }))), index.h("div", { key: 'b46d455fbc8855183682767108233e5fb6160e5c', class: 'flex items-center gap-8' }, index.h("slot", { key: '4815d37ecc7a82ba701140596a476ddcff74ceae', name: 'actions' }))));
    }
};

exports.at_header = AtHeader;
