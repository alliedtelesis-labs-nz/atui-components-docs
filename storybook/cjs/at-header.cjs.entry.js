'use strict';

var index = require('./index-DRsFs1GW.js');

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
        return (index.h(index.Host, { key: 'dc002de7fe30f9e7b27c99f04264072da6bcc020', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, index.h("div", { key: '5f9aad7696dad430503ad475b264e09e3ba39715', class: "flex items-center gap-8 overflow-hidden" }, index.h("slot", { key: '6bf9d760b9e7f3533380bb8a3543e1b7b472efaf', name: "title-prefix" }), index.h("div", { key: '36a129f2e96cc341f95660b4dcbf9a84bf1a3e90', class: "flex flex-grow flex-col overflow-hidden" }, index.h("div", { key: 'cbb8fabad095f6c47931a04b614427f7bde0a7d5', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (index.h(HeadingTag, { key: '87b55351ffdd7e0347fc4b1b63ead2ea7c08365a', class: "flex items-center gap-8 truncate", "data-name": "header-title" }, index.h("slot", { key: 'dafa981e73d836f6caaf2fd1ff367036804560b2', name: "icon" }), this.header_title)), index.h("slot", { key: '42d60e9b420279d935f3d3c0aad2ce038dc2ea80', name: "title-suffix" })), index.h("slot", { key: '18a71ff58c1b3f93cea8ef2e4a472a89170b53d7', name: "custom-title" }), this.subtitle && (index.h("span", { key: '0ec2c44b7656703629c4a8bd8bd95852263c45dd', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), index.h("slot", { key: '049a159bd70683bf597575b34f48175af345abcd', name: "subtitle-content" }))), index.h("div", { key: '5073a72dfdab34b8e7f864c3c86a4f35d36d2dce', class: 'flex items-center gap-8' }, index.h("slot", { key: '1df4d8d77af5a2ca3ce520b5eb0121b002398b55', name: 'actions' }))));
    }
};

exports.at_header = AtHeader;
