'use strict';

var index = require('./index-D1oh76XY.js');

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
        return (index.h(index.Host, { key: '6477a08736b30af56a764e0efe4cfa3b504a864a', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, index.h("div", { key: '6e1b7360ee55dae94d201ce4fed7a275c28f5b69', class: "flex items-center gap-8 overflow-hidden" }, index.h("slot", { key: 'bf987aa19e2dd3ec75c55a06e22c29b96b5db8dd', name: "title-prefix" }), index.h("div", { key: '9ae430935bd9a53af8000a1e461b145debe98e30', class: "flex flex-grow flex-col overflow-hidden" }, index.h("div", { key: '8dae4e4326c9b92f3171981e4f3ecfe3acfc8702', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (index.h(HeadingTag, { key: '7981bf1a6e462b0d8e5e1e1a0a7406a148f119f5', class: "flex items-center gap-8 truncate", "data-name": "header-title" }, index.h("slot", { key: '30402289be42f5af2e11b513aa0740eb491f33e2', name: "icon" }), this.header_title)), index.h("slot", { key: '495b4c870dde54931beff3148ca4dbe4d18bd135', name: "title-suffix" })), index.h("slot", { key: '14857df4b62ae709cd8cc5081eb92306bfee6c27', name: "custom-title" }), this.subtitle && (index.h("span", { key: '85421982457d7d6d7f7b712cff00d3fc2ffd74d8', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), index.h("slot", { key: '8788b1ca44af0578c2fbe6a7cd4cf806cbebe940', name: "subtitle-content" }))), index.h("div", { key: 'bc007c2cddad3368fd77a6d7754eca099e6f9c9c', class: 'flex items-center gap-8' }, index.h("slot", { key: '61ba88b81ec3a44f74552947d8833c303e168950', name: 'actions' }))));
    }
};

exports.at_header = AtHeader;
