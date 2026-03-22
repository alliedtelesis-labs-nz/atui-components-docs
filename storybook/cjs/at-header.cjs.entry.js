'use strict';

var index = require('./index-CzDB71Wy.js');

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
        return (index.h(index.Host, { key: '11085b8e25424b43740df637888b180a4596e6c5', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-light border-b' : ''}` }, index.h("div", { key: '367471a06e9aa08db45c5793d2078ae25e9be78b', class: "flex items-center gap-8 overflow-hidden" }, index.h("slot", { key: 'b8ea95575e895b71a6d3bfa8001e546c6032f286', name: "title-prefix" }), index.h("div", { key: '6ac89817c265daffeb68582c7491dcf77875fafb', class: "flex flex-grow flex-col overflow-hidden" }, index.h("div", { key: '67edca1c44601bf86749f71d7b33c0e43e1bd121', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (index.h(HeadingTag, { key: 'a279989c0f74b706c3b5e48767bada66c8a50350', class: "flex items-center truncate", "data-name": "header-title" }, this.icon && (index.h("i", { key: 'd208bfab1466d6d38355f392ab748b9b4d5939e6', class: "material-icons mr-8" }, this.icon)), this.header_title)), index.h("slot", { key: 'dc40a90ba0e5973e7f1f9293a085e9b89bc30d7f', name: "title-suffix" })), index.h("slot", { key: '0a4a98350e163eb83c92e703b503c2e2a59421cf', name: "custom-title" }), this.subtitle && (index.h("span", { key: '453c8760fb13a23dd5ce91a76abbaa1ed1f7f85f', class: "text-med truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), index.h("slot", { key: '1487ac01a11b871fc47352a3463e68cfae9570df', name: "subtitle-content" }))), index.h("div", { key: '1bf3c109eee291dca26acda4def64263c8bf8883', class: 'flex items-center gap-8' }, index.h("slot", { key: '6239a41d4a12da294d6f6a9c2b90c8913e5a06b7', name: 'actions' }))));
    }
};

exports.at_header = AtHeader;
