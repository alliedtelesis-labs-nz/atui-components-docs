import { h, Host } from "@stencil/core";
/**
 * @category Data Tables
 * @description A cell component for displaying a text with an image.
 */
export class AtTextImageCell {
    el;
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
        return (h(Host, { key: '3d6d36325b5b87a832d2f9b5bad53a15fde56226', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: '4216e1fb4ff7c960b08041573d828f8d10feb085', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: '87b4f7d11ef0bc6815c7321bfc64061db03aff9b', class: "flex items-center gap-8", slot: "tooltip-trigger" }, this.imagePosition === 'before' &&
            this.imageSource && (h("img", { key: '16b889eb4ab8eef6a488c65285b4078230836d61', src: this.imageSource, style: {
                height: `${this.imageHeight}px`,
                width: this.imageWidth
                    ? `${this.imageWidth}px`
                    : undefined,
            }, class: this.imageClass && this.imageClass, alt: "" })), this.text && h("span", { key: 'af657b0f9fb0dddf22ecf2dd904ec3c3c0cbf9c7', class: "truncate" }, this.text), this.imagePosition === 'after' && this.imageSource && (h("img", { key: '259378ba6c1bfdbb975cb3437055876d60318bed', src: this.imageSource, style: {
                height: `${this.imageHeight}px`,
                width: this.imageWidth
                    ? `${this.imageWidth}px`
                    : undefined,
            }, class: this.imageClass && this.imageClass, alt: "" }))), this.params?.generateTooltip && (h("span", { key: 'e4fffebd81ca075584e8c0742f30b1fddf6310b2' }, this.params.generateTooltip(this.params))))));
    }
    static get is() { return "at-text-image-cell"; }
    static get states() {
        return {
            "text": {}
        };
    }
    static get elementRef() { return "el"; }
}
