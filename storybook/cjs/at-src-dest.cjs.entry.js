'use strict';

var index = require('./index-Bc1nzv_X.js');

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
        return (index.h(index.Host, { key: '3bcb406c359cd609cc18dca54188b65f945436d7', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (index.h("h4", { key: '15ef2e58c14befea26c291dfeb7ffa91c8ed71f7', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (index.h("div", { key: '7cec5e22283832238cabcdc3a5414e64c7b6a358' }, this.src_text && (index.h("p", { key: '9a13b9601826846e8b3924cfbcbe9b94d5c2439e', class: "text-foreground font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (index.h("p", { key: '24d6a46af310335e400452ed13caca151926e582', class: "text-secondary", "data-name": "src-subtitle" }, this.src_subtitle)))), index.h("div", { key: '9a287696524449303fcc5406700364caa97e3d17', class: "fill-muted flex flex-row items-center gap-4" }, index.h("at-icon", { key: '132fc218ef638102be4b7d22d2900ebd0f5d5687', name: "arrow_left", size: "1.2857rem" }), index.h("at-icon", { key: '262dc2577af59d437666ae881f6c990fc502be27', name: "arrow_right", size: "1.2857rem" })), (this.dest_text || this.dest_subtitle) && (index.h("div", { key: '8a451eaeedab37c46c2fde81dc5bc0e3ae34f42d', class: "text-right" }, this.dest_text && (index.h("p", { key: 'bfc1603c145b59fbbc35e51b5c5b079539591372', class: "text-foreground font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (index.h("p", { key: '2bccc05efe3699c7190c617b428a41095e01df44', class: "text-secondary", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (index.h("h4", { key: '5be7a5f7eab075d4ba2158463cca83ea2b104afd', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

exports.at_src_dest = AtSrcDestComponent;
