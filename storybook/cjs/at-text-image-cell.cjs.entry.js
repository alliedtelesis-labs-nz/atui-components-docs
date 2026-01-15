'use strict';

var index = require('./index-ChzPazsa.js');

const AtTextImageCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    params;
    text = '';
    imageHeight = 24;
    imageWidth;
    imageClass;
    imagePosition = 'before';
    init(params) {
        this.params = params;
        this.imageHeight = this.params.imageHeight ?? this.imageHeight;
        this.imageWidth = this.params.imageWidth;
        this.imageClass = this.params.imageClass;
        this.imagePosition = this.params.imagePosition ?? 'before';
        this.updateTextAndImage();
    }
    refresh(params) {
        this.params = params;
        this.updateTextAndImage();
        return true;
    }
    updateTextAndImage() {
        this.text = this.params.text
            ? this.params.text(this.params.data)
            : (this.params.value ?? '');
    }
    getGui() {
        return this.el;
    }
    get imageSource() {
        return this.params.imageSource(this.params.data);
    }
    render() {
        return (index.h(index.Host, { key: 'c3a5bba4ceb19610ebdd148bbf2c995560219cde', class: "flex h-full items-center" }, index.h("at-tooltip", { key: 'b069b2445b2ad8c095c1b48ad8bbf3ff139b6095', position: "right", disabled: !this.params?.generateTooltip }, index.h("div", { key: '412d5ea2b7927aceabb392aa5c69237dd02008e9', class: "flex items-center gap-8", slot: "tooltip-trigger" }, this.imagePosition === 'before' &&
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
            }, class: this.imageClass && this.imageClass, alt: "" }))), this.params?.generateTooltip && (index.h("span", { key: '118b4ae7ec0877c63b8f23ff2869dbb19cf9c1b7' }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_text_image_cell = AtTextImageCell;
