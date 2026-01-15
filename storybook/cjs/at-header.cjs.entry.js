'use strict';

var index = require('./index-ChzPazsa.js');

const AtHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Size of the header.
     */
    size = 'h1';
    /**
     * Icon of header. Must use mat-icon name.
     */
    icon;
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
        return (index.h(index.Host, { key: '7cb19017bbd39d176aa2283cc24c3619c67373ae', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-light border-b' : ''}` }, index.h("div", { key: 'ad46efee80962a4bdd333a5464b37474650612ef', class: "flex items-center gap-8 overflow-hidden" }, index.h("slot", { key: 'bec64d14a28ca0651f4c215565a1e4952aa091b4', name: "title-prefix" }), index.h("div", { key: '9a028c2d3e2391f2345a7492e43ceb34030b2a9b', class: "flex flex-grow flex-col overflow-hidden" }, index.h("div", { key: 'bcd36a65a934078f9f817f0b5dfa7b791a17a542', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (index.h(HeadingTag, { key: '00c4710ddd6fc2d4fe376e2db5d1a1ebb42e3a30', class: "flex items-center truncate", "data-name": "header-title" }, this.icon && (index.h("i", { key: '26248d83d193d05f8f3e912c46a1d9293454e2f5', class: "material-icons mr-8" }, this.icon)), this.header_title)), index.h("slot", { key: '869dc6ab40d4c5b8e514a290559fb8bc52438a7a', name: "title-suffix" })), index.h("slot", { key: 'cc51572bf9700deaec7c6434374e53ab9485135f', name: "custom-title" }), this.subtitle && (index.h("span", { key: '3c8fe708f8c4e7cb2fe5580ab8857d1f5b686b8d', class: "text-med truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), index.h("slot", { key: '1a0576d9b1cad133bc8479db05d3aa2bbe25fa00', name: "subtitle-content" }))), index.h("div", { key: '49b0eb406e585dcedba51dbf5f04bc3e14e95cf4', class: 'flex items-center gap-8' }, index.h("slot", { key: 'f8d1768f2fc04f4771ef99acdcaf72c4435bb023', name: 'actions' }))));
    }
};

exports.at_header = AtHeader;
