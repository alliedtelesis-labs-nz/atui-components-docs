'use strict';

var index = require('./index-DE68Mlxo.js');

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
        return (index.h(index.Host, { key: '09c8fbc44872b0ec2d6a14124fecc7ed7b778521', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (index.h("h4", { key: 'b04d23ffe20de6febc5ab706aae6729377dca601', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (index.h("div", { key: '5ed1d65639c6d6ab06842fe80649cc857ea9cc19' }, this.src_text && (index.h("p", { key: 'da68680556ceb7fee6a6b86923073490727d7e69', class: "text-foreground font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (index.h("p", { key: '7db40d1543f7b4ba88557815a5cc5e786b18461b', class: "text-secondary", "data-name": "src-subtitle" }, this.src_subtitle)))), index.h("div", { key: 'dd782006b2096540a62b77b230c63682f1887bca', class: "fill-muted flex flex-row items-center gap-4" }, index.h("at-icon", { key: '13605294acec9ee2473360d6ac45de3de8dee317', name: "arrow_left", size: "1.2857rem" }), index.h("at-icon", { key: 'c18104de6565a37d50d3920dd1e65c5900392d7b', name: "arrow_right", size: "1.2857rem" })), (this.dest_text || this.dest_subtitle) && (index.h("div", { key: 'df502b24ba302dff97a9862d378292d3369be600', class: "text-right" }, this.dest_text && (index.h("p", { key: '211866e48bc585671036ae2ce9fa76c888ff60e9', class: "text-foreground font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (index.h("p", { key: 'ceb00bd553139e66d00562ea45bb8e45dbc87970', class: "text-secondary", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (index.h("h4", { key: 'd2cd16f68db34179455512adef43a98cd0edea68', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

exports.at_src_dest = AtSrcDestComponent;
