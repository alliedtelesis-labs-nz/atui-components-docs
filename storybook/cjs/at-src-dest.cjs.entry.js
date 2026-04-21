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
        return (index.h(index.Host, { key: '84fb042f87553cc968c47e25eaaacfdae192cfbc', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (index.h("h4", { key: '26eedc011be2827024764c49a45a594a6d89c8be', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (index.h("div", { key: '40b7ba303014a54b63f067a273634d0afd8638c9' }, this.src_text && (index.h("p", { key: 'e9badadfa73a5b7a306ff241af17cb5d7c50b6d3', class: "text-foreground font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (index.h("p", { key: '598403499990993371c586254055d42e5c8686ee', class: "text-secondary", "data-name": "src-subtitle" }, this.src_subtitle)))), index.h("div", { key: 'ecff1986c7118305e758639fad887e80a6ac2836', class: "fill-muted flex flex-row items-center gap-4" }, index.h("at-icon", { key: 'a29d381afd65ec59b37ea7bf7c019d146ce57b07', name: "arrow_left", size: "1.2857rem" }), index.h("at-icon", { key: '27a0b5fccf1a2cecdf573360260c85397982b9bf', name: "arrow_right", size: "1.2857rem" })), (this.dest_text || this.dest_subtitle) && (index.h("div", { key: '26caa00f2e780a026bbe567bb53a87336d32f2c1', class: "text-right" }, this.dest_text && (index.h("p", { key: 'b707b84d8250652b2d45eac799c10a5516f1a709', class: "text-foreground font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (index.h("p", { key: '69e4d1bfbc040acec8662280edb09359de4ed165', class: "text-secondary", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (index.h("h4", { key: '2d9eef9e1c93399aee88f78e5810abd31ed910fe', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

exports.at_src_dest = AtSrcDestComponent;
