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
        return (index.h(index.Host, { key: 'fbb35c4a2191d2c964ab893c6b9449c9cb4ab5c8', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, index.h("div", { key: '8976f540bef7fddc1b55f7b242caf0706c8f0c3f', class: "flex items-center gap-8 overflow-hidden" }, index.h("slot", { key: '886766de6a34b91f611c4f1f45e7ffd0217d49d3', name: "title-prefix" }), index.h("div", { key: 'e3b2f9b80cc299381b8be49675a891388403254c', class: "flex flex-grow flex-col overflow-hidden" }, index.h("div", { key: '0e1fa899e196ba659c32fe13e0cb6490edfe3809', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (index.h(HeadingTag, { key: 'a449b46b6f1ae5f4ab3cce48e7715ed1c2d0738b', class: "flex items-center gap-8 truncate", "data-name": "header-title" }, index.h("slot", { key: '8429f0ca5bc429bf9c55eab82f462a7ac7f52afa', name: "icon" }), this.header_title)), index.h("slot", { key: '058dc2f6c89c504e6f079e4a41de6ae17f68f7f3', name: "title-suffix" })), index.h("slot", { key: '8695fe85d7999ed6c36db94b8bbbbafe91fa9c90', name: "custom-title" }), this.subtitle && (index.h("span", { key: '6925702bc546c35ee63daa4b860e032240c04257', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), index.h("slot", { key: '5ae63e5e974950a7b40bee60c55bcc06aebb8b0a', name: "subtitle-content" }))), index.h("div", { key: '40269bffefa1a9325975e27ba7e07aef8f8a10fc', class: 'flex items-center gap-8' }, index.h("slot", { key: 'd8a7078eab3f008a461f28223605ac88d5f66dc4', name: 'actions' }))));
    }
};

exports.at_header = AtHeader;
