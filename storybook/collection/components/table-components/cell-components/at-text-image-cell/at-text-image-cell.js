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
        return (h(Host, { key: 'ed90cba5787c328a284b4bccf3a964b67fc5a2eb', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: '3be18a153b2a31b788c0d52b63bd90c482670906', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: '68c1e632277842b162dba84f82257ff3a16477a8', class: "flex items-center gap-8", slot: "tooltip-trigger" }, this.imagePosition === 'before' &&
            this.imageSource && (h("img", { key: 'a93aee34415e02d307709fccbb412d5b16708079', src: this.imageSource, style: {
                height: `${this.imageHeight}px`,
                width: this.imageWidth
                    ? `${this.imageWidth}px`
                    : undefined,
            }, class: this.imageClass && this.imageClass, alt: "" })), this.text && h("span", { key: 'fea9cb8cac5052a75c9beaaa1240d5a2f48736ec', class: "truncate" }, this.text), this.imagePosition === 'after' && this.imageSource && (h("img", { key: '5f46ec17dbab7d2910f297c4be0c12c7e00a6b9d', src: this.imageSource, style: {
                height: `${this.imageHeight}px`,
                width: this.imageWidth
                    ? `${this.imageWidth}px`
                    : undefined,
            }, class: this.imageClass && this.imageClass, alt: "" }))), this.params?.generateTooltip && (h("span", { key: '8db9f4d6f7af1dc3b947edddd4826956e6a1aa0e' }, this.params.generateTooltip(this.params))))));
    }
    static get is() { return "at-text-image-cell"; }
    static get states() {
        return {
            "text": {}
        };
    }
    static get elementRef() { return "el"; }
}
