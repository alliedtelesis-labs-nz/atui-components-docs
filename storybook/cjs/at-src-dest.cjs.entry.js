'use strict';

var index = require('./index-CzDB71Wy.js');

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
        return (index.h(index.Host, { key: '9d3970cda6bed670aabc99b6df10de9df68aa80b', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (index.h("h4", { key: 'fa84c8efad709462ecbfa4fe0ba438ba8478f61f', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (index.h("div", { key: '7d749482a1dc6951f83ee54ef535ff4e5477d6aa' }, this.src_text && (index.h("p", { key: 'cd30117d04c75a37b523ae7854d187b9f7263f0d', class: "text-dark font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (index.h("p", { key: 'a4d0bed7cf8d035b06f6bc770fda104329ec4d6b', class: "text-med", "data-name": "src-subtitle" }, this.src_subtitle)))), index.h("div", { key: 'b6c1c13db6c4b6c46312dcfe20099e76eeaecaa7', class: "icon-lg text-light flex-row items-center gap-4" }, index.h("span", { key: 'ab5279e6850ff824c69a9f1b1058969e8539c334', class: "material-icons" }, "arrow_back"), index.h("span", { key: '46c530d7a1db17dde8b7a0c26d0c30361b63d164', class: "material-icons" }, "arrow_forward")), (this.dest_text || this.dest_subtitle) && (index.h("div", { key: '452ec8e79160f5d4eef4255399adbb0441863fe5', class: "text-right" }, this.dest_text && (index.h("p", { key: '5c03faa99d8a7aca6f21ff91886b8e4894c89f0c', class: "text-dark font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (index.h("p", { key: 'ac89ff2ef0f8fc118ca87ed0addaf29e1e235630', class: "text-med", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (index.h("h4", { key: 'c17dd3ad9c96900b32e1b3d138c1d755b4f19a33', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

exports.at_src_dest = AtSrcDestComponent;
