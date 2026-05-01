'use strict';

var index = require('./index--r5sCsiV.js');

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
        return (index.h(index.Host, { key: '1a6171cd9a6e84556444bddefe16625e1ee07528', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, index.h("div", { key: '7a879a7cf76726a1293dd2b62ac664160cf73b73', class: "flex items-center gap-8 overflow-hidden" }, index.h("slot", { key: 'e2d35860b124f9f87eb17874fdb843a4d4da9222', name: "title-prefix" }), index.h("div", { key: 'b37b4639dc6ded468828fb431575afb27f22a5aa', class: "flex flex-grow flex-col overflow-hidden" }, index.h("div", { key: 'f2ae2d32d2a542cc9b959812f93e0f524af59da8', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (index.h(HeadingTag, { key: 'b7b89be03aa5b09b47fc3c7c8b5477a35b418d5c', class: "flex items-center truncate", "data-name": "header-title" }, index.h("span", { key: '498593330c7b50bb73eab6241e28b6648c031bd9', class: "mr-8" }, index.h("slot", { key: 'afd5fcd345cbc00b17c1c6c1d58f9966f2eb9587', name: "icon" })), this.header_title)), index.h("slot", { key: '5a448323e56d7c12eb32e50c54ed219d7b244408', name: "title-suffix" })), index.h("slot", { key: 'b5269255d5be664a04d24895cdd5261685699986', name: "custom-title" }), this.subtitle && (index.h("span", { key: 'ad96d41e09968e0fd72999304aac6fc7e77aafc9', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), index.h("slot", { key: 'bca75cba5b004c521bc78c6140e8270c85b4de68', name: "subtitle-content" }))), index.h("div", { key: '4474f8b3a0a40bbaa690812196f1034583f8a166', class: 'flex items-center gap-8' }, index.h("slot", { key: '562539b68b3827be326821d4b04cdf0d4069c0c5', name: 'actions' }))));
    }
};

exports.at_header = AtHeader;
