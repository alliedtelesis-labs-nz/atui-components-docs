'use strict';

var index = require('./index-BVOcg3sk.js');

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
        return (index.h(index.Host, { key: 'e1c1746aeb7a9e3eae63498a8da26ebd2476797d', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, index.h("div", { key: '93a05b27f18ff3990c3f81561067870b4d33182d', class: "flex items-center gap-8 overflow-hidden" }, index.h("slot", { key: 'beb5e1098c33dc4479b9335fd36d755d48387f11', name: "title-prefix" }), index.h("div", { key: '27334b4257d7fb2cb5b2a9733cdb573ce83d3f5c', class: "flex flex-grow flex-col overflow-hidden" }, index.h("div", { key: '578bdce360e0fa419b1f7246a8721657ad373091', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (index.h(HeadingTag, { key: '55d577ccca8641a33070136c503627d448bff1b6', class: "flex items-center gap-8 truncate", "data-name": "header-title" }, index.h("slot", { key: '40533277375825247cf0eef3af77edf17f994c49', name: "icon" }), this.header_title)), index.h("slot", { key: '19aa4d9111194d62b7725431627bc6011eab9e2b', name: "title-suffix" })), index.h("slot", { key: 'a0e0bd2da5e916df385547491226d593130ccb38', name: "custom-title" }), this.subtitle && (index.h("span", { key: 'a42959ca320df06c7855f4b265d5eb4dc39fb32b', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), index.h("slot", { key: '83a11e011843b4512228a69932f4596216a63862', name: "subtitle-content" }))), index.h("div", { key: 'd78cb17ebc0d1cd011f4e93b38ef2bd30fb15139', class: 'flex items-center gap-8' }, index.h("slot", { key: '8566152ce71a1d040c8c3c22c120bd9310e7be09', name: 'actions' }))));
    }
};

exports.at_header = AtHeader;
