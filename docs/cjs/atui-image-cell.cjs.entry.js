'use strict';

var index = require('./index-DGivrgtr.js');

const AtuiImageCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    init(params) {
        this.params = params;
        this.imageSource = params.imageSource;
        this.getImageSource = params.getImageSource;
        if (params.getImageSource) {
            this.imageSource = params.getImageSource(params.data);
        }
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.updateCell(params.data);
        return true;
    }
    updateCell(newValue) {
        this.params.data = newValue;
    }
    render() {
        return (index.h(index.Host, { key: '4ec67489ca3a326c8949b081eb13d1f847d413ac', class: "flex h-full items-center overflow-hidden leading-[100%]" }, this.imageSource && (index.h("atui-tooltip", { key: '84a498a738cb0e4a0915b6ceef842a838737ba46', is_visible: !!this.params.generateTooltip }, index.h("div", { key: '34b587ab9c2ae818c45b9d9ba612f7b55382bc34', class: "flex items-center" }, index.h("img", { key: '7a02c0a3c7cc7f0f19a6af1c9f925fffc1338d6f', src: this.imageSource, style: { height: '30px' } })), index.h("span", { key: '5ce6ab28714e7119eb77b56ae35e4346ec761e0f', slot: "tooltip-content" }, this.params.generateTooltip(this.params))))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_image_cell = AtuiImageCell;
//# sourceMappingURL=atui-image-cell.entry.cjs.js.map

//# sourceMappingURL=atui-image-cell.cjs.entry.js.map