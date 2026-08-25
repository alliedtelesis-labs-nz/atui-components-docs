import { r as registerInstance, a as getElement, h, H as Host } from './index-DgqokAJi.js';

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
        return (h(Host, { key: '3898390f5727aa11d62e6f11749dec17277d2554', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: '393738180df1b39db257045fd5b18f21039461c1', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: '1cf6e8bb49514aa3d0c6b64415143b4a720e5818', class: "flex items-center gap-8", slot: "tooltip-trigger" }, this.imagePosition === 'before' &&
            this.imageSource && (h("img", { key: 'd46ff03dd8777ca9884d8a675cef5d4341d01166', src: this.imageSource, style: {
                height: `${this.imageHeight}px`,
                width: this.imageWidth
                    ? `${this.imageWidth}px`
                    : undefined,
            }, class: this.imageClass && this.imageClass, alt: "" })), this.text && h("span", { key: 'afbc78a6991718d87492b8fc9d2fa76ccd80f2db', class: "truncate" }, this.text), this.imagePosition === 'after' && this.imageSource && (h("img", { key: '2d8b6e5266bdc47e3e96faef4dd670d3aa1eb387', src: this.imageSource, style: {
                height: `${this.imageHeight}px`,
                width: this.imageWidth
                    ? `${this.imageWidth}px`
                    : undefined,
            }, class: this.imageClass && this.imageClass, alt: "" }))), this.params?.generateTooltip && (h("span", { key: '20f678bb868cfce2c97ce38ad024e07e3028cb5d' }, this.params.generateTooltip(this.params))))));
    }
};

export { AtTextImageCell as at_text_image_cell };
