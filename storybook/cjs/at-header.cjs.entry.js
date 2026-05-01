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
        return (index.h(index.Host, { key: 'db35cb33926ed3e90a16918b85a3095afcc29ff0', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, index.h("div", { key: 'dd28f2d496e41bfb749d35e7a211ee8975b3b2be', class: "flex items-center gap-8 overflow-hidden" }, index.h("slot", { key: 'd529839869d29754c3857d51d333593685f8401b', name: "title-prefix" }), index.h("div", { key: '66286b86effc945806d08341ba6eaa99ec5b80c9', class: "flex flex-grow flex-col overflow-hidden" }, index.h("div", { key: '32b27bda4a6667eabd224368cdfc00b3bb25edf1', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (index.h(HeadingTag, { key: '6b9761c22ae2b3437faaa1aad61f4e36437172c7', class: "flex items-center truncate", "data-name": "header-title" }, index.h("span", { key: '0d791891b96c97363ffd14cb2f9b00ffb923cd15', class: "mr-8" }, index.h("slot", { key: 'e59525c1bfab0c83f69be14e1a47f0f1f12ec28d', name: "icon" })), this.header_title)), index.h("slot", { key: '228b1ecda1c73e66bff95f7abb885a5eed54bcdd', name: "title-suffix" })), index.h("slot", { key: '43a3b47ba2ee15cbdee04243cfb7dcf0892ccb6c', name: "custom-title" }), this.subtitle && (index.h("span", { key: '4a2e6e3f3b60c3789cd5e90911a330f6ff5c7cbb', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), index.h("slot", { key: '46da2d8c953621d57c0d201c89c48862d8c47cbf', name: "subtitle-content" }))), index.h("div", { key: '64e011c1b900bb49c10a7d300f01d79130432a64', class: 'flex items-center gap-8' }, index.h("slot", { key: 'b0e436a7c6848e75c55a832c1e2e1f7af76fc6ec', name: 'actions' }))));
    }
};

exports.at_header = AtHeader;
