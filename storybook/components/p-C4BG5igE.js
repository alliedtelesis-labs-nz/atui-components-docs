import { p as proxyCustomElement, H, h, c as Host } from './p-89eupKrN.js';
import { d as defineCustomElement$1 } from './p-CJ4jwrx3.js';

const AtTextImageCell = /*@__PURE__*/ proxyCustomElement(class AtTextImageCell extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    get el() { return this; }
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
        return (h(Host, { key: 'c582383171eb0238420aafa09efdc1a812cd31e5', class: "flex h-full items-center" }, h("at-tooltip", { key: '843b3a245163e2b2d542e6f8d40f0d31c8fa3272', position: "right", disabled: !this.params?.generateTooltip }, h("div", { key: '06839d14e1ff10a70fbd441ef57b9d48d6813379', class: "flex items-center gap-8", slot: "tooltip-trigger" }, this.imagePosition === 'before' &&
            this.imageSource && (h("img", { key: 'c5896719b8d61430b1219c067ba8828be3bc5b9a', src: this.imageSource, style: {
                height: `${this.imageHeight}px`,
                width: this.imageWidth
                    ? `${this.imageWidth}px`
                    : undefined,
            }, class: this.imageClass && this.imageClass, alt: "" })), this.text && h("span", { key: '9dec8417ec14d12c6bdf933c6d4482a7d484fb0d', class: "truncate" }, this.text), this.imagePosition === 'after' && this.imageSource && (h("img", { key: '27e501430109906f71ec9c9291ca9023012ff482', src: this.imageSource, style: {
                height: `${this.imageHeight}px`,
                width: this.imageWidth
                    ? `${this.imageWidth}px`
                    : undefined,
            }, class: this.imageClass && this.imageClass, alt: "" }))), this.params?.generateTooltip && (h("span", { key: 'dce804e345050c7b5594e2857c2198ae321470c9' }, this.params.generateTooltip(this.params))))));
    }
}, [256, "at-text-image-cell", {
        "text": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-text-image-cell", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-text-image-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtTextImageCell);
            }
            break;
        case "at-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtTextImageCell as A, defineCustomElement as d };
//# sourceMappingURL=p-C4BG5igE.js.map

//# sourceMappingURL=p-C4BG5igE.js.map