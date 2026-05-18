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
        return (index.h(index.Host, { key: 'd95763184d9b81dde5106454df11b0a06806906e', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, index.h("div", { key: 'ea109d07b8b193822810186bbff5f0c359ecdf5f', class: "flex items-center gap-8 overflow-hidden" }, index.h("slot", { key: '00d5538ec83c55d7bb52aea78240e5574490f3df', name: "title-prefix" }), index.h("div", { key: '09d3b51c463b2d2bc0713806f630d7f0e0768627', class: "flex flex-grow flex-col overflow-hidden" }, index.h("div", { key: '8dd71b7e5218d8b266b23995b366a0392735d4dc', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (index.h(HeadingTag, { key: 'fd9281ec122b3d4bb92c033276c1de27bd670cbd', class: "flex items-center truncate", "data-name": "header-title" }, index.h("span", { key: '8301bd2b7be1e832d8019356eb61f14e4f169fed', class: "mr-8" }, index.h("slot", { key: '9059f40d4a0e46a995d112fde7d3c9faed5c4899', name: "icon" })), this.header_title)), index.h("slot", { key: 'e1b68476f6368ef36a3d3772093d00599b83810c', name: "title-suffix" })), index.h("slot", { key: '1c162d0b6f1ab2bab38425fa6999070fde77c3ac', name: "custom-title" }), this.subtitle && (index.h("span", { key: '4643490eef2b5c623f5e78086871b373e615015e', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), index.h("slot", { key: '9ff7c6b5348d5ad2b9a16b90767761dc09017146', name: "subtitle-content" }))), index.h("div", { key: '740ec1827d52241646d5ac51cc778ff8c830021c', class: 'flex items-center gap-8' }, index.h("slot", { key: 'f02d8988d9a0d358d86299b750e2dec148923eec', name: 'actions' }))));
    }
};

exports.at_header = AtHeader;
