'use strict';

var index = require('./index-CnLXNc1Z.js');

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
        return (index.h(index.Host, { key: '95e04395f2f5ed6f99ac5ab711aadd572e646dee', class: `flex flex-row flex-wrap items-center justify-between gap-8 overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, index.h("div", { key: '617d2c9323efd2e60573b4ad703e985c103df664', class: "flex items-center gap-8 overflow-hidden" }, index.h("slot", { key: 'f3ad8252ae9ad5f7d2b91f9c0e9d5ea1b9d70382', name: "title-prefix" }), index.h("div", { key: '142975c829d2e6947fd01a19933bce82da9221b4', class: "flex flex-grow flex-col overflow-hidden" }, index.h("div", { key: '40a339f8a290d523af13e37ec353955e72bbb422', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (index.h(HeadingTag, { key: '1c0f19db23d4927e235f351d45e6b4af3edaece8', class: "flex items-center gap-8 truncate", "data-name": "header-title" }, index.h("slot", { key: 'a73624f25caf5519d6610ccfe8fbdc8eafc7dd9f', name: "icon" }), this.header_title)), index.h("slot", { key: '83147886aca62556721a092971b1d03a691d3695', name: "title-suffix" })), index.h("slot", { key: '42e7b6a88c766671a822586b7f44451620cff6a7', name: "custom-title" }), this.subtitle && (index.h("span", { key: '27476f6076080731d58e833d07bc267244ae1010', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), index.h("slot", { key: 'f9e881a81ee5f4e4342ca518556b0b84f29ecf3e', name: "subtitle-content" }))), index.h("div", { key: '4b54450d1d434b3ba23e39573d845f190230009c', class: 'flex items-center gap-8' }, index.h("slot", { key: '50513aaf4ed59886a7f5552676931e39eb5d7b4c', name: 'actions' }))));
    }
};

exports.at_header = AtHeader;
