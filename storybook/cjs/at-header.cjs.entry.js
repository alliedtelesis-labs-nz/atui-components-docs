'use strict';

var index = require('./index-BRms7T38.js');

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
        return (index.h(index.Host, { key: '2a5dae49e7ae218c85675718b2c41f80d4f10fcb', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-light border-b' : ''}` }, index.h("div", { key: 'ef76641e45db770c9c2a7a1890c4804156c77e1a', class: "flex items-center gap-8 overflow-hidden" }, index.h("slot", { key: '9ab29a7809d9fa8cc94f9a045190a8345063d134', name: "title-prefix" }), index.h("div", { key: '99362cd80e0b7068dabce869b2e4f2d8a4a4d0fa', class: "flex flex-grow flex-col overflow-hidden" }, index.h("div", { key: '2353aee158c70d449bc59bd2de6affeea8a97426', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (index.h(HeadingTag, { key: '37fb018b0bc9d1ceebf326d2c82ba15c416a3b52', class: "flex items-center truncate", "data-name": "header-title" }, this.icon && (index.h("i", { key: 'b6e410c22c471cf1a932871e702b0c968f743e65', class: "material-icons mr-8" }, this.icon)), this.header_title)), index.h("slot", { key: '815acab8b7d42979278be1fadbd15025f8e85f9a', name: "title-suffix" })), index.h("slot", { key: '0c8c133acd44b269b521c7bf900404447fff0ec1', name: "custom-title" }), this.subtitle && (index.h("span", { key: 'e0ff3905baa3fd64abacdd980b01a18a37d3d301', class: "text-med truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), index.h("slot", { key: 'be73338a430ac0068618006a804949ac7a4b9261', name: "subtitle-content" }))), index.h("div", { key: '5e4ad197c182cee4dcf204308c3797a7301a13f7', class: 'flex items-center gap-8' }, index.h("slot", { key: 'db7c95e44f353d46452f4885b910f351ac7f92d0', name: 'actions' }))));
    }
};

exports.at_header = AtHeader;
