'use strict';

var index = require('./index-DRsFs1GW.js');

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
        return (index.h(index.Host, { key: '155a742c00578422ec0da3dc2f9cd987c5dcbb09', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (index.h("h4", { key: '8d96eed1feec9eda22b4bcd3b5f6ff0278815428', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (index.h("div", { key: 'ba6e057971e000cc731724f1418035ff247280fe' }, this.src_text && (index.h("p", { key: '926711d8ea6f3b30ac4b2a611ff78d2c98e0a981', class: "text-foreground font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (index.h("p", { key: '8e3180f69df3d21ebc6ac6940cf86230c4ac1b64', class: "text-secondary", "data-name": "src-subtitle" }, this.src_subtitle)))), index.h("div", { key: '71e5935bb18a474825a9f4e68285c90ee9b10e6c', class: "fill-muted flex flex-row items-center gap-4" }, index.h("at-icon", { key: 'e032b3ed86267439bff90e0b4cfa46d4b0ef5659', name: "arrow_left", size: "1.2857rem" }), index.h("at-icon", { key: '0e002ad86ff76acbd2a550f1f5e77b1571dd7f6a', name: "arrow_right", size: "1.2857rem" })), (this.dest_text || this.dest_subtitle) && (index.h("div", { key: '5b66dbb7a16accbdd8e493638a015d7f01c4121e', class: "text-right" }, this.dest_text && (index.h("p", { key: 'a61cf9bb0ec1afc5b525abd44faad7d8277bc5c8', class: "text-foreground font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (index.h("p", { key: 'f86ff1c1428bafe9cd3f35de2f6fa735a555f498', class: "text-secondary", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (index.h("h4", { key: 'a047276b163e1cc0ee9d1afe11308a64c7aad875', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

exports.at_src_dest = AtSrcDestComponent;
