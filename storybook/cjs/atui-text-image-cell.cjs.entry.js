'use strict';

var index = require('./index-s6Ut5Yq6.js');

const AtuiTextImageCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.text = '';
        this.imageHeight = 24;
        this.imagePosition = 'before';
    }
    init(params) {
        var _a, _b;
        this.params = params;
        this.imageHeight = (_a = this.params.imageHeight) !== null && _a !== void 0 ? _a : this.imageHeight;
        this.imageWidth = this.params.imageWidth;
        this.imageClass = this.params.imageClass;
        this.imagePosition = (_b = this.params.imagePosition) !== null && _b !== void 0 ? _b : 'before';
        this.updateTextAndImage();
    }
    refresh(params) {
        this.params = params;
        this.updateTextAndImage();
        return true;
    }
    updateTextAndImage() {
        var _a;
        this.text = this.params.text
            ? this.params.text(this.params.data)
            : ((_a = this.params.value) !== null && _a !== void 0 ? _a : '');
    }
    getGui() {
        return this.el;
    }
    get imageSource() {
        return this.params.imageSource(this.params.data);
    }
    render() {
        var _a, _b;
        return (index.h(index.Host, { key: '7b1880eda9f2b5a646719be2abfeccd3bdbb1416', class: "flex h-full items-center" }, index.h("atui-tooltip", { key: '4c22811e2f2c205bada143762c305f08def779c4', position: "right", disabled: !((_a = this.params) === null || _a === void 0 ? void 0 : _a.generateTooltip) }, index.h("div", { key: '412d5ea2b7927aceabb392aa5c69237dd02008e9', class: "flex items-center gap-8", slot: "tooltip-trigger" }, this.imagePosition === 'before' &&
            this.imageSource && (index.h("img", { key: '47c68ef94ab94b2d1bff0aa67d94b4f5888b088e', src: this.imageSource, style: {
                height: `${this.imageHeight}px`,
                width: this.imageWidth
                    ? `${this.imageWidth}px`
                    : undefined,
            }, class: this.imageClass && this.imageClass, alt: "" })), this.text && index.h("span", { key: '647b9ea61c8ea2b845838a0f76e1c451cd911780', class: "truncate" }, this.text), this.imagePosition === 'after' && this.imageSource && (index.h("img", { key: 'd50ec68644144e097b85b304fb83b1b823161e8e', src: this.imageSource, style: {
                height: `${this.imageHeight}px`,
                width: this.imageWidth
                    ? `${this.imageWidth}px`
                    : undefined,
            }, class: this.imageClass && this.imageClass, alt: "" }))), ((_b = this.params) === null || _b === void 0 ? void 0 : _b.generateTooltip) && (index.h("span", { key: 'ba3bb2d995dbc47b1b71aa5888ca9a76a41c668c', slot: "tooltip-content" }, this.params.generateTooltip(this.params))))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_text_image_cell = AtuiTextImageCell;
//# sourceMappingURL=atui-text-image-cell.entry.cjs.js.map

//# sourceMappingURL=atui-text-image-cell.cjs.entry.js.map