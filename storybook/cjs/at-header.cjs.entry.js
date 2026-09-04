'use strict';

var index = require('./index-ChtkW4Eq.js');

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
        return (index.h(index.Host, { key: 'e199cae3a5c6dd0c737058d5b5a6fe948008d642', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, index.h("div", { key: '2500776ac2f2826a0abb56ec9dce9d8dbc0d8fc8', class: "flex items-center gap-8 overflow-hidden" }, index.h("slot", { key: '6e5c31f36f7b6a131a4b13d327f74f6b0d2a1bb6', name: "title-prefix" }), index.h("div", { key: '9e7115ab8660629388ad3aa62bd37b8407fc0567', class: "flex flex-grow flex-col overflow-hidden" }, index.h("div", { key: 'df595f857ad163753dbf45f8502c5f887576baa0', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (index.h(HeadingTag, { key: '072a0b47c7ee71d4abde4ff51ad5a06f087fa461', class: "flex items-center gap-8 truncate", "data-name": "header-title" }, index.h("slot", { key: 'c66f7f333501c882cfee001e6518d6223c345ae1', name: "icon" }), this.header_title)), index.h("slot", { key: '1315cd45f94060d82bbd2c65f720a56523c2fb00', name: "title-suffix" })), index.h("slot", { key: 'b83650124fa1ab6b330a1b3bbd16323b6ec16908', name: "custom-title" }), this.subtitle && (index.h("span", { key: 'b969c6b219bdf3ba87f37384a17b9b693c4a005d', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), index.h("slot", { key: '2e4143ac56a283e36baefe516533a748b8d31b3d', name: "subtitle-content" }))), index.h("div", { key: '9a76cfc75dcacb5d459fb11c763df43949e83018', class: 'flex items-center gap-8' }, index.h("slot", { key: '7801dee3ebb51e8cf72200bf7eaab53b590a37d8', name: 'actions' }))));
    }
};

exports.at_header = AtHeader;
