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
        return (index.h(index.Host, { key: 'ac95855e17eb90a633ab9bb00a27f70e94064605', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, index.h("div", { key: '84bc37c532eca271e3e919cb08aff2f9d1efb024', class: "flex items-center gap-8 overflow-hidden" }, index.h("slot", { key: '9fc002178f6d8859b87fa96ecafdbc37781fffe7', name: "title-prefix" }), index.h("div", { key: 'b5261ea2f6e631009e59f4288add36506df02a4d', class: "flex flex-grow flex-col overflow-hidden" }, index.h("div", { key: '22a9200e2fd84c7e3a94d8f8e5ab628d3983c8e8', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (index.h(HeadingTag, { key: '4f6b56ff5ad0cc0f950e9912cb8b93e90eef1cf0', class: "flex items-center gap-8 truncate", "data-name": "header-title" }, index.h("slot", { key: 'a8dcd9b9eb5a26713d6e223267bee080d9e638ef', name: "icon" }), this.header_title)), index.h("slot", { key: '873e41b086cb0bb9128e3ecbaa0bf8a8a261ec38', name: "title-suffix" })), index.h("slot", { key: '0b1d4313a1edeba5c81c51915eca6ff7fa19eb61', name: "custom-title" }), this.subtitle && (index.h("span", { key: 'f822ef569d702d95fddc7d49592222c716ee2a9d', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), index.h("slot", { key: '78d66f4bb3d125a2d2d7b17a9a8c1525fd6f2c85', name: "subtitle-content" }))), index.h("div", { key: '9158c01a03673eb413081e8078cbc81a0f5401d8', class: 'flex items-center gap-8' }, index.h("slot", { key: '8e425e01a13b139dc6e6ce5b7c9c6d81dd9ce383', name: 'actions' }))));
    }
};

exports.at_header = AtHeader;
