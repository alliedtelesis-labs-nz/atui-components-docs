'use strict';

var index = require('./index-BJDFmEHZ.js');

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
        return (index.h(index.Host, { key: '76265637532ba8efe9666769e49c781adc6c9c4f', class: "flex h-full items-center overflow-hidden leading-[100%]" }, this.imageSource && (index.h("atui-tooltip", { key: '028c052e0d0259ac5e46eea9b186f0c587d3c05d', is_visible: !!this.params.generateTooltip }, index.h("div", { key: '500016612ec8970d9e1a56d0a398ac8aa59f2968', class: "flex items-center" }, index.h("img", { key: '0e7e115b4ef24900b6eb6c758bb766d2c22878ce', src: this.imageSource, style: { height: '30px' } })), index.h("span", { key: '0182ceaaf9f024a676cfeb9dc30607f1b66d635e', slot: "tooltip-content" }, this.params.generateTooltip(this.params))))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_image_cell = AtuiImageCell;
//# sourceMappingURL=atui-image-cell.entry.cjs.js.map

//# sourceMappingURL=atui-image-cell.cjs.entry.js.map