'use strict';

var index = require('./index-BunRc-jd.js');

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
        return (index.h(index.Host, { key: '3ee50bde3972f7e1f94d39cd8273791c24c05191', class: "flex h-full min-w-0 items-center" }, index.h("at-tooltip", { key: 'cdf5cec74d1adce040746de9a11608c0b169ba6c', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, index.h("div", { key: '14dd65e73607d42d77b3b9de9fc37b20e6a12f11', class: "flex items-center gap-8", slot: "tooltip-trigger" }, this.imagePosition === 'before' &&
            this.imageSource && (index.h("img", { key: '5bf9a8a548c2a8c6b9eb37715eede81ffba8d98b', src: this.imageSource, style: {
                height: `${this.imageHeight}px`,
                width: this.imageWidth
                    ? `${this.imageWidth}px`
                    : undefined,
            }, class: this.imageClass && this.imageClass, alt: "" })), this.text && index.h("span", { key: '275344d5080df7b7073942fe16464f69043cf96c', class: "truncate" }, this.text), this.imagePosition === 'after' && this.imageSource && (index.h("img", { key: '9398aba299d72e38218f6a9626446fc20a63ed2d', src: this.imageSource, style: {
                height: `${this.imageHeight}px`,
                width: this.imageWidth
                    ? `${this.imageWidth}px`
                    : undefined,
            }, class: this.imageClass && this.imageClass, alt: "" }))), this.params?.generateTooltip && (index.h("span", { key: '72a8cfe6183d17578f2a99ae127e1bd01ab57ec2' }, this.params.generateTooltip(this.params))))));
    }
};

exports.at_text_image_cell = AtTextImageCell;
