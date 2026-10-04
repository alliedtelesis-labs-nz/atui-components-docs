'use strict';

var index = require('./index-Dzqi4iVM.js');

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
        return (index.h(index.Host, { key: 'ac5d7636e4973e0cbfcc79848a676e9718fd9443', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (index.h("h4", { key: 'e382f44b2bf7052459dfbe83c7715abee49e3372', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (index.h("div", { key: 'ee4848f966e33b45a7d94ea2451ed4d983b76941' }, this.src_text && (index.h("p", { key: '368816ce2a8c3abac09e9f2456d837e692de00c7', class: "text-foreground font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (index.h("p", { key: '51d3735916fe6dd96b34f41bb0f5e0ff125d3e81', class: "text-secondary", "data-name": "src-subtitle" }, this.src_subtitle)))), index.h("div", { key: 'a03fb64fc12a88476ca1b90a0e953b09fe9cb10f', class: "text-muted flex flex-row items-center gap-4" }, index.h("at-icon", { key: '3cc32fb8e7e1cc91bfe39130eea0fc41e16111e7', name: "arrow_left", size: "1.2857rem" }), index.h("at-icon", { key: '18a9277e8a84902afb3ad748930bea7a9dee9abc', name: "arrow_right", size: "1.2857rem" })), (this.dest_text || this.dest_subtitle) && (index.h("div", { key: '8ffc8db970b559273b05f03ec3b17e99008318db', class: "text-right" }, this.dest_text && (index.h("p", { key: 'eb0964fc2ce2a6d92cafebceb052066ba7ffe258', class: "text-foreground font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (index.h("p", { key: '68b23c46904a534566adf3c80a5cd23fe06e2e88', class: "text-secondary", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (index.h("h4", { key: 'a8daa980ad1fb2c9f53bb781b3350ff00234a2bc', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

exports.at_src_dest = AtSrcDestComponent;
