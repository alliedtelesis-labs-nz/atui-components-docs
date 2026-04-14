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
        return (h(Host, { key: '13ccb4616762ce80b432d6d3027efa692d83d2de', class: "flex h-full items-center" }, h("at-tooltip", { key: '616a122b6eb1559395d4f58ec936834dc378b7da', position: "right", disabled: !this.params?.generateTooltip }, h("div", { key: '41ae92541cf9c094f4e49e032e9133dd88b9d66c', class: "flex items-center gap-8", slot: "tooltip-trigger" }, this.imagePosition === 'before' &&
            this.imageSource && (h("img", { key: 'c9734f73be257108f4b0c6677e66b9887ad64ade', src: this.imageSource, style: {
                height: `${this.imageHeight}px`,
                width: this.imageWidth
                    ? `${this.imageWidth}px`
                    : undefined,
            }, class: this.imageClass && this.imageClass, alt: "" })), this.text && h("span", { key: 'cb6a7365e8936103c0706451b034387fe3267998', class: "truncate" }, this.text), this.imagePosition === 'after' && this.imageSource && (h("img", { key: '8613f54123a46f59d72ed1f0e85e6be750139e10', src: this.imageSource, style: {
                height: `${this.imageHeight}px`,
                width: this.imageWidth
                    ? `${this.imageWidth}px`
                    : undefined,
            }, class: this.imageClass && this.imageClass, alt: "" }))), this.params?.generateTooltip && (h("span", { key: 'c179716a3c6fb7e2922ac01538d107d9e318607b' }, this.params.generateTooltip(this.params))))));
    }
    static get is() { return "at-text-image-cell"; }
    static get states() {
        return {
            "text": {}
        };
    }
    static get elementRef() { return "el"; }
}
