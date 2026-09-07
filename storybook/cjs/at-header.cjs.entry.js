'use strict';

var index = require('./index-ByfMXhOa.js');

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
        return (index.h(index.Host, { key: '550d5da5477efff3af3bdd36375353277335fd8f', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, index.h("div", { key: '4d9355474ec3d615ed6abb915dec2988b4c80332', class: "flex items-center gap-8 overflow-hidden" }, index.h("slot", { key: 'ddf8ffe8b6ca8c95ae09a2521adb43a1646991f0', name: "title-prefix" }), index.h("div", { key: 'e04e50ba1f54488609784848c5b5a1e984cc4d17', class: "flex flex-grow flex-col overflow-hidden" }, index.h("div", { key: '4d8e8cfc8286a9fd5512a3e65fa672344ea8749f', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (index.h(HeadingTag, { key: '2e7838a42f648317781af8767f3269f7afeca941', class: "flex items-center gap-8 truncate", "data-name": "header-title" }, index.h("slot", { key: 'e011e4a10ef6e0c3bf392ea3c762d5dae46bc4de', name: "icon" }), this.header_title)), index.h("slot", { key: 'bda2b90c551cf87c15119076e39dddb393339d18', name: "title-suffix" })), index.h("slot", { key: '49e60bf43185a8b2c7f032e4942251ef793a2d91', name: "custom-title" }), this.subtitle && (index.h("span", { key: 'db3ecbda566134894df4361ee286c308a9b7ad11', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), index.h("slot", { key: 'b88b3f0df31aad5794bf4f3bcce53fb72775a818', name: "subtitle-content" }))), index.h("div", { key: 'd73d51fd54b0234a8078baef7e69c00ff36956f5', class: 'flex items-center gap-8' }, index.h("slot", { key: 'b70e1c23139ffd6930195dca587bcefe47b98099', name: 'actions' }))));
    }
};

exports.at_header = AtHeader;
