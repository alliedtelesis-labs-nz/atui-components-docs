'use strict';

var index = require('./index-ToR1OkrH.js');

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
        return (index.h(index.Host, { key: '977e4b0dda63741836f14d3789bd1c412c69e260', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (index.h("h4", { key: 'eb8c233da295665787e7dd60200baef00b68acd3', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (index.h("div", { key: 'b8e17a957a3b9cdc6e20ba9f77d1fe57cbaaf475' }, this.src_text && (index.h("p", { key: '3990770e5e729f6a2b18afdb99426123848f4a36', class: "text-foreground font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (index.h("p", { key: '87a433a73b103057e373a29118da0ff39fdb5447', class: "text-secondary", "data-name": "src-subtitle" }, this.src_subtitle)))), index.h("div", { key: 'e29e859bb697c3138eb65d62c7e7c1ed8b06c81a', class: "fill-muted flex flex-row items-center gap-4" }, index.h("at-icon", { key: '6f44e336f79e3ecdb0480c933c0ae0270fc03883', name: "arrow_left", size: "1.2857rem" }), index.h("at-icon", { key: '45b5e9a6c3834f5eb33a63386828f333adfd947b', name: "arrow_right", size: "1.2857rem" })), (this.dest_text || this.dest_subtitle) && (index.h("div", { key: 'c3b1c08da0652009e191c40b6cb8b6f9f3f9ae24', class: "text-right" }, this.dest_text && (index.h("p", { key: '3ed7e028db1c87d4845bc21ddde94280a50140aa', class: "text-foreground font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (index.h("p", { key: 'c8cc709a9c2048f51cb8e2765b75516bb45d2031', class: "text-secondary", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (index.h("h4", { key: '715c3881ff40317bdaacf5fc4ff8f28d0eac25e2', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

exports.at_src_dest = AtSrcDestComponent;
