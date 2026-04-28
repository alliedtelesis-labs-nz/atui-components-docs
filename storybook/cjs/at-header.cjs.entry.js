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
        return (index.h(index.Host, { key: 'af47332dff4bb14614d50c4b9bd052bed150fdcb', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, index.h("div", { key: '96a7807e80379bc1ca56eac6fe36f37e71c5207d', class: "flex items-center gap-8 overflow-hidden" }, index.h("slot", { key: '90a8ec8e310f5d9fa6607dcda33407092648bb29', name: "title-prefix" }), index.h("div", { key: '646e55c3f4bfee6407f97f76c477c4a3922109f0', class: "flex flex-grow flex-col overflow-hidden" }, index.h("div", { key: 'bff9c372c85e6d8be78f69ba203e6e16faf90f91', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (index.h(HeadingTag, { key: '6d7a72248cb49a3f969908f1f2c0b3da12f6dad2', class: "flex items-center truncate", "data-name": "header-title" }, index.h("span", { key: 'fcdcf9f3eedc8bc5a50a31d86ee7aa1cb4241eca', class: "mr-8" }, index.h("slot", { key: '4ea23ea3f329b20a046cb8de8fe53cba74321866', name: "icon" })), this.header_title)), index.h("slot", { key: 'ff5c7d9d895ca8ea9abb9bf03310a995407ca140', name: "title-suffix" })), index.h("slot", { key: '7831694381938089df5b4a942d766c7ac73dc7ee', name: "custom-title" }), this.subtitle && (index.h("span", { key: '6b8dd3eee9b2aa7d25a622d043ed8af90b278750', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), index.h("slot", { key: '409efe2c6a6c81229343660f3d60ab454d5e56d6', name: "subtitle-content" }))), index.h("div", { key: '1f0b10fa04affbcb6f31bf4558f116d340baccfc', class: 'flex items-center gap-8' }, index.h("slot", { key: '36d7358dfa09f7430f8ee790b0ce5baf75710902', name: 'actions' }))));
    }
};

exports.at_header = AtHeader;
