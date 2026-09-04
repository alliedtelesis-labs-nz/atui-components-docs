'use strict';

var index = require('./index-ChtkW4Eq.js');

const AtSrcDestComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Title displayed on the left
     */
    src_title;
    /**
     * Text displayed on the left
     */
    src_text;
    /**
     * Subtitle displayed on the left
     */
    src_subtitle;
    /**
     * Title displayed on the right
     */
    dest_title;
    /**
     * Text displayed on the right
     */
    dest_text;
    /**
     * Subtitle displayed on the right
     */
    dest_subtitle;
    /**
     * Aligns the content to the left or center of the container
     */
    align = 'left';
    render() {
        return (index.h(index.Host, { key: '3680ced2a89e3f3a279791570372c1d6f7a2fe70', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (index.h("h4", { key: '7d4c92ea090cd8c5fd1bf2b34ddeb59c5fdacd5d', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (index.h("div", { key: 'd734317c983bd81190e8a3004c2e3f498180ac8f' }, this.src_text && (index.h("p", { key: 'afa8e24940688200542d5cede55a24d24deb5fa7', class: "text-foreground font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (index.h("p", { key: '358622992f58bfa1c7a43cf156e0c8774fdd966c', class: "text-secondary", "data-name": "src-subtitle" }, this.src_subtitle)))), index.h("div", { key: '2df991b6f3671c6bd689adf3881e2ae531b397d9', class: "fill-muted flex flex-row items-center gap-4" }, index.h("at-icon", { key: '02dae75db3b83199e00db34ad9bb73eafbb1466c', name: "arrow_left", size: "1.2857rem" }), index.h("at-icon", { key: 'd5aa0e007f852e13a3904a51f8d24b038272c996', name: "arrow_right", size: "1.2857rem" })), (this.dest_text || this.dest_subtitle) && (index.h("div", { key: '6f4ba4188daa99a7bc788d10a328ec100f2e56b3', class: "text-right" }, this.dest_text && (index.h("p", { key: '25e02c7ced369b56ef2a643620a6cf308461f2d4', class: "text-foreground font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (index.h("p", { key: 'f71cdc0c5f092200005dc00282fe4f983b5f8edb', class: "text-secondary", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (index.h("h4", { key: 'fe19ce7da7565d982c4f4ee6495f536a80582bb6', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

exports.at_src_dest = AtSrcDestComponent;
