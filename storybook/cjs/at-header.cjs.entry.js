'use strict';

var index = require('./index-zRWHCAJe.js');

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
        return (index.h(index.Host, { key: 'df0b379c33c0263b09e01eca73f66b2c19134a96', class: `flex flex-row flex-wrap items-center justify-between gap-8 overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, index.h("div", { key: '750d000e8c7cc8d4809d3f5ac481e10ad492d539', class: "flex items-center gap-8 overflow-hidden" }, index.h("slot", { key: '2cf26f3338dfd3a754b868c0387739a79e5c85ca', name: "title-prefix" }), index.h("div", { key: '9da36c945282def67300b743892b5c94df4957d6', class: "flex flex-grow flex-col overflow-hidden" }, index.h("div", { key: '8da5acd9ced247c9ad599c7e89d50e4d0fcb852c', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (index.h(HeadingTag, { key: '1c1fd2b8d3233c05bccf50830865333b871bc0ce', class: "flex items-center gap-8 truncate", "data-name": "header-title" }, index.h("slot", { key: 'e09561cb0a1dab07cafe5fa7f06bc388ba9e6dae', name: "icon" }), this.header_title)), index.h("slot", { key: 'b2fc24c76b9cd809ab7413e8d5eafb2c16cfa4db', name: "title-suffix" })), index.h("slot", { key: 'c51ba61e2a05a79d0146151b127e38192ecb20e6', name: "custom-title" }), this.subtitle && (index.h("span", { key: '8daa9da280f3cb151f32560006cf338dfe21c6d0', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), index.h("slot", { key: 'fb3ec3b6b751e276205a6090a56cc7a4c4310182', name: "subtitle-content" }))), index.h("div", { key: '73abd1e0eb8311868c5e192d35c401d80d43e5ca', class: 'flex items-center gap-8' }, index.h("slot", { key: 'a4a87883e525b2599810552de5a6ac19f6eb58df', name: 'actions' }))));
    }
};

exports.at_header = AtHeader;
