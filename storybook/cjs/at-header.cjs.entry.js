'use strict';

var index = require('./index-Bo1AxtqW.js');

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
        return (index.h(index.Host, { key: '91be828429e74c583dcd3f2ae12a867dfbbd9c9c', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, index.h("div", { key: '087ec8366f26740af70816a1b1850b8121ec121d', class: "flex items-center gap-8 overflow-hidden" }, index.h("slot", { key: 'e167ce4ccba3b4e256a221b56b050251600fb749', name: "title-prefix" }), index.h("div", { key: 'a4860ab9bd80ea35e3a9238029621f5419c76f62', class: "flex flex-grow flex-col overflow-hidden" }, index.h("div", { key: '59c6d35af1393c97089f42ab9f1ce0ecec9a554f', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (index.h(HeadingTag, { key: 'ece69cf743dad7e4c3de451266f82cbf40f4fadf', class: "flex items-center gap-8 truncate", "data-name": "header-title" }, index.h("slot", { key: 'c97922c8531aeaaeb185603f88209f99edea80b8', name: "icon" }), this.header_title)), index.h("slot", { key: '3e66cb2c24eadec66aa6851cade67894002c84ca', name: "title-suffix" })), index.h("slot", { key: 'bba5194f5e39f0ea4468c31118b4346a98f28521', name: "custom-title" }), this.subtitle && (index.h("span", { key: '1ed498d79bc7d81d817faba230a6c250a2b8db63', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), index.h("slot", { key: 'ea6c44bd01b6b2429e90cccc1fcfeec0a091feeb', name: "subtitle-content" }))), index.h("div", { key: '061d1ca5a7acdd3405415bfd61130b73582f1e65', class: 'flex items-center gap-8' }, index.h("slot", { key: 'c6c0734e66f73c8d0f0a1f1a6d1051fa06b1b548', name: 'actions' }))));
    }
};

exports.at_header = AtHeader;
