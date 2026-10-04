'use strict';

var index = require('./index-Dzqi4iVM.js');

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
        return (index.h(index.Host, { key: '72029615e3edff43ff16e767a1e97654419fec4a', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: '0ef467878ad5d5bbc7c51caa1d06285febcbd15e', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: 'a26357b74587374a124eec95989622b64e158aaf', class: "flex items-center gap-8", slot: "tooltip-trigger" }, this.imagePosition === 'before' &&
            this.imageSource && (index.h("img", { key: '24563ef5410c76c733fbbb642b5eb20a5beeea0e', src: this.imageSource, style: {
                height: `${this.imageHeight}px`,
                width: this.imageWidth
                    ? `${this.imageWidth}px`
                    : undefined,
            }, class: this.imageClass && this.imageClass, alt: "" })), this.text && index.h("span", { key: 'c6bdfcd2426f0330cb9de5c94e443e4d600167d1', class: "truncate" }, this.text), this.imagePosition === 'after' && this.imageSource && (index.h("img", { key: '468024c33a0504cd01f73be7314b99f9ec05b9e1', src: this.imageSource, style: {
                height: `${this.imageHeight}px`,
                width: this.imageWidth
                    ? `${this.imageWidth}px`
                    : undefined,
            }, class: this.imageClass && this.imageClass, alt: "" }))), this.params?.generateTooltip && (index.h("span", { key: '14adc90b7dc44db28e866285316ee2aecd2f01ac' }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_text_image_cell = AtTextImageCell;
