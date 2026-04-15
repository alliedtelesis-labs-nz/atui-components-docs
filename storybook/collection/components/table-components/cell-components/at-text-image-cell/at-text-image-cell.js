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
        return (h(Host, { key: 'bbb0f4acb16b19138d1c693450a64262101b12ac', class: "flex h-full items-center" }, h("at-tooltip", { key: '8f4f1d8ddd2652c50a9303cac12b95ceac411b61', position: "right", disabled: !this.params?.generateTooltip }, h("div", { key: 'e9ba63a532d11205f70d17e290a8bde31868d759', class: "flex items-center gap-8", slot: "tooltip-trigger" }, this.imagePosition === 'before' &&
            this.imageSource && (h("img", { key: '9c70e056c939442668c29c0f287e95f22e86a9c9', src: this.imageSource, style: {
                height: `${this.imageHeight}px`,
                width: this.imageWidth
                    ? `${this.imageWidth}px`
                    : undefined,
            }, class: this.imageClass && this.imageClass, alt: "" })), this.text && h("span", { key: '4129afaf297d1b81c4af2fb9fc4184bf2c189ea6', class: "truncate" }, this.text), this.imagePosition === 'after' && this.imageSource && (h("img", { key: '83df7975113854a811b73cfb8de5f4cb3bb1ef05', src: this.imageSource, style: {
                height: `${this.imageHeight}px`,
                width: this.imageWidth
                    ? `${this.imageWidth}px`
                    : undefined,
            }, class: this.imageClass && this.imageClass, alt: "" }))), this.params?.generateTooltip && (h("span", { key: 'bda4c732bef939f9eab8adada74e2be593ecf29b' }, this.params.generateTooltip(this.params))))));
    }
    static get is() { return "at-text-image-cell"; }
    static get states() {
        return {
            "text": {}
        };
    }
    static get elementRef() { return "el"; }
}
