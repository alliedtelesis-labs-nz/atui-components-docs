'use strict';

var index = require('./index--r5sCsiV.js');

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
        return (index.h(index.Host, { key: '849a8b03bf63f430108b3024a640a2d2ebc73442', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: '0e36a7cd8d70c0312c47b9b0d8b95f521eb2f202', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: 'dae58a21a2caf0ff6e94433e7603872abecf7677', class: "flex items-center gap-8", slot: "tooltip-trigger" }, this.imagePosition === 'before' &&
            this.imageSource && (index.h("img", { key: '562505a50a58523cd4f80fa98452a0c6018b42e6', src: this.imageSource, style: {
                height: `${this.imageHeight}px`,
                width: this.imageWidth
                    ? `${this.imageWidth}px`
                    : undefined,
            }, class: this.imageClass && this.imageClass, alt: "" })), this.text && index.h("span", { key: '3baf05ca7ba1ca314da548ec8e4377c55af5abbd', class: "truncate" }, this.text), this.imagePosition === 'after' && this.imageSource && (index.h("img", { key: 'c11a6d5b9a413a45bbbbedfca130425f4a53eeb1', src: this.imageSource, style: {
                height: `${this.imageHeight}px`,
                width: this.imageWidth
                    ? `${this.imageWidth}px`
                    : undefined,
            }, class: this.imageClass && this.imageClass, alt: "" }))), this.params?.generateTooltip && (index.h("span", { key: 'b3da4c68986cf555b07c0688a5eea54ea186f105' }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_text_image_cell = AtTextImageCell;
