'use strict';

var index = require('./index-LVEefvKk.js');

const AtTextImageCell = class {
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
        return (index.h(index.Host, { key: 'c582383171eb0238420aafa09efdc1a812cd31e5', class: "flex h-full items-center" }, index.h("at-tooltip", { key: '843b3a245163e2b2d542e6f8d40f0d31c8fa3272', position: "right", disabled: !((_a = this.params) === null || _a === void 0 ? void 0 : _a.generateTooltip) }, index.h("div", { key: '06839d14e1ff10a70fbd441ef57b9d48d6813379', class: "flex items-center gap-8", slot: "tooltip-trigger" }, this.imagePosition === 'before' &&
            this.imageSource && (index.h("img", { key: 'c5896719b8d61430b1219c067ba8828be3bc5b9a', src: this.imageSource, style: {
                height: `${this.imageHeight}px`,
                width: this.imageWidth
                    ? `${this.imageWidth}px`
                    : undefined,
            }, class: this.imageClass && this.imageClass, alt: "" })), this.text && index.h("span", { key: '9dec8417ec14d12c6bdf933c6d4482a7d484fb0d', class: "truncate" }, this.text), this.imagePosition === 'after' && this.imageSource && (index.h("img", { key: '27e501430109906f71ec9c9291ca9023012ff482', src: this.imageSource, style: {
                height: `${this.imageHeight}px`,
                width: this.imageWidth
                    ? `${this.imageWidth}px`
                    : undefined,
            }, class: this.imageClass && this.imageClass, alt: "" }))), ((_b = this.params) === null || _b === void 0 ? void 0 : _b.generateTooltip) && (index.h("span", { key: 'dce804e345050c7b5594e2857c2198ae321470c9' }, this.params.generateTooltip(this.params))))));
    }
    get el() { return index.getElement(this); }
};

exports.at_text_image_cell = AtTextImageCell;
//# sourceMappingURL=at-text-image-cell.entry.cjs.js.map
