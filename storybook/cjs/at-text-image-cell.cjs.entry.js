'use strict';

var index = require('./index-CdUivN1V.js');

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
        return (index.h(index.Host, { key: '2d9a69c542ebf714efcd3adf81ccb9eccd6f9a0b', class: "flex h-full items-center" }, index.h("at-tooltip", { key: '37bd96faa0e11d15bdc27ee2975f10e3bb24e892', position: "right", disabled: !this.params?.generateTooltip }, index.h("div", { key: '31c4cfec732f02d9ceaddadd202620b47ada5e94', class: "flex items-center gap-8", slot: "tooltip-trigger" }, this.imagePosition === 'before' &&
            this.imageSource && (index.h("img", { key: 'bbebcb4a137a7fac1626281549cb9c7cc2e96ee9', src: this.imageSource, style: {
                height: `${this.imageHeight}px`,
                width: this.imageWidth
                    ? `${this.imageWidth}px`
                    : undefined,
            }, class: this.imageClass && this.imageClass, alt: "" })), this.text && index.h("span", { key: '516ea444df5dac8a899ec727cb8025b11108f024', class: "truncate" }, this.text), this.imagePosition === 'after' && this.imageSource && (index.h("img", { key: '869d69c75e4f51350310c13be6df07a8f2dba0c7', src: this.imageSource, style: {
                height: `${this.imageHeight}px`,
                width: this.imageWidth
                    ? `${this.imageWidth}px`
                    : undefined,
            }, class: this.imageClass && this.imageClass, alt: "" }))), this.params?.generateTooltip && (index.h("span", { key: '40eac03c81d792e86482379949da03717b1ef58c' }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_text_image_cell = AtTextImageCell;
