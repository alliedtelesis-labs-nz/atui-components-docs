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
        return (index.h(index.Host, { key: '832b19aa1f44d998fb2c12efce01002f680ff416', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (index.h("h4", { key: '06551123814e855e3d970fe17ccce45e2c156248', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (index.h("div", { key: '214d5d2e70d385572f83d2445bc59c33acc9d149' }, this.src_text && (index.h("p", { key: 'c4c88eea6f647bc2702f82b6b819d26f5e41e747', class: "text-foreground font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (index.h("p", { key: '994b30b4d6b66ffb40189c355f15983d63bb074c', class: "text-secondary", "data-name": "src-subtitle" }, this.src_subtitle)))), index.h("div", { key: '3dcefb96c43a384446f30398bf055fde7b7833f7', class: "fill-muted flex flex-row items-center gap-4" }, index.h("at-icon", { key: 'a041b29573060fa2196a46e5e70000f9e835c5ce', name: "arrow_left", size: "1.2857rem" }), index.h("at-icon", { key: '607efa116facdc715de63829faeceac636bab50f', name: "arrow_right", size: "1.2857rem" })), (this.dest_text || this.dest_subtitle) && (index.h("div", { key: 'eea1490b5f9728da6e6dbd659a37781208944cfa', class: "text-right" }, this.dest_text && (index.h("p", { key: '764ac262e0412604ed2cea3b25f6a03f1b8d6c4f', class: "text-foreground font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (index.h("p", { key: '1fdc4f9a1e975e980848865994489d72e18d55e7', class: "text-secondary", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (index.h("h4", { key: '064bb4ad3f12fc6aab77aa2c54aec58c40105c87', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

exports.at_src_dest = AtSrcDestComponent;
