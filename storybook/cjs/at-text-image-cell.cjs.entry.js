'use strict';

var index = require('./index-Bc1nzv_X.js');

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
        return (index.h(index.Host, { key: '4c9c77d45841067590362d65c4ab5cc74d20d014', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: 'e99d15d6f455534b5b79ea14cb0639972f1bba56', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: '4ecd7bef56b041ee3c8b5f93b9d6771de2c72cfd', class: "flex items-center gap-8", slot: "tooltip-trigger" }, this.imagePosition === 'before' &&
            this.imageSource && (index.h("img", { key: '5dd7095b739e5c3aaf2c03185c4ce23635c509bf', src: this.imageSource, style: {
                height: `${this.imageHeight}px`,
                width: this.imageWidth
                    ? `${this.imageWidth}px`
                    : undefined,
            }, class: this.imageClass && this.imageClass, alt: "" })), this.text && index.h("span", { key: 'a9bf06a4e6f18fbbf6bbd91e8b62546c4b795c70', class: "truncate" }, this.text), this.imagePosition === 'after' && this.imageSource && (index.h("img", { key: '9c2058e16888cff3daa66307577bc1e408b8e27e', src: this.imageSource, style: {
                height: `${this.imageHeight}px`,
                width: this.imageWidth
                    ? `${this.imageWidth}px`
                    : undefined,
            }, class: this.imageClass && this.imageClass, alt: "" }))), this.params?.generateTooltip && (index.h("span", { key: '8a6d0174ac8fd0dcc587c7eb62d078edd01c10c7' }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_text_image_cell = AtTextImageCell;
