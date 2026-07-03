'use strict';

var index = require('./index-Dos-V-Qv.js');

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
        return (index.h(index.Host, { key: '41aecf5654710b7f1c7894fc73f8030c9ee46df8', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, index.h("div", { key: '72640be162ce58ea52588a60cf8648159a2dc5df', class: "flex items-center gap-8 overflow-hidden" }, index.h("slot", { key: '3e805a0624801ca8670ae32932497220bb8a9a9c', name: "title-prefix" }), index.h("div", { key: 'f0be083534cba6234cab107e7e7d30b6ba23c207', class: "flex flex-grow flex-col overflow-hidden" }, index.h("div", { key: '3f0e32d7e36b7d015cf2507cd3fd1fe6b3196f3f', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (index.h(HeadingTag, { key: 'f1a1d11d5371c1ea13adcf428697485390af21e6', class: "flex items-center gap-8 truncate", "data-name": "header-title" }, index.h("slot", { key: '3f665e04103041a7ea93f4c6cd77f9d070ae057a', name: "icon" }), this.header_title)), index.h("slot", { key: '623318497d15ffdc4d1c090c13764f6a531cc0bf', name: "title-suffix" })), index.h("slot", { key: 'a656c512b839782c01f2b2fe04feeb5498e9f99b', name: "custom-title" }), this.subtitle && (index.h("span", { key: 'cf8780d7e1ed16580cf0aee31ba04d8a7fe57466', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), index.h("slot", { key: 'd57647348b1951773c31245c04c129cca352febf', name: "subtitle-content" }))), index.h("div", { key: '4490f29bc13c6c517cd959adc660f8f765ebc3ee', class: 'flex items-center gap-8' }, index.h("slot", { key: 'eda40ddcddf97b0e5bcf793a6a96958752dac79a', name: 'actions' }))));
    }
};

exports.at_header = AtHeader;
