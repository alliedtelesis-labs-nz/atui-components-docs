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
        return (index.h(index.Host, { key: '861d74df9384f04b2efbf3b4a0dcd237b1d13b58', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, index.h("div", { key: 'b237e9d351d4d8e6e3caeb5bcd602e0f3c8c6bb4', class: "flex items-center gap-8 overflow-hidden" }, index.h("slot", { key: '57b0aad9eb628bf849f3d03a2a7ec8d030253259', name: "title-prefix" }), index.h("div", { key: '5396ab8da883cc3e4e1c63759f088dc8b8364d4a', class: "flex flex-grow flex-col overflow-hidden" }, index.h("div", { key: '1f3e3ed281dfba88b8e95189593052e33782494d', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (index.h(HeadingTag, { key: '7848d97703ca9a14b86f662a33ffd4ea339d3da3', class: "flex items-center truncate", "data-name": "header-title" }, index.h("span", { key: 'c964fdb2e1f1fdef9b3a5ef0dfe31aa9d97c1dcc', class: "mr-8" }, index.h("slot", { key: 'b2ef01009868f9be463f66c4140e2020554f1c44', name: "icon" })), this.header_title)), index.h("slot", { key: 'd74d33bdf9efd09acfa720dcc53bef6dc4b94db1', name: "title-suffix" })), index.h("slot", { key: 'b360303475a857ed45122865a586485fd7c0bb6d', name: "custom-title" }), this.subtitle && (index.h("span", { key: '383d52424bd3904592ee87ef76e0b5aa4e84b0f8', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), index.h("slot", { key: 'c102f83a3eb5a118fabbcd59816b1d043113d5e8', name: "subtitle-content" }))), index.h("div", { key: '4b8af54e495b47532e0c017a27d02e3f5e4dfaf4', class: 'flex items-center gap-8' }, index.h("slot", { key: '7cf34c654bcd0ae750ad3de6327c0551d2a4e277', name: 'actions' }))));
    }
};

exports.at_header = AtHeader;
