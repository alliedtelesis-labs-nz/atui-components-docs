'use strict';

var index = require('./index-BJDFmEHZ.js');

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
        return (index.h(index.Host, { key: '809c4c3b787027a704b9608517bc0618cdb62b82', class: "flex items-center overflow-hidden" }, index.h("atui-tooltip", { key: '82d1d53883db634ed178443cf7f6e83d2988ee4a', position: "right", is_visible: !!this.params.generateTooltip }, index.h("div", { key: 'eb874c2625ae1593095238484715430a8a9b3293', class: "flex items-center", slot: "tooltip-trigger" }, this.params.isImageAtFront && this.imageSource && (index.h("img", { key: '7641c7146c47442607528305c51024bbdf8f9f45', src: this.imageSource, class: "mr-2", style: { height: `${this.imageHeight}px` } })), index.h("span", { key: 'a8a576c4755b093186c44992eff3ee14c43ec055', class: "truncate" }, this.text), !this.params.isImageAtFront && this.imageSource && (index.h("img", { key: '21d986198bd86fea31a929347aa1479c911637ef', src: this.imageSource, class: "ml-2", style: { height: `${this.imageHeight}px` } }))), this.params.generateTooltip && (index.h("span", { key: '7b34d8ec7459901326a274892eb777f35db86896', slot: "tooltip-content", class: `leading-normal` }, this.params.generateTooltip(this.params))))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_text_image_cell = AtuiTextImageCell;
//# sourceMappingURL=atui-text-image-cell.entry.cjs.js.map

//# sourceMappingURL=atui-text-image-cell.cjs.entry.js.map