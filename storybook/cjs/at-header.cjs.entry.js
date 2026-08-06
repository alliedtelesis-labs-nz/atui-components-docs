'use strict';

var index = require('./index-DK-3iCCu.js');

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
        return (index.h(index.Host, { key: '602cddb5a2e712120c8803f16bec6bd15f943058', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, index.h("div", { key: '035556bebac711e9eb8546f9a089cdfd1cdb357d', class: "flex items-center gap-8 overflow-hidden" }, index.h("slot", { key: '71af7dff26cc649676730a11e4a431ed421ef0e5', name: "title-prefix" }), index.h("div", { key: 'dbfa533e060f996a79f5b596e0268b8dca66f545', class: "flex flex-grow flex-col overflow-hidden" }, index.h("div", { key: '9db9683e151c12b1a17343709832d9043d7d376f', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (index.h(HeadingTag, { key: '6c68fbebf47588f4ac55099c47744758ad7321ed', class: "flex items-center gap-8 truncate", "data-name": "header-title" }, index.h("slot", { key: '093148755f2650e8687870ffc9611e22a4dabcfc', name: "icon" }), this.header_title)), index.h("slot", { key: 'e890206b6a35fd40600cb110e62fcc402c98eea5', name: "title-suffix" })), index.h("slot", { key: 'ecd9edeae40f765d756ce6ddee987b0a2ffa7313', name: "custom-title" }), this.subtitle && (index.h("span", { key: '0766a60b3f4114b6218d664e762dc09875a751e1', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), index.h("slot", { key: '2e1dff363c109eb4a824d7d2d971555dbf908b64', name: "subtitle-content" }))), index.h("div", { key: '315cd32e12993282f497eb279dfcbe619ecc1f1c', class: 'flex items-center gap-8' }, index.h("slot", { key: 'bf7fc3ac550da1013a1eb354f3366e19945ae38a', name: 'actions' }))));
    }
};

exports.at_header = AtHeader;
