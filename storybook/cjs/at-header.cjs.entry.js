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
        return (index.h(index.Host, { key: '8c51f3af97accfe002f8047358086b039a679d8e', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-light border-b' : ''}` }, index.h("div", { key: '3c56d4ed2270175120c8eeec71f8166633d8853c', class: "flex items-center gap-8 overflow-hidden" }, index.h("slot", { key: 'ae68bf6e5ca7fe9661a1962f1416f223209962bf', name: "title-prefix" }), index.h("div", { key: 'e08970404e82c3440db451617566902f0b2b4e1f', class: "flex flex-grow flex-col overflow-hidden" }, index.h("div", { key: 'f96d56fc41a99b36dc3fe74e0259c01650c90f8d', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (index.h(HeadingTag, { key: 'b44dd1d2845ab7de22df82761f9aa5a9bc3cd560', class: "flex items-center truncate", "data-name": "header-title" }, this.icon && (index.h("i", { key: 'd111de27e1719ba974b5186d6855fef9eed9260d', class: "material-icons mr-8" }, this.icon)), this.header_title)), index.h("slot", { key: 'e7c17c0d6f075f61f9e7b27ab85f00b25bf798cb', name: "title-suffix" })), index.h("slot", { key: 'ff782a6c2312c14aeaf95c035e1e88d718662c15', name: "custom-title" }), this.subtitle && (index.h("span", { key: 'ac0de803c2e6b1ae4481998f362fe75826225304', class: "text-med truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), index.h("slot", { key: '3e44c29adc12453c2785fc12bef3c280dfe82047', name: "subtitle-content" }))), index.h("div", { key: 'fbedde29c58ef3a6254274c0643bc5c3807de104', class: 'flex items-center gap-8' }, index.h("slot", { key: '914d2984682fb57ceacbfb74854fd4825691c37c', name: 'actions' }))));
    }
};

exports.at_header = AtHeader;
