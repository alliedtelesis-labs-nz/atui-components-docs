'use strict';

var index = require('./index--r5sCsiV.js');

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
        return (index.h(index.Host, { key: '0c102fa5022f625f9106bbce495a30c3ead219cf', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, index.h("div", { key: 'a0c93cbfea65e3aa38e9369db94f59e60cbdc2df', class: "flex items-center gap-8 overflow-hidden" }, index.h("slot", { key: '13a634bad764f65c714e844a62d63a003ca5c320', name: "title-prefix" }), index.h("div", { key: 'd8b4df684469e8ed86663acb7def0e724ebd3537', class: "flex flex-grow flex-col overflow-hidden" }, index.h("div", { key: 'f3bf45260bbdf914c28e14720cc5326fa90287fb', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (index.h(HeadingTag, { key: '6ded69af0696856dfe7ddfeb13d7e44acd9b5cd7', class: "flex items-center truncate", "data-name": "header-title" }, this.icon && (index.h("i", { key: '4149d760be3301cd99311aacb5fc525f5ded9fdf', class: "material-icons mr-8" }, this.icon)), this.header_title)), index.h("slot", { key: 'cd47748b08876a2bf116d83a76d6768b61fdb638', name: "title-suffix" })), index.h("slot", { key: '10ccf561e413933bcaa5c4ab4720d3ae84504345', name: "custom-title" }), this.subtitle && (index.h("span", { key: '882ee6954d8c44c4c7993984d5d8810ccb12097e', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), index.h("slot", { key: 'ecac3d0d3b5ecdb9703918469df74503e382b540', name: "subtitle-content" }))), index.h("div", { key: '4d3b8a4b40612c213ffad5689bf2ec131553f5b8', class: 'flex items-center gap-8' }, index.h("slot", { key: '82b2e915588cdc12b73f6f158146697ae1ab9b66', name: 'actions' }))));
    }
};

exports.at_header = AtHeader;
