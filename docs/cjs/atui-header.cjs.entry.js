'use strict';

var index = require('./index-BAt2i-T2.js');

const AtuiHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Size of the header.
         */
        this.size = 'h1';
        /**
         * Adds 16 pixels of padding to the header element
         */
        this.padding = true;
    }
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
        return (index.h(index.Host, { key: '6685d8a804a5a686afd4c3f9030407b358d39123', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-b border-light' : ''}` }, index.h("div", { key: '792da2681a30e28f39833031a1c976718301a882', class: "flex items-center gap-8 overflow-hidden" }, index.h("slot", { key: '5537d96b8379e246a303c3c4a6e6ff130f591937', name: "title-prefix" }), index.h("div", { key: '16f4d001727da3776b698d884e2c9bc6df8cbeda', class: "flex flex-grow flex-col overflow-hidden" }, index.h("div", { key: '7dd16a408fced9d7760ba83e33b49e4542e38ba3', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (index.h(HeadingTag, { key: 'b6b50c1278073a7b6f2465a09d1a7b324bf5e65d', class: "flex items-center truncate", "data-name": "header-title" }, this.icon && (index.h("i", { key: '2b8403c0416c3342587fa6a8afa1ab387d132140', class: "material-icons mr-8" }, this.icon)), this.header_title)), index.h("slot", { key: '4cdbb1de0c247c8086f5c4f40faba724e5028c84', name: "title-suffix" })), index.h("slot", { key: 'e4ecfe168e5546bf423d0aeb881cb8e29497b2be', name: "custom-title" }), this.subtitle && (index.h("span", { key: 'a87fed2790c2edde75575d6ac653c9036dbe76e2', class: "truncate text-sm font-normal text-med", "data-name": "header-subtitle" }, this.subtitle)), index.h("slot", { key: '367f663aaca7ffd8b55dde10fe57420e00e9f750', name: "subtitle-content" }))), index.h("div", { key: '0a114e110daf073278694ad792d6f90c83ab43ab', class: 'flex items-center gap-8' }, index.h("slot", { key: 'f945a618e1951ac00fb425c1c5b0b10c987f0c9f', name: 'actions' }))));
    }
};

exports.atui_header = AtuiHeader;
//# sourceMappingURL=atui-header.entry.cjs.js.map

//# sourceMappingURL=atui-header.cjs.entry.js.map