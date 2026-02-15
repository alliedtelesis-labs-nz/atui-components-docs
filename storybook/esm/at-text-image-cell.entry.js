import { r as registerInstance, g as getElement, h, H as Host } from './index-jvbUuQtg.js';

const AtTextImageCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
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
        return (h(Host, { key: '1086afcda180bf7cf7a3e427b7aacbb7688b8d2d', class: "flex h-full items-center" }, h("at-tooltip", { key: '45e7948ece7b506fa547fd83b92c94ac37631f04', position: "right", disabled: !this.params?.generateTooltip }, h("div", { key: '9f4b0dd59ac67cd7b9cc8b8ab5b541258e9a2525', class: "flex items-center gap-8", slot: "tooltip-trigger" }, this.imagePosition === 'before' &&
            this.imageSource && (h("img", { key: '8e9230e273c011a1858557815ae41b1ac338842c', src: this.imageSource, style: {
                height: `${this.imageHeight}px`,
                width: this.imageWidth
                    ? `${this.imageWidth}px`
                    : undefined,
            }, class: this.imageClass && this.imageClass, alt: "" })), this.text && h("span", { key: '773887b2d16c0176d11870e59600fde6b33c400a', class: "truncate" }, this.text), this.imagePosition === 'after' && this.imageSource && (h("img", { key: 'b5036dc74af5010696df254b28550ee59ee7177c', src: this.imageSource, style: {
                height: `${this.imageHeight}px`,
                width: this.imageWidth
                    ? `${this.imageWidth}px`
                    : undefined,
            }, class: this.imageClass && this.imageClass, alt: "" }))), this.params?.generateTooltip && (h("span", { key: '8543a89836555adeeb92542457280991ef5c65af' }, this.params.generateTooltip(this.params))))));
    }
};

export { AtTextImageCell as at_text_image_cell };
