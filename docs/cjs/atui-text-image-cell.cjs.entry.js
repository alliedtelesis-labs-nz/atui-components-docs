'use strict';

var index = require('./index-DGivrgtr.js');

const AtuiTextImageCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.imageHeight = 20;
    }
    init(params) {
        this.params = params;
        this.imageSource = params.imageSource;
        this.imageHeight = params.imageHeight || this.imageHeight;
        this.text = params.value || params.text;
        if (params.getImageSource && params.data) {
            this.imageSource = params.getImageSource(params.data);
        }
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.updateCell(params.value);
        return true;
    }
    updateCell(newValue) {
        this.params.value = newValue;
        this.text = newValue;
    }
    render() {
        return (index.h(index.Host, { key: 'eabf7a7f8b95b50124d8cd565c14d4f490c7c7c2', class: "flex items-center overflow-hidden" }, index.h("atui-tooltip", { key: 'dba334e60fc2564d506fbb757c54b7da3f88be72', position: "right", is_visible: !!this.params.generateTooltip }, index.h("div", { key: '4a967271b4900066546703d27a564ac933c83e86', class: "flex items-center", slot: "tooltip-trigger" }, this.params.isImageAtFront && this.imageSource && (index.h("img", { key: 'd933a8d53a377f9f9594ce1749398d9e13f67da0', src: this.imageSource, class: "mr-2", style: { height: `${this.imageHeight}px` } })), index.h("span", { key: '49c7891b7592a0ab8f0eb20cb217840b9d618ea4', class: "truncate" }, this.text), !this.params.isImageAtFront && this.imageSource && (index.h("img", { key: 'd34782ffca592a8336aeff9b7f162a29941b9aeb', src: this.imageSource, class: "ml-2", style: { height: `${this.imageHeight}px` } }))), this.params.generateTooltip && (index.h("span", { key: 'd73abe20a19345c092c53ec5595f0d5b99ad434c', slot: "tooltip-content", class: `leading-normal` }, this.params.generateTooltip(this.params))))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_text_image_cell = AtuiTextImageCell;
//# sourceMappingURL=atui-text-image-cell.entry.cjs.js.map

//# sourceMappingURL=atui-text-image-cell.cjs.entry.js.map