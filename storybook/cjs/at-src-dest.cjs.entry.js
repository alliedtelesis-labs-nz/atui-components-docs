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
        return (index.h(index.Host, { key: 'f59b9c76eb6d06255e70cacabebbcfeb21a27f74', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (index.h("h4", { key: '0747ba931388141013db536d721fe013dd8c2b19', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (index.h("div", { key: 'a79e472f16f69bf693537972c571e7249a16949a' }, this.src_text && (index.h("p", { key: 'bd552dd15317b663ccf648b359d5273eb282592f', class: "text-foreground font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (index.h("p", { key: '8bf3ad17b09c3295fdbc647c6037e06bdf15d8a4', class: "text-secondary", "data-name": "src-subtitle" }, this.src_subtitle)))), index.h("div", { key: 'a875a0af62866061bd4b69dc624f36ef24ab0cdd', class: "fill-muted flex flex-row items-center gap-4" }, index.h("at-icon", { key: '3093f8d4826f727de62816f607bdaec6019e72ae', name: "arrow_left", size: "1.2857rem" }), index.h("at-icon", { key: '06101c1a9e1b2e0b811fdb29b80b05dc833c5455', name: "arrow_right", size: "1.2857rem" })), (this.dest_text || this.dest_subtitle) && (index.h("div", { key: '6bc978abea96703d5ff39cb9457613b9af1e0139', class: "text-right" }, this.dest_text && (index.h("p", { key: '1901023b8198651bbabee4d0e236747c39e0005d', class: "text-foreground font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (index.h("p", { key: 'ca788135c8989e2603943016a100f634b3b50c1a', class: "text-secondary", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (index.h("h4", { key: 'bc2ba36853688b10e5cd2bba94c499e1eb65ebce', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

exports.at_src_dest = AtSrcDestComponent;
