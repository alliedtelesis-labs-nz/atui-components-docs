'use strict';

var index = require('./index-CNxmwTiq.js');

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
        return (index.h(index.Host, { key: '0b50ff0cd9103afc9a4ebdbe8d75a02900e14f26', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (index.h("h4", { key: '024100675decd31682407530d8042ba9d3927426', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (index.h("div", { key: '164cb6a1b09aac8c45d0bd15ca9dd51ed119e387' }, this.src_text && (index.h("p", { key: 'f0ab319efc646bbe53b3f15ffb337c98e02926dc', class: "text-dark font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (index.h("p", { key: 'a3366bfaa34af77e76f3c0f1a8d16d2dcf601f01', class: "text-med", "data-name": "src-subtitle" }, this.src_subtitle)))), index.h("div", { key: '82de42d0df31b780dbc9567b7bc4c139abd5aaaa', class: "icon-lg text-light flex-row items-center gap-4" }, index.h("span", { key: '5e352c70802752d12f1c026ad7d8996b980f4ace', class: "material-icons" }, "arrow_back"), index.h("span", { key: '4d01a77a2f99c2a16033f23c133dcf7db385680d', class: "material-icons" }, "arrow_forward")), (this.dest_text || this.dest_subtitle) && (index.h("div", { key: '53193c95865ca38f1b74aa6e2a1ba6ea4b133535', class: "text-right" }, this.dest_text && (index.h("p", { key: '9a7850572c29cfb9d759a851bf67d11b8dca6f48', class: "text-dark font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (index.h("p", { key: '446fd24b4dcd95644c2a1762854cd075914c0641', class: "text-med", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (index.h("h4", { key: '3f6bf2996b9ac60c49c44d4c4e25ab0349d07acc', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

exports.at_src_dest = AtSrcDestComponent;
