'use strict';

var index = require('./index--r5sCsiV.js');

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
        return (index.h(index.Host, { key: '2dccefb8bbdad2679dd7bad2d4e3b7503add9370', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (index.h("h4", { key: '43d9884a2eb69b00aa8326188cd5581975ccc805', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (index.h("div", { key: '94fd8c4f44f44171d4eab089c8ee43dedb408ea8' }, this.src_text && (index.h("p", { key: 'adb8a4503c3553749e765e146eb752f97c7b432a', class: "text-foreground font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (index.h("p", { key: '7adbca74e686a0f195c54f601867cfcab10f98fe', class: "text-secondary", "data-name": "src-subtitle" }, this.src_subtitle)))), index.h("div", { key: 'e1541b01bf7b8f29530e5b2149cd863718c81124', class: "fill-muted flex flex-row items-center gap-4" }, index.h("at-icon", { key: 'acb4a52bab63a18446ab7eba38553c9ac72336bf', name: "arrow_left", size: "1.2857rem" }), index.h("at-icon", { key: 'f9b5d21903d761ca7a95de2d389d92466a071f6d', name: "arrow_right", size: "1.2857rem" })), (this.dest_text || this.dest_subtitle) && (index.h("div", { key: '5edffb842b967b101efa1d36c0b0aa57f8575c1c', class: "text-right" }, this.dest_text && (index.h("p", { key: '01146270dc297fbe0b6028da27246f8427d3c719', class: "text-foreground font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (index.h("p", { key: '773ec4ac16c1d5285fe7f8c846fc3a8057ff0d68', class: "text-secondary", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (index.h("h4", { key: 'c3bcf760a073bdce123c4b118a4fb1dd4411f248', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

exports.at_src_dest = AtSrcDestComponent;
